(function () {
  "use strict";

  const I18N = window.TWW_I18N || {};
  const LANGS = Object.keys(I18N);

  // Whistles: `base` is the lowest note at written pitch (MIDI, middle C = 60). A tin whistle sounds an octave higher.
  const KEYS = [
    { id: "C", pc: 0, base: 60 },
    { id: "D", pc: 2, base: 62 },
    { id: "Eb", pc: 3, base: 63 },
    { id: "F", pc: 5, base: 65 },
    { id: "G", pc: 7, base: 67 },
    { id: "A", pc: 9, base: 69 },
    { id: "Bb", pc: 10, base: 58 }
  ];
  const D_BASE = 62;

  // Fingering per semitone above the lowest note. Holes 1 to 6 from top to bottom. X covered, O open, H half-hole.
  const FING = ["XXXXXX", "XXXXXH", "XXXXXO", "XXXXHO", "XXXXOO", "XXXOOO", "XXHOOO", "XXOOOO", "XHOOOO", "XOOOOO", "OXXOOO", "OOOOOO"];
  const MODES = { "": "major", maj: "major", ion: "major", m: "minor", min: "minor", aeo: "minor", dor: "dorian", mix: "mixolydian", lyd: "lydian", phr: "phrygian", loc: "locrian" };
  const LETTER_PC = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
  const RHYTHM_ORDER = ["exercise", "song", "classical", "air", "jig", "slip jig", "reel", "hornpipe", "polka", "slide", "waltz", "march", "other"];
  const R_ALIASES = { "slow air": "air", air: "air", "single jig": "jig", "double jig": "jig", slipjig: "slip jig", valse: "waltz", "set dance": "other", barndance: "hornpipe", strathspey: "other" };

  const $ = (id) => document.getElementById(id);
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* storage unavailable */ } }
  };

  function detectLang() {
    const list = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || "en"];
    for (const l of list) { const c = String(l).slice(0, 2).toLowerCase(); if (I18N[c]) return c; }
    return "en";
  }

  const prefs = store.get("tww.prefs", {});
  let custom = store.get("tww.custom", []);
  const state = {
    lang: I18N[prefs.lang] ? prefs.lang : detectLang(),
    search: prefs.search || "",
    level: prefs.level || "",
    rhythm: prefs.rhythm || "",
    fits: !!prefs.fits,
    tab: !!prefs.tab,
    tuneId: prefs.tuneId || "clair",
    keyId: prefs.keyId || "D",
    mode: prefs.mode || "same",
    speed: prefs.speed || 0.7,
    metro: !!prefs.metro,
    countIn: prefs.countIn !== false,
    melody: prefs.melody !== false,
    loop: !!prefs.loop,
    playing: false,
    paused: false,
    resumePct: null
  };
  function savePrefs() {
    store.set("tww.prefs", { lang: state.lang, search: state.search, level: state.level, rhythm: state.rhythm, fits: state.fits, tab: state.tab, tuneId: state.tuneId, keyId: state.keyId, mode: state.mode, speed: state.speed, metro: state.metro, countIn: state.countIn, melody: state.melody, loop: state.loop });
  }

  // ---------- Translation helpers ----------
  const dict = () => I18N[state.lang] || I18N.en;
  function tr(key, ...args) {
    let v = dict()[key];
    if (v == null) v = I18N.en[key];
    if (v == null) return key;
    return typeof v === "function" ? v(...args) : v;
  }
  const noteName = pc => (dict().notes || I18N.en.notes)[pc];
  const altName = pc => (dict().alt ? dict().alt[pc] : "");
  const modeName = m => (dict().modes || I18N.en.modes)[m] || m;
  const keyName = (pc, m) => dict().keyName ? dict().keyName(noteName(pc), m, modeName(m)) : `${noteName(pc)} ${modeName(m)}`;
  const rhythmName = r => (dict().rhythms || I18N.en.rhythms)[r] || r;
  const whistleName = k => noteName(k.pc);

  function applyStatic() {
    document.documentElement.lang = state.lang;
    document.title = tr("title");
    document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = tr(el.dataset.i18n); });
    document.querySelectorAll("[data-i18n-html]").forEach(el => { el.innerHTML = tr(el.dataset.i18nHtml); });
    document.querySelectorAll("[data-i18n-ph]").forEach(el => { el.placeholder = tr(el.dataset.i18nPh); });
    document.querySelectorAll("[data-i18n-aria]").forEach(el => { el.setAttribute("aria-label", tr(el.dataset.i18nAria)); });
    const ls = $("lang");
    if (!ls.options.length) ls.innerHTML = LANGS.map(c => `<option value="${c}">${esc(I18N[c].name)}</option>`).join("");
    ls.value = state.lang;
  }

  // ---------- Tunes ----------
  function field(abc, f) {
    const m = abc.match(new RegExp("^" + f + ":\\s*(.+)$", "m"));
    return m ? m[1].trim() : "";
  }
  function keyInfo(abc) {
    const k = field(abc, "K");
    const m = k.match(/^([A-Ga-g])([#b]?)\s*([A-Za-z]*)/);
    if (!m) return { pc: 2, mode: "major" };
    const pc = LETTER_PC[m[1].toUpperCase()] + (m[2] === "#" ? 1 : m[2] === "b" ? -1 : 0);
    const w = m[3].toLowerCase();
    return { pc: (pc + 12) % 12, mode: MODES[w.slice(0, 3)] || MODES[w] || "major" };
  }
  function rhythmOf(abc) {
    const r = field(abc, "R").toLowerCase().replace(/s$/, "");
    if (!r) return "other";
    if (RHYTHM_ORDER.includes(r)) return r;
    return R_ALIASES[r] || "other";
  }
  function prepare(t) {
    t.abcTitle = field(t.abc, "T");
    t.ki = keyInfo(t.abc);
    return t;
  }
  const TUNES = (window.TWW_TUNES || []).map(t => prepare(Object.assign({}, t)));
  custom = custom.filter(t => t && t.abc).map(t => prepare(Object.assign(t, { custom: true, rk: t.rk || rhythmOf(t.abc) })));
  const allTunes = () => TUNES.concat(custom);
  const titleOf = t => (t.title && (t.title[state.lang] || t.title.en)) || t.abcTitle || tr("untitled");
  const descOf = t => t.custom ? tr("customDesc") : (t.desc ? t.desc[state.lang] || t.desc.en || "" : "");
  const levelOf = t => t.custom ? tr("mine") : tr("level" + t.level);
  const norm = s => (s || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  // Alphabetical order ignores leading articles and punctuation ("The Kesh Jig" sorts under K)
  const sortKey = s => norm(s).replace(/^[^a-z0-9]+/, "").replace(/^(the|an|a|le|la|les|un|une|el|los|las|der|die|das|ein|eine) +|^l'/, "");
  const searchText = t => norm([t.abcTitle].concat(t.title ? Object.values(t.title) : []).join(" | "));
  const currentTune = () => allTunes().find(t => t.id === state.tuneId) || TUNES[0];
  const currentKey = () => KEYS.find(k => k.id === state.keyId) || KEYS[1];
  const shift = () => (state.mode === "same" ? currentKey().base - D_BASE : 0);

  // Range (written pitch) and pitch classes used, to know whether a tune fits a given whistle
  function analyse(t) {
    if (t.lo != null) return t;
    let lo = 999, hi = -1, p = 0;
    try {
      const a = ABCJS.parseOnly(t.abc)[0].setUpAudio();
      a.tracks[0].forEach(e => { if (e.cmd === "note") { lo = Math.min(lo, e.pitch); hi = Math.max(hi, e.pitch); p |= 1 << (e.pitch % 12); } });
    } catch (e) { /* unreadable tune: treated as playable */ }
    t.lo = lo === 999 ? 62 : lo; t.hi = hi < 0 ? 62 : hi; t.p = p;
    return t;
  }
  // What the tune asks of the chosen whistle and mode
  function fitInfo(t) {
    analyse(t);
    const b = state.mode === "same" ? D_BASE : currentKey().base;
    let half = 0;
    for (let pc = 0; pc < 12; pc++) if (t.p & (1 << pc)) { const rel = ((pc - b) % 12 + 12) % 12; if (rel === 1 || rel === 3 || rel === 6 || rel === 8) half++; }
    const low = t.lo < b, high = t.hi - b > 23;
    return { half, low, high, ok: !half && !low && !high };
  }

  // ---------- Whistle drawing ----------
  let gradId = 0;
  const HOLES = [190, 243, 296, 372, 425, 478];
  function whistleSVG(fing, opt) {
    opt = opt || {};
    const hz = !!opt.horizontal, labels = !!opt.labels;
    const gid = "metal" + (++gradId);
    const C = hz ? 52 : 62; // centre across the tube
    const P = (a, c) => (hz ? [a, C + c] : [C + c, a]);
    const rect = (a0, a1, c0, c1, attrs) => {
      const [x0, y0] = P(a0, c0), [x1, y1] = P(a1, c1);
      return `<rect x="${Math.min(x0, x1)}" y="${Math.min(y0, y1)}" width="${Math.abs(x1 - x0)}" height="${Math.abs(y1 - y0)}" ${attrs}/>`;
    };
    let s = "";
    const vb = hz ? (labels ? "0 0 530 112" : "0 18 530 70") : (labels ? "0 0 160 530" : "38 0 48 500");
    s += `<svg viewBox="${vb}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${esc(opt.aria || tr("fingering"))}">`;
    s += `<defs><linearGradient id="${gid}" x1="0" y1="0" x2="${hz ? 0 : 1}" y2="${hz ? 1 : 0}">
      <stop offset="0" stop-color="var(--tube-a)"/><stop offset=".45" stop-color="var(--tube-b)"/><stop offset="1" stop-color="var(--tube-a)"/></linearGradient></defs>`;
    // Tube
    s += rect(110, 520, -16, 16, `fill="url(#${gid})" stroke="var(--tube-edge)" stroke-width="1.2" rx="3"`);
    // Mouthpiece
    s += rect(0, 124, -21, 21, `fill="var(--head)" stroke="var(--head-dark)" stroke-width="1.5" rx="9"`);
    s += rect(2, 14, -10, 10, `fill="var(--head-dark)" rx="3"`);
    s += rect(88, 106, -9, 9, `fill="var(--head-dark)" rx="2"`);
    // Holes
    HOLES.forEach((a, i) => {
      const st = fing ? fing[i] : "O";
      const [x, y] = P(a, 0), r = 12.5;
      if (st === "X") {
        s += `<circle class="hole" cx="${x}" cy="${y}" r="${r}" fill="var(--hole-closed)" stroke="var(--hole-ring)" stroke-width="2.5"/>`;
      } else {
        s += `<circle class="hole" cx="${x}" cy="${y}" r="${r}" fill="var(--hole-open)" stroke="var(--hole-ring)" stroke-width="2.5"/>`;
        if (st === "H") {
          const d = hz
            ? `M${x - r} ${y} A${r} ${r} 0 0 0 ${x + r} ${y} Z`
            : `M${x} ${y - r} A${r} ${r} 0 0 0 ${x} ${y + r} Z`;
          s += `<path d="${d}" fill="var(--hole-closed)"/>`;
        }
      }
      if (labels) {
        const [tx, ty] = P(a, -34);
        s += `<text x="${tx}" y="${ty}" text-anchor="middle" dominant-baseline="central" font-family="var(--font-mono)" font-size="13" fill="var(--muted)">${i + 1}</text>`;
      }
    });
    if (labels) {
      [[0, 2, tr("leftHand")], [3, 5, tr("rightHand")]].forEach(([i0, i1, txt]) => {
        const a0 = HOLES[i0] - 14, a1 = HOLES[i1] + 14, am = (a0 + a1) / 2;
        const [x0, y0] = P(a0, 30), [x1, y1] = P(a1, 30);
        s += `<line x1="${x0}" y1="${y0}" x2="${x1}" y2="${y1}" stroke="var(--line)" stroke-width="2" stroke-linecap="round"/>`;
        const [tx, ty] = P(am, 44);
        s += hz
          ? `<text x="${tx}" y="${ty + 4}" text-anchor="middle" font-size="13" fill="var(--muted)" font-family="var(--font-body)">${esc(txt)}</text>`
          : `<text x="${tx}" y="${ty}" text-anchor="middle" dominant-baseline="central" font-size="13" fill="var(--muted)" font-family="var(--font-body)" transform="rotate(90 ${tx} ${ty})">${esc(txt)}</text>`;
      });
    }
    if (opt.octave2) {
      const [bx, by] = P(60, 0);
      s += `<circle cx="${bx}" cy="${by}" r="13" fill="var(--accent)"/><text x="${bx}" y="${by + 1}" text-anchor="middle" dominant-baseline="central" font-size="20" font-weight="700" fill="var(--surface)" font-family="var(--font-body)">+</text>`;
    }
    return s + "</svg>";
  }

  function fingeringFor(off) {
    if (off === 12) return "OXXXXX";
    return FING[off % 12];
  }
  // Written pitch (MIDI) -> fingering on the chosen whistle
  function noteInfo(written) {
    const k = currentKey();
    const played = written + shift();
    let off = played - k.base, folded = 0;
    while (off < 0) { off += 12; folded = 1; }
    while (off > 23) { off -= 12; folded = -1; }
    const f = fingeringFor(off);
    const pc = ((played % 12) + 12) % 12;
    return { pc, off, f, octave: off >= 12 ? 2 : 1, folded, sounding: k.base + off + 12, half: f.indexOf("H") >= 0 };
  }

  const isNarrow = window.matchMedia("(max-width: 820px)");
  let shown = null;
  function showNote(info) {
    shown = info;
    $("whistle").innerHTML = whistleSVG(info ? info.f : "XXXXXX", { labels: true, horizontal: isNarrow.matches, octave2: info && info.octave === 2, aria: info ? tr("fingeringOf", noteName(info.pc)) : tr("whistleAria") });
    if (!info) { $("noteName").textContent = ""; $("noteEn").textContent = ""; $("badges").innerHTML = ""; return; }
    $("noteName").textContent = noteName(info.pc);
    $("noteEn").textContent = (altName(info.pc) ? altName(info.pc) + " · " : "") + tr("octave", info.octave);
    const b = [];
    if (info.octave === 2) b.push(`<span class="badge">${esc(tr("blowHarder", info.off === 12))}</span>`);
    if (info.half) b.push(`<span class="badge warn">${esc(tr("halfHole"))}</span>`);
    if (info.off === 10 || info.off === 22) b.push(`<span class="badge">${esc(tr("crossFing"))}</span>`);
    if (info.folded) b.push(`<span class="badge warn">${esc(tr("folded", info.folded > 0))}</span>`);
    $("badges").innerHTML = b.join("");
  }
  function showNext(info) {
    $("nextName").textContent = info ? noteName(info.pc) + (info.octave === 2 ? " +" : "") : "–";
    $("nextWhistle").innerHTML = info ? whistleSVG(info.f, { horizontal: true, octave2: info.octave === 2, aria: tr("next") }) : "";
  }
  isNarrow.addEventListener("change", () => showNote(shown));

  // ---------- Audio: synthesised whistle + metronome ----------
  const synth = {
    ctx: null, master: null, voice: null, noise: null, clicks: [],
    init() {
      if (!this.ctx) {
        const AC = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AC();
        this.master = this.ctx.createGain();
        this.master.gain.value = 0.55;
        this.master.connect(this.ctx.destination);
        const len = this.ctx.sampleRate;
        this.noise = this.ctx.createBuffer(1, len, len);
        const d = this.noise.getChannelData(0);
        for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
      }
      if (this.ctx.state === "suspended") this.ctx.resume();
    },
    note(midi, durMs) {
      this.init();
      this.off(0.012);
      const c = this.ctx, t = c.currentTime + 0.005, f = 440 * Math.pow(2, (midi - 69) / 12);
      const g = c.createGain();
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(0.34, t + 0.03);
      g.gain.setTargetAtTime(0.27, t + 0.035, 0.1);
      g.connect(this.master);
      const o1 = c.createOscillator(); o1.type = "sine"; o1.frequency.value = f; o1.connect(g);
      const o2 = c.createOscillator(); o2.type = "sine"; o2.frequency.value = f * 2;
      const g2 = c.createGain(); g2.gain.value = 0.07; o2.connect(g2); g2.connect(g);
      const lfo = c.createOscillator(); lfo.frequency.value = 5.3;
      const lg = c.createGain(); lg.gain.setValueAtTime(0, t); lg.gain.linearRampToValueAtTime(f * 0.005, t + 0.45);
      lfo.connect(lg); lg.connect(o1.frequency);
      const n = c.createBufferSource(); n.buffer = this.noise; n.loop = true;
      const bp = c.createBiquadFilter(); bp.type = "bandpass"; bp.frequency.value = f * 1.5; bp.Q.value = 1.2;
      const ng = c.createGain(); ng.gain.setValueAtTime(0.09, t); ng.gain.setTargetAtTime(0.025, t + 0.03, 0.05);
      n.connect(bp); bp.connect(ng); ng.connect(g);
      const nodes = [o1, o2, lfo, n];
      nodes.forEach(x => x.start(t));
      this.voice = { g, nodes };
      if (durMs) {
        const end = t + durMs / 1000;
        g.gain.setTargetAtTime(0, end, 0.02);
        nodes.forEach(x => x.stop(end + 0.2));
      }
    },
    off(tc) {
      const v = this.voice;
      if (!v || !this.ctx) return;
      const t = this.ctx.currentTime;
      if (v.g.gain.cancelAndHoldAtTime) v.g.gain.cancelAndHoldAtTime(t); else v.g.gain.cancelScheduledValues(t);
      v.g.gain.setTargetAtTime(0, t, tc || 0.03);
      v.nodes.forEach(x => { try { x.stop(t + 0.25); } catch (e) { /* already stopped */ } });
      this.voice = null;
    },
    click(accent, when) {
      this.init();
      const c = this.ctx, t = when || c.currentTime;
      const o = c.createOscillator(); o.type = "triangle"; o.frequency.value = accent ? 1760 : 1180;
      const g = c.createGain();
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(accent ? 0.7 : 0.45, t + 0.002);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.07);
      o.connect(g); g.connect(this.master);
      o.start(t); o.stop(t + 0.09);
      this.clicks.push(o);
      if (this.clicks.length > 32) this.clicks.shift();
    },
    cancelClicks() {
      this.clicks.forEach(o => { try { o.stop(); } catch (e) { /* already played */ } });
      this.clicks = [];
    }
  };

  // ---------- Score and timing ----------
  let renderedId = null;
  let visualObj = null, timer = null, events = [], byMs = new Map(), byChar = new Map(), lit = [];
  let countToken = 0;
  // Timing events carry pitches without abcjs' visualTranspose
  const pitchIncludesTranspose = false;

  function accentColor() {
    return getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() || "#a26f12";
  }
  function qpm() { return Math.max(20, Math.round(visualObj.getBpm() * state.speed)); }
  function beatsPerMeasure() { try { return visualObj.getBeatsPerMeasure() || 4; } catch (e) { return 4; } }

  function renderTune() {
    hardStop();
    const t = currentTune();
    const isNew = renderedId !== t.id;
    renderedId = t.id;
    // In tab mode, systems are spread apart to fit a mini whistle under every note
    const abc = state.tab ? t.abc.replace(/^(X:.*)$/m, "$1\n%%staffsep 125") : t.abc;
    const res = ABCJS.renderAbc("score", abc, {
      add_classes: true,
      responsive: "resize",
      visualTranspose: shift(),
      clickListener: onNoteClick,
      selectionColor: accentColor(),
      paddingtop: 6, paddingbottom: state.tab ? 80 : 6, paddingleft: 4, paddingright: 4,
      staffwidth: 760,
      wrap: { minSpacing: 1.8, maxSpacing: 2.7, preferredMeasuresPerLine: 4 }
    });
    visualObj = res[0];
    try { visualObj.setUpAudio({}); } catch (e) { /* pitches stay available through the timings */ }
    buildTimer();
    analyseMeasures();
    if (isNew) { state.from = 1; state.to = measureCount; selMeasure = null; updateSelButtons(); }
    setPassage(state.from, state.to);
    if (state.tab) drawTabs();
    updateHeader();
    resetDisplay();
    renderChart();
  }

  function pitchOf(ev) {
    const p = ev.midiPitches[0].pitch;
    return pitchIncludesTranspose ? p - shift() : p;
  }

  function buildTimer() {
    if (timer) { try { timer.stop(); } catch (e) { /* nothing */ } }
    timer = new ABCJS.TimingCallbacks(visualObj, { qpm: qpm(), beatSubdivisions: 1, eventCallback: onEvent, beatCallback: onBeat });
    const all = (timer.noteTimings || []).filter(e => e.type === "event");
    events = [];
    byMs = new Map();
    byChar = new Map();
    all.forEach((e, i) => {
      if (!e.midiPitches || !e.midiPitches.length) return;
      const next = all[i + 1];
      const end = next ? next.milliseconds : timer.lastMoment;
      const item = { ev: e, idx: events.length, dur: Math.max(60, end - e.milliseconds) };
      events.push(e);
      byMs.set(Math.round(e.milliseconds), item);
      if (!byChar.has(e.startChar)) byChar.set(e.startChar, e);
    });
    updateTempoLabel();
    computePassage();
  }

  // ---------- Bars and section ----------
  let measureOf = new Map(), measureBoxes = [], measureCount = 0, selMeasure = null, jumping = false;
  state.from = 1; state.to = 1; state.passStart = 0; state.passEnd = null;

  // Numbers the bars in score order and records where they sit on the staff
  function analyseMeasures() {
    measureOf = new Map();
    measureBoxes = [];
    let m = 1;
    (visualObj.lines || []).forEach(line => {
      if (!line.staff || !line.staff[0]) return;
      const els = line.staff[0].voices[0] || [];
      const box = el => { const g = el.abselem && el.abselem.elemset && el.abselem.elemset[0]; return g && g.getBBox ? g.getBBox() : null; };
      const firstBar = els.map(e => e.el_type === "bar" ? box(e) : null).find(Boolean);
      let top = firstBar ? firstBar.y : 0, h = firstBar ? firstBar.height : 30;
      let has = false, x0 = null, right = 0;
      els.forEach(el => {
        const b = box(el);
        if (el.el_type === "note") {
          if (x0 == null && b) x0 = b.x - 6;
          has = true;
          measureOf.set(el.startChar, m);
          if (b) right = b.x + b.width;
        } else if (el.el_type === "bar") {
          if (b) { top = b.y; h = b.height; }
          if (has) { measureBoxes.push({ m, x0, x1: b ? b.x : right + 4, y: top, h }); m++; has = false; }
          x0 = b ? b.x + b.width : null;
        }
      });
      if (has) { measureBoxes.push({ m, x0, x1: right + 6, y: top, h }); m++; }
    });
    measureCount = m - 1;
    drawMeasureNumbers();
  }

  function svgLayer(cls, behind) {
    const svg = $("score").querySelector("svg");
    if (!svg) return null;
    svg.querySelectorAll("." + cls).forEach(n => n.remove());
    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.setAttribute("class", cls);
    if (behind) svg.insertBefore(g, svg.firstChild); else svg.appendChild(g);
    return g;
  }
  function drawMeasureNumbers() {
    const g = svgLayer("mlayer", false);
    if (!g) return;
    g.innerHTML = measureBoxes.map(b => `<text class="mnum" x="${b.x0 + 2}" y="${b.y - 3}">${b.m}</text>`).join("");
  }
  function drawPassage() {
    const g = svgLayer("player", true);
    if (!g) return;
    if (isWhole()) { g.innerHTML = ""; return; }
    const below = state.tab ? 78 : 12;
    g.innerHTML = measureBoxes.filter(b => b.m >= state.from && b.m <= state.to)
      .map(b => `<rect class="pass" x="${b.x0}" y="${b.y - 14}" width="${Math.max(4, b.x1 - b.x0)}" height="${b.h + 14 + below}" rx="3"/>`).join("");
  }
  const isWhole = () => state.from <= 1 && state.to >= measureCount;

  // Start and end of the section in milliseconds, in playing order (repeats included)
  function computePassage() {
    state.passStart = 0;
    state.passEnd = null;
    if (!timer || !measureCount || isWhole()) return;
    const evs = (timer.noteTimings || []).filter(e => e.type === "event" && measureOf.has(e.startChar));
    const mOf = e => measureOf.get(e.startChar);
    const i0 = evs.findIndex(e => mOf(e) === state.from);
    if (i0 < 0) return;
    state.passStart = state.from <= 1 ? 0 : evs[i0].milliseconds;
    let j = -1;
    for (let i = i0; i < evs.length; i++) if (mOf(evs[i]) === state.to) { j = i; break; }
    if (j < 0) return;
    while (j < evs.length && mOf(evs[j]) === state.to) j++;
    state.passEnd = j < evs.length ? evs[j].milliseconds : null;
  }

  function setPassage(from, to) {
    const n = Math.max(1, measureCount);
    from = Math.min(Math.max(1, Math.round(+from) || 1), n);
    to = Math.min(Math.max(1, Math.round(+to) || n), n);
    if (to < from) [from, to] = [to, from];
    state.from = from;
    state.to = to;
    $("fromBar").value = from;
    $("toBar").value = to;
    $("fromBar").max = $("toBar").max = n;
    $("barTotal").textContent = tr("ofBars", n);
    computePassage();
    drawPassage();
    $("passHint").textContent = isWhole() ? tr("passWhole") : tr("passRange", from, to, state.loop);
    if (!state.playing && !state.paused) resetDisplay();
  }
  function updateSelButtons() {
    $("setFrom").disabled = $("setTo").disabled = selMeasure == null;
    $("setFrom").textContent = tr("setFrom", selMeasure);
    $("setTo").textContent = tr("setTo", selMeasure);
  }
  function endOfPassage() {
    synth.off();
    if (state.loop) { jumpToStart(); return; }
    setTimeout(() => { hardStop(); resetDisplay(); }, 0);
  }
  function jumpToStart() {
    jumping = true;
    setTimeout(() => {
      jumping = false;
      if (!state.playing) return;
      timer.pause();
      if (state.passStart > 0 && timer.lastMoment) timer.start(state.passStart / timer.lastMoment);
      else { timer.reset(); timer.start(); }
    }, 0);
  }

  // ---------- Tab view: a mini whistle under every note ----------
  let tabByChar = new Map();
  function drawTabs() {
    tabByChar = new Map();
    const svg = $("score").querySelector("svg");
    if (!svg || !visualObj) return;
    const NS = "http://www.w3.org/2000/svg";
    const layer = document.createElementNS(NS, "g");
    layer.setAttribute("class", "tabs");
    svg.appendChild(layer);
    visualObj.lines.forEach(line => {
      if (!line.staff || !line.staff[0]) return;
      const items = [];
      (line.staff[0].voices[0] || []).forEach(el => {
        if (el.el_type !== "note" || el.rest || !el.pitches || !el.abselem) return;
        const ev = byChar.get(el.startChar);
        const g = el.abselem.elemset && el.abselem.elemset[0];
        if (!ev || !g || !g.getBBox) return;
        items.push({ el, ev, b: g.getBBox() });
      });
      if (!items.length) return;
      // All whistles of a system on one line, below the lowest note
      const y0 = Math.max(...items.map(it => it.b.y + it.b.height)) + 8;
      items.forEach(it => {
        const head = it.el.abselem.notePositions && it.el.abselem.notePositions[0];
        const x = head ? head.x : it.b.x + it.b.width / 2;
        const info = noteInfo(pitchOf(it.ev));
        const g = document.createElementNS(NS, "g");
        g.setAttribute("class", "tab");
        let s = "";
        if (info.octave === 2) s += `<text class="tp" x="${x}" y="${y0 + 7}" text-anchor="middle">+</text>`;
        for (let i = 0; i < 6; i++) {
          const cy = y0 + 14 + i * 8.6 + (i >= 3 ? 4 : 0), r = 3.6, st = info.f[i];
          s += `<circle class="${st === "X" ? "tc" : "to"}" cx="${x}" cy="${cy}" r="${r}"/>`;
          if (st === "H") s += `<path class="tc" d="M${x} ${cy - r} A${r} ${r} 0 0 0 ${x} ${cy + r} Z"/>`;
        }
        g.innerHTML = s;
        layer.appendChild(g);
        if (!tabByChar.has(it.el.startChar)) tabByChar.set(it.el.startChar, g);
      });
    });
  }
  let litTab = null;
  function lightTab(ev) {
    if (litTab) litTab.classList.remove("hlt");
    litTab = ev && state.tab ? tabByChar.get(ev.startChar) || null : null;
    if (litTab) litTab.classList.add("hlt");
  }

  function clearLit() { lit.forEach(el => el.classList.remove("hl")); lit = []; lightTab(null); }
  function lightUp(elements) {
    clearLit();
    (elements || []).forEach(group => (group || []).forEach(el => { el.classList.add("hl"); lit.push(el); }));
    const el = lit[0];
    if (el && state.playing) {
      const r = el.getBoundingClientRect();
      const top = isNarrow.matches ? document.querySelector(".whistle-panel").getBoundingClientRect().bottom + 10 : 10;
      if (r.top < top || r.bottom > window.innerHeight - 30) {
        window.scrollBy({ top: r.top - (top + window.innerHeight) / 2 + 40, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
      }
    }
  }

  function onEvent(ev) {
    if (!ev || ev.type === "end") { onEnd(); return; }
    if (jumping) return;
    if (state.passEnd != null && ev.milliseconds >= state.passEnd - 1) { endOfPassage(); return; }
    lightUp(ev.elements);
    lightTab(ev);
    if (timer && timer.lastMoment) $("progress").style.width = Math.min(100, ev.milliseconds / timer.lastMoment * 100) + "%";
    const item = byMs.get(Math.round(ev.milliseconds));
    if (item) {
      const info = noteInfo(pitchOf(item.ev));
      showNote(info);
      const nx = events[item.idx + 1];
      showNext(nx ? noteInfo(pitchOf(nx)) : null);
      if (state.melody) synth.note(info.sounding, item.dur * 0.92); else synth.off();
    } else {
      synth.off();
    }
  }

  function onBeat(beat, total) {
    if (!state.metro || !state.playing || beat >= total) return;
    synth.click(beat % beatsPerMeasure() === 0);
  }

  function onEnd() {
    synth.off();
    if (state.loop && state.playing) { jumpToStart(); return; }
    setTimeout(() => { hardStop(); resetDisplay(); }, 0);
  }

  function onNoteClick(abcelem) {
    if (measureOf.has(abcelem.startChar)) { selMeasure = measureOf.get(abcelem.startChar); updateSelButtons(); }
    if (state.playing) return;
    const ev = byChar.get(abcelem.startChar);
    let info = null;
    if (ev) info = noteInfo(pitchOf(ev));
    else if (abcelem.midiPitches && abcelem.midiPitches.length) info = noteInfo(abcelem.midiPitches[0].pitch - (pitchIncludesTranspose ? shift() : 0));
    if (!info) return;
    showNote(info);
    const i = ev ? events.indexOf(ev) : -1;
    showNext(i >= 0 && events[i + 1] ? noteInfo(pitchOf(events[i + 1])) : null);
    synth.note(info.sounding, 600);
  }

  function resetDisplay() {
    clearLit();
    $("progress").style.width = timer && timer.lastMoment ? (state.passStart / timer.lastMoment * 100) + "%" : "0";
    const i = Math.max(0, events.findIndex(e => e.milliseconds >= state.passStart));
    showNote(events[i] ? noteInfo(pitchOf(events[i])) : null);
    showNext(events[i + 1] ? noteInfo(pitchOf(events[i + 1])) : null);
  }

  // ---------- Transport ----------
  function setPlayUI() {
    $("playLabel").textContent = tr(state.playing ? "pause" : state.paused ? "resume" : "play");
    $("playIcon").innerHTML = state.playing ? '<rect x="3.5" y="2.5" width="3" height="11" rx="1"/><rect x="9.5" y="2.5" width="3" height="11" rx="1"/>' : '<path d="M4 2.5v11l9-5.5z"/>';
  }

  function countIn() {
    const tok = ++countToken;
    let n = beatsPerMeasure();
    if (n <= 2) n *= 2;
    const ms = 60000 / qpm();
    const t0 = synth.ctx.currentTime + 0.08;
    const bpm = beatsPerMeasure();
    for (let i = 0; i < n; i++) synth.click(i % bpm === 0, t0 + i * ms / 1000);
    $("noteBox").hidden = true;
    $("counter").hidden = false;
    return new Promise(resolve => {
      for (let i = 0; i < n; i++) setTimeout(() => { if (tok === countToken) $("counter").textContent = String(i + 1); }, 80 + i * ms);
      setTimeout(() => {
        $("counter").hidden = true;
        $("noteBox").hidden = false;
        resolve(tok === countToken);
      }, 80 + n * ms);
    });
  }

  async function togglePlay() {
    synth.init();
    if (state.playing) {
      timer.pause();
      synth.off();
      state.playing = false;
      state.paused = true;
      setPlayUI();
      return;
    }
    const resuming = state.paused;
    state.playing = true;
    setPlayUI();
    if (!resuming && state.metro && state.countIn) {
      const ok = await countIn();
      if (!ok || !state.playing) return;
    }
    if (resuming && state.resumePct != null) { timer.start(state.resumePct); }
    else if (resuming) { timer.start(); }
    else if (state.passStart > 0 && timer.lastMoment) { timer.start(state.passStart / timer.lastMoment); }
    else { timer.reset(); timer.start(); }
    state.resumePct = null;
    state.paused = false;
  }

  function hardStop() {
    countToken++;
    synth.cancelClicks();
    if (timer) { try { timer.stop(); timer.reset(); } catch (e) { /* nothing */ } }
    synth.off();
    state.playing = false;
    state.paused = false;
    state.resumePct = null;
    $("counter").hidden = true;
    $("noteBox").hidden = false;
    setPlayUI();
  }

  function setSpeed(v) {
    state.speed = v;
    savePrefs();
    if (!visualObj) return;
    const pct = timer && timer.lastMoment ? (timer.currentTime || 0) / timer.lastMoment : 0;
    const countingIn = !$("counter").hidden;
    const wasPlaying = state.playing && !countingIn;
    if (wasPlaying) timer.pause();
    buildTimer();
    if (wasPlaying) timer.start(pct);
    else if (state.paused) state.resumePct = pct;
  }

  function updateTempoLabel() {
    const pct = Math.round(state.speed * 100);
    $("speedOut").textContent = pct + " % · " + (visualObj ? qpm() : "–") + " " + beatUnit();
  }
  function beatUnit() {
    const q = field(currentTune().abc, "Q");
    const m = q.match(/(\d+)\/(\d+)\s*=/);
    if (!m) return "bpm";
    return { "1/4": "♩/min", "3/8": "♩./min", "1/2": "𝅗𝅥/min", "1/8": "♪/min" }[m[1] + "/" + m[2]] || "bpm";
  }

  // ---------- Tune header and selectors ----------
  function updateHeader() {
    const t = currentTune(), k = currentKey();
    const tonic = (t.ki.pc + shift() + 12) % 12;
    $("tuneTitle").textContent = titleOf(t);
    const chips = [];
    chips.push(`<span class="chip k">${esc(keyName(tonic, t.ki.mode))}${shift() ? " " + esc(tr("transposed")) : ""}</span>`);
    const meter = field(t.abc, "M");
    if (meter) chips.push(`<span class="chip">${esc(meter)}</span>`);
    if (t.rk && t.rk !== "other") chips.push(`<span class="chip">${esc(rhythmName(t.rk))}</span>`);
    chips.push(`<span class="chip">${esc(levelOf(t))}</span>`);
    $("tuneMeta").innerHTML = chips.join("");
    const fi = fitInfo(t), notes = [];
    if (fi.half) notes.push(tr("halfNotes", fi.half));
    if (fi.low) notes.push(tr("tooLow"));
    if (fi.high) notes.push(tr("tooHigh"));
    const fitTxt = fi.ok ? tr("fitAll", whistleName(k)) : tr("fitSome", whistleName(k), notes.join(", "));
    const desc = descOf(t);
    $("tuneDesc").textContent = (desc ? desc + " " : "") + fitTxt;
    $("deleteTune").hidden = !t.custom;

    const isD = k.id === "D";
    $("modeSame").disabled = $("modeReal").disabled = isD;
    $("modeSame").setAttribute("aria-pressed", String(state.mode === "same"));
    $("modeReal").setAttribute("aria-pressed", String(state.mode === "real"));
    $("modeHint").textContent = isD ? tr("hintD") : state.mode === "same" ? tr("hintSame", whistleName(k)) : tr("hintReal");
    updateTempoLabel();
  }

  function fillSelects() {
    const rCounts = {}, lCounts = {};
    allTunes().forEach(t => {
      rCounts[t.rk] = (rCounts[t.rk] || 0) + 1;
      const l = t.custom ? "mine" : String(t.level);
      lCounts[l] = (lCounts[l] || 0) + 1;
    });
    $("rhythm").innerHTML = `<option value="">${esc(tr("allRhythms"))}</option>` + RHYTHM_ORDER
      .filter(r => rCounts[r])
      .map(r => `<option value="${r}">${esc(rhythmName(r))} (${rCounts[r]})</option>`).join("");
    $("rhythm").value = rCounts[state.rhythm] ? state.rhythm : "";
    state.rhythm = $("rhythm").value;
    $("level").innerHTML = `<option value="">${esc(tr("allLevels"))}</option>` + ["1", "2", "3", "mine"]
      .map(l => `<option value="${l}">${esc(l === "mine" ? tr("mine") : tr("level" + l))} (${lCounts[l] || 0})</option>`).join("");
    $("level").value = state.level;
    $("search").value = state.search;
    $("fits").checked = state.fits;
    if (!allTunes().some(t => t.id === state.tuneId)) state.tuneId = TUNES[0].id;
    renderResults();
    $("whistleKey").innerHTML = KEYS.map(k => `<option value="${k.id}">${esc(tr("whistleIn", whistleName(k), k.id === "D"))}</option>`).join("");
    $("whistleKey").value = state.keyId;
  }

  // ---------- Filtered tune list ----------
  function renderResults() {
    const q = norm(state.search).trim();
    const list = allTunes().filter(t => {
      if (state.level === "mine" ? !t.custom : state.level && String(t.level) !== state.level) return false;
      if (state.rhythm && t.rk !== state.rhythm) return false;
      if (q && !searchText(t).includes(q)) return false;
      if (state.fits && !fitInfo(t).ok) return false;
      return true;
    });
    list.sort((a, b) => sortKey(titleOf(a)).localeCompare(sortKey(titleOf(b)), state.lang));
    const box = $("results");
    if (!list.length) {
      box.innerHTML = `<div class="empty">${esc(tr("empty"))}</div>`;
    } else {
      box.innerHTML = list.map(t => {
        const fi = fitInfo(t);
        const cls = fi.ok ? "" : fi.half ? " half" : " range";
        const tip = fi.ok ? tr("tipOk") : fi.half ? tr("tipHalf") : tr("tipRange");
        const key = t.ki.mode === "major" ? noteName(t.ki.pc) : keyName(t.ki.pc, t.ki.mode);
        const type = t.rk && t.rk !== "other" ? rhythmName(t.rk) + " · " : "";
        return `<button type="button" class="res" role="option" data-id="${esc(t.id)}" aria-selected="${t.id === state.tuneId}">
          <i class="dot${cls}" title="${esc(tip)}"></i><span>${esc(titleOf(t))}</span><small>${esc(type + key)}</small></button>`;
      }).join("");
    }
    $("tuneHint").textContent = tr("count", list.length, allTunes().length);
    const sel = box.querySelector('[aria-selected="true"]');
    if (sel) sel.scrollIntoView({ block: "nearest" });
  }
  function esc(s) { return String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }
  $("results").addEventListener("click", e => {
    const b = e.target.closest(".res");
    if (!b || b.dataset.id === state.tuneId) return;
    state.tuneId = b.dataset.id;
    savePrefs();
    $("results").querySelectorAll(".res").forEach(r => r.setAttribute("aria-selected", String(r === b)));
    renderTune();
  });
  let searchTimer = 0;
  $("search").addEventListener("input", e => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => { state.search = e.target.value; savePrefs(); renderResults(); }, 120);
  });
  $("level").addEventListener("change", e => { state.level = e.target.value; savePrefs(); renderResults(); });
  $("rhythm").addEventListener("change", e => { state.rhythm = e.target.value; savePrefs(); renderResults(); });
  $("fits").addEventListener("change", e => { state.fits = e.target.checked; savePrefs(); renderResults(); });

  // ---------- Fingering chart ----------
  function renderChart() {
    const k = currentKey();
    const offs = [0, 2, 4, 5, 7, 9, 10, 11, 12, 14, 16, 17, 19, 21, 23];
    $("chartSub").textContent = tr("chartSub", whistleName(k));
    $("chart").innerHTML = offs.map(off => {
      const pc = (k.base + off) % 12;
      const f = fingeringFor(off);
      const alt = altName(pc);
      return `<button type="button" class="cell" data-off="${off}" aria-label="${esc(noteName(pc) + (off >= 12 ? ", " + tr("secondOctave") : ""))}">
        ${whistleSVG(f, { octave2: off >= 12, aria: noteName(pc) })}
        <b>${esc(noteName(pc))}${off >= 12 ? " +" : ""}</b>${alt ? `<small>${esc(alt)}</small>` : ""}</button>`;
    }).join("");
  }
  $("chart").addEventListener("click", e => {
    const c = e.target.closest(".cell");
    if (!c || state.playing) return;
    const off = +c.dataset.off, k = currentKey();
    const info = { pc: (k.base + off) % 12, off, f: fingeringFor(off), octave: off >= 12 ? 2 : 1, folded: 0, sounding: k.base + off + 12, half: false };
    showNote(info);
    synth.note(info.sounding, 700);
  });

  // ---------- Personal tunes ----------
  function saveCustom() {
    store.set("tww.custom", custom.map(t => ({ id: t.id, rk: t.rk, abc: t.abc })));
  }
  // A text can hold several tunes, each starting with an X: line
  function splitAbc(text) {
    text = String(text || "").replace(/^\uFEFF/, "").replace(/\r\n?/g, "\n");
    return text.split(/^(?=X:)/m).map(s => s.trim()).filter(s => /^K:/m.test(s))
      .map(s => /^X:/.test(s) ? s : "X:1\n" + s);
  }
  function hasNotes(text) {
    try {
      const lines = ABCJS.parseOnly(text)[0].lines || [];
      return lines.some(l => l.staff && l.staff.some(s => s.voices && s.voices.some(v => v.some(el => el.el_type === "note" && el.pitches))));
    } catch (e) { return false; }
  }
  // Two tunes are the same if they match apart from X:, R:, comments and spacing
  const sameKey = abc => abc.replace(/^(X|R):.*$/gm, "").replace(/^%.*$/gm, "").replace(/\s+/g, "");
  // Adds every readable tune of the text to "My tunes", skipping ones already in the bank
  function importAbc(text) {
    const parts = splitAbc(text);
    const known = new Set(allTunes().map(t => sameKey(t.abc)));
    const res = { found: parts.length, added: 0, dup: 0, bad: 0, firstId: null };
    parts.forEach((abc, i) => {
      if (!hasNotes(abc)) { res.bad++; return; }
      const k = sameKey(abc);
      if (known.has(k)) { res.dup++; return; }
      known.add(k);
      const id = "mine-" + Date.now().toString(36) + "-" + i;
      custom.push(prepare({ id, rk: rhythmOf(abc), abc, custom: true }));
      res.added++;
      if (!res.firstId) res.firstId = id;
    });
    if (res.added) {
      saveCustom();
      state.tuneId = res.firstId;
      savePrefs();
      fillSelects();
      renderTune();
    }
    return res;
  }
  function say(el, cls, text) { el.className = "msg " + cls; el.textContent = text; }

  $("addTune").addEventListener("click", () => {
    const abc = $("abcInput").value.trim();
    const msg = $("customMsg");
    if (!/^K:/m.test(abc)) { say(msg, "err", tr("errNoK")); return; }
    const r = importAbc(abc);
    if (r.found === 1 && r.added === 1) say(msg, "ok", tr("added"));
    else if (r.added) say(msg, "ok", tr("importResult", r.added, r.dup, r.bad));
    else if (r.dup && !r.bad) say(msg, "err", tr("alreadyThere"));
    else { say(msg, "err", tr("errNoNotes")); return; }
    if (r.added) $("abcInput").value = "";
  });

  // ---------- Import / export (.abc files) ----------
  $("importBtn").addEventListener("click", () => $("importFile").click());
  $("importFile").addEventListener("change", async e => {
    const files = [...e.target.files];
    e.target.value = "";
    if (!files.length) return;
    let text = "";
    try { for (const f of files) text += "\n\n" + await f.text(); } catch (err) { say($("ioMsg"), "err", tr("readError")); return; }
    const r = importAbc(text);
    if (!r.found) say($("ioMsg"), "err", tr("readError"));
    else say($("ioMsg"), r.added ? "ok" : "err", r.added ? tr("importResult", r.added, r.dup, r.bad) : r.dup ? tr("alreadyThere") : tr("readError"));
  });
  function exportAbc(list, fileName, withLicence) {
    const day = new Date().toISOString().slice(0, 10);
    const head = ["%abc-2.1", `% ${tr("title")}: https://remim-dev.github.io/tin-whistle-workshop/`, `% ${day}, tunes: ${list.length}`];
    if (withLicence) head.push("% ABC transcriptions by remim-dev, CC BY-NC-SA 4.0: https://creativecommons.org/licenses/by-nc-sa/4.0/");
    const body = list.map((t, i) => {
      let abc = t.abc.trim().replace(/^X:.*$/m, "X:" + (i + 1));
      if (!/^R:/m.test(abc) && t.rk && t.rk !== "other") abc = abc.replace(/^(T:.*)$/m, "$1\nR:" + t.rk);
      return abc;
    });
    const blob = new Blob([head.join("\n") + "\n\n" + body.join("\n\n") + "\n"], { type: "text/vnd.abc;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `${fileName}-${day}.abc`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    say($("ioMsg"), "ok", tr("exported", list.length));
  }
  const byTitle = list => list.slice().sort((a, b) => sortKey(titleOf(a)).localeCompare(sortKey(titleOf(b)), state.lang));
  $("exportAll").addEventListener("click", () => exportAbc(byTitle(allTunes()), "tin-whistle-bank", true));
  $("exportMine").addEventListener("click", () => {
    if (!custom.length) { say($("ioMsg"), "err", tr("exportEmpty")); return; }
    exportAbc(byTitle(custom), "my-tin-whistle-tunes", false);
  });
  $("deleteTune").addEventListener("click", () => {
    const t = currentTune();
    if (!t.custom) return;
    custom = custom.filter(c => c.id !== t.id);
    saveCustom();
    state.tuneId = TUNES[0].id;
    savePrefs();
    fillSelects();
    renderTune();
    $("customMsg").className = "msg ok";
    $("customMsg").textContent = tr("removed");
  });

  // ---------- Wiring ----------
  $("lang").addEventListener("change", e => {
    state.lang = I18N[e.target.value] ? e.target.value : "en";
    savePrefs();
    applyStatic();
    fillSelects();
    updateSelButtons();
    renderTune();
  });
  $("whistleKey").addEventListener("change", e => { state.keyId = e.target.value; savePrefs(); renderTune(); renderResults(); });
  $("modeSame").addEventListener("click", () => { state.mode = "same"; savePrefs(); renderTune(); renderResults(); });
  $("modeReal").addEventListener("click", () => { state.mode = "real"; savePrefs(); renderTune(); renderResults(); });
  function setView(tab) {
    state.tab = tab;
    $("viewStaff").setAttribute("aria-pressed", String(!tab));
    $("viewTab").setAttribute("aria-pressed", String(tab));
    savePrefs();
  }
  setView(state.tab);
  $("viewStaff").addEventListener("click", () => { if (state.tab) { setView(false); renderTune(); } });
  $("viewTab").addEventListener("click", () => { if (!state.tab) { setView(true); renderTune(); } });
  $("fromBar").addEventListener("change", e => setPassage(e.target.value, Math.max(+e.target.value, state.to)));
  $("toBar").addEventListener("change", e => setPassage(Math.min(+e.target.value, state.from), e.target.value));
  $("wholeTune").addEventListener("click", () => setPassage(1, measureCount));
  $("setFrom").addEventListener("click", () => { if (selMeasure != null) setPassage(selMeasure, Math.max(selMeasure, state.to)); });
  $("setTo").addEventListener("click", () => { if (selMeasure != null) setPassage(Math.min(selMeasure, state.from), selMeasure); });
  $("play").addEventListener("click", togglePlay);
  $("stop").addEventListener("click", () => { hardStop(); resetDisplay(); });
  $("speed").value = Math.round(state.speed * 100);
  $("speed").addEventListener("input", e => setSpeed(+e.target.value / 100));
  [["metro", "metro"], ["countin", "countIn"], ["melody", "melody"], ["loop", "loop"]].forEach(([id, key]) => {
    const el = $(id);
    el.checked = state[key];
    el.addEventListener("change", () => {
      state[key] = el.checked;
      if (key === "melody" && !el.checked) synth.off();
      if (key === "loop") setPassage(state.from, state.to);
      $("countin").disabled = !state.metro;
      savePrefs();
    });
  });
  $("countin").disabled = !state.metro;
  document.addEventListener("keydown", e => {
    if (e.code !== "Space") return;
    const tag = (e.target.tagName || "").toLowerCase();
    if (["textarea", "input", "select", "button", "summary"].includes(tag)) return;
    e.preventDefault();
    togglePlay();
  });
  const themeObs = new MutationObserver(() => { if (!state.playing) renderTune(); });
  themeObs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

  applyStatic();
  updateSelButtons();
  setPlayUI();
  if (!window.ABCJS) {
    $("score").innerHTML = `<p class="msg err">${esc(tr("abcjsError"))}</p>`;
    return;
  }
  fillSelects();
  renderTune();
})();
