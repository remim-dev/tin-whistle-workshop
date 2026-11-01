// Estimated difficulty of a tune on a D whistle, from 1 (beginner) to 3 (advanced).
// Shared by the app (any tune, including imported ones) and by the script that builds
// tunes-oneill.js. Licence: CC BY-NC-SA 4.0 (see LICENSE).
//
// The score adds up what makes a tune hard on the whistle:
//   pace        notes per whole note, weighted by how fast the tune type is usually played
//   upper       share of notes in the second octave, more for the top notes (A and B)
//   halfHoles   notes that need a half-covered hole (F, G#, Bb, D# on a D whistle)
//   cross       C natural, played with a cross-fingering
//   leaps       intervals of a fifth or more
//   ornaments   cuts, rolls and triplets written in the ABC
(function (root) {
  const D = 62;
  const PACE = { reel: 1, hornpipe: 0.9, "set dance": 0.9, jig: 0.9, "slip jig": 0.9, polka: 0.8, slide: 0.8, march: 0.6, waltz: 0.5, classical: 0.5, song: 0.4, air: 0.35, exercise: 0.3, other: 0.6 };

  function notesOf(ABCJS, abc) {
    const tune = ABCJS.parseOnly(abc)[0];
    const notes = [];
    tune.setUpAudio().tracks[0].forEach(e => { if (e.cmd === "note") notes.push(e); });
    // Length in whole notes, repeats included (abcjs plays them out)
    const length = notes.reduce((m, e) => Math.max(m, e.start + e.duration), 0);
    return { notes, length };
  }

  function difficulty(ABCJS, abc, rk) {
    let notes, length;
    try { ({ notes, length } = notesOf(ABCJS, abc)); } catch (e) { return null; }
    if (!notes.length || !length) return null;
    const body = abc.replace(/^[A-Za-z]:.*$/gm, "").replace(/%.*$/gm, "").replace(/"[^"]*"/g, "");
    let lo = 999, hi = 0, p = 0, upper = 0, top = 0, half = 0, cross = 0, leaps = 0;
    const halfPcs = new Set();
    notes.forEach((e, i) => {
      const m = e.pitch, rel = ((m - D) % 12 + 12) % 12;
      lo = Math.min(lo, m); hi = Math.max(hi, m); p |= 1 << (m % 12);
      if (m >= D + 12) upper++;
      if (m >= D + 19) top++;
      if (rel === 1 || rel === 3 || rel === 6 || rel === 8) { half++; halfPcs.add(rel); }
      if (rel === 10) cross++;
      if (i && Math.abs(m - notes[i - 1].pitch) >= 7) leaps++;
    });
    const n = notes.length;
    const ornaments = (body.match(/\{[^}]*\}|~|\(3/g) || []).length;
    const parts = {
      // A reel has about 8 notes per whole note
      pace: Math.min(3, (n / length) / 8 * 2.4 * (PACE[rk] || PACE.other)),
      upper: 3 * upper / n + 6 * top / n,
      halfHoles: Math.min(3, 20 * half / n + 0.6 * halfPcs.size),
      cross: Math.min(1, 6 * cross / n),
      leaps: Math.min(1.5, 8 * leaps / n),
      ornaments: Math.min(1.5, 4 * ornaments / n)
    };
    const score = Object.values(parts).reduce((a, b) => a + b, 0);
    const level = score < 3 ? 1 : score < 5.2 ? 2 : 3;
    // lo, hi and p (pitch classes used, as bits) are what the app needs to check a tune against a whistle
    return { level, score: Math.round(score * 100) / 100, parts, lo, hi, p, fits: lo >= D && hi <= D + 24 };
  }

  if (typeof module === "object" && module.exports) module.exports = difficulty;
  else root.TWW_DIFFICULTY = difficulty;
})(this);
