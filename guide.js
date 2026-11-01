// Playing technique guide, per language. Licence: CC BY-NC-SA 4.0 (see LICENSE).
// Sections are HTML with placeholders that app.js replaces when the guide opens:
//   [[fig:NAME]]       a drawing (hands, pad, breath, half), labelled with `labels`
//   [[n:OFF]]          fingering of the note OFF semitones above low D (12 and up: 2nd octave);
//   [[n:OFF:XXXXXX]]   same note with another fingering. Tapping a fingering plays the note.
//   [[abc:NAME]]       a short score from TWW_GUIDE_ABC
//   [[tune:ID]]        a button that opens that tune or exercise
// A language without a guide falls back to English.
window.TWW_GUIDE_ABC = {
  tongue: "X:1\nM:4/4\nL:1/4\nK:D\nA A B B | (A B c d) | e4 |]\nw: tu tu tu tu tu * * * tu",
  cut: "X:1\nM:6/8\nL:1/8\nK:D\nd2{e}d B2{d}B | A2{B}A A3 |]",
  tap: "X:1\nM:4/4\nL:1/8\nK:D\nA2{G}A2 B2{A}B2 | A8 |]",
  roll: "X:1\nM:6/8\nL:1/8\nK:D\n~A3 BAG | A{B}A{G}A BAG |]"
};

window.TWW_GUIDE = {
  en: {
    labels: {
      pad: "Finger pad: the hole is sealed", tip: "Fingertip: air leaks",
      tooSoft: "too soft: breathy", oct1: "1st octave", oct2: "2nd octave", tooHard: "too hard: squeak", air: "air speed",
      closed: "covered", half: "half-hole", open: "open", alt: "or"
    },
    sections: [
      { id: "hold", h: "Holding the whistle", body: `
<p>Hold the whistle pointing down at about 45°. Put only the tip of the mouthpiece between your lips, without touching your teeth.</p>
<ul>
<li><b>Left hand on top</b>: index, middle and ring fingers on holes 1, 2 and 3.</li>
<li><b>Right hand below</b>: index, middle and ring fingers on holes 4, 5 and 6.</li>
<li>The thumbs go behind the tube to hold it. The right little finger can rest on the tube, below the holes.</li>
<li>Cover the holes with the <b>flat pad</b> of the finger, not with the tip.</li>
<li>Stay relaxed: straight wrists, loose shoulders. Pressing hard does not seal better.</li>
</ul>
[[fig:hands]]
[[fig:pad]]
<p class="tip">A note that sounds airy or squeals almost always means a hole is not quite covered. Play low D softly; if it doesn't sound, check each finger from the bottom up.</p>` },
      { id: "breath", h: "Breath and sound", body: `
<p>The whistle needs very little air. Blow a gentle, steady stream, as if saying a long “too” without voice. The push comes from the belly, not the cheeks, which stay flat.</p>
<p>Each register has its own air speed. Low D needs the softest air: blow too hard and it jumps an octave up.</p>
[[fig:breath]]
<p>Breathe through the mouth at the end of phrases. In traditional music, players leave out a note to take a breath rather than slow down the tune.</p>` },
      { id: "tongue", h: "Tonguing and slurring", body: `
<p>Start a note with the tongue by saying “tu” (or a softer “du”) into the whistle. Tongue the first note of a phrase and repeated notes. Under a slur, only the first note is tongued: the others follow on the same breath, only the fingers move.</p>
[[abc:tongue]]
<p>Irish players tongue less than classical flautists: repeated notes are often separated with a cut instead (see Ornaments).</p>` },
      { id: "octave", h: "The second octave (+)", body: `
<p>A <b>+</b> marks the second octave. The fingering stays the same as in the low octave: only the breath changes. Blow <b>faster, not louder</b>: narrow the lips a little and push from the belly. At the right moment the sound flips up an octave.</p>
<div class="figs">[[n:2]][[n:14]]</div>
<p>The higher the note, the more air speed it needs: high D and E come easily, high A and B much less.</p>
<p><b>High D</b> is played with hole 1 open: it comes out more cleanly and in tune. With all holes covered it works too, but it tends to fall back to low D.</p>
<div class="figs">[[n:12]][[n:12:XXXXXX]]</div>
<p class="tip">Squeal: too much air. The note falls back or wavers between the two octaves: not enough air. Doesn't sound at all: a leaking hole.</p>
<div class="tunes">[[tune:ex-echo]][[tune:ex-jumps]][[tune:ex-slurs]][[tune:ex-long]]</div>` },
      { id: "half", h: "Half-holes", body: `
<p>A half-hole covers only half of a hole to get the semitone in between. On a D whistle, four notes need one: F natural (hole 5), G sharp (hole 3), B flat (hole 2) and D sharp, also called E flat (hole 6).</p>
[[fig:half]]
<div class="figs">[[n:3]][[n:6]][[n:8]][[n:1]]</div>
<ul>
<li>Slide or roll the finger down the tube to uncover part of the hole, rather than lifting it.</li>
<li>Tune it by ear: tap the note in the fingering chart to hear it, then adjust how much of the hole is open.</li>
<li>In the tune list, an orange dot shows tunes that need half-holes on your whistle.</li>
</ul>
<div class="tunes">[[tune:ex-fnat]][[tune:ex-bflat]][[tune:ex-gsharp]][[tune:ex-chromatic]]</div>` },
      { id: "cross", h: "Cross-fingering: C natural", body: `
<p>C natural is played with a <b>cross-fingering</b>: hole 1 open, holes 2 and 3 covered. Compare with C sharp, all holes open. Some players half-cover hole 1 instead.</p>
<div class="figs">[[n:10]][[n:11]]</div>
<p>C natural is common in tunes in G and in D mixolydian.</p>
<div class="tunes">[[tune:ex-gscale]]</div>` },
      { id: "orn", h: "Ornaments", body: `
<p>Irish music is decorated with very short grace notes, played with the fingers, not the tongue. Learn a tune plain first, then add ornaments once the melody is secure.</p>
<p><b>Cut</b>: lift a finger above the note for an instant, in one quick flick. It separates two identical notes or accents a note. It is written as a small note above.</p>
[[abc:cut]]
<p><b>Tap</b> (or strike): briefly slap the hole just below the note with a finger. Written as a small note below.</p>
[[abc:tap]]
<p><b>Roll</b>: note, cut, note, tap, note, all in one breath. It is written ~ and takes the place of a long note.</p>
[[abc:roll]]` },
      { id: "practice", h: "How to practise", body: `
<ul>
<li>Little and often: 10 to 15 minutes a day is worth more than an hour a week.</li>
<li>Start at 50 to 60 % speed and only speed up when it's clean.</li>
<li>Work on a hard spot with “Section to play” and “Loop”.</li>
<li>Turn on the metronome to keep the beat steady.</li>
<li>Choose “Exercise” in the type filter to see all the exercises. Suggested order: scales, octaves, then half-holes.</li>
</ul>
<div class="tunes">[[tune:scale]][[tune:ex-thirds]][[tune:ex-gscale]][[tune:ex-jigscale]]</div>` }
    ]
  },

  fr: {
    labels: {
      pad: "Pulpe du doigt : le trou est étanche", tip: "Bout du doigt : l'air fuit",
      tooSoft: "trop doux : souffle", oct1: "1ʳᵉ octave", oct2: "2ᵉ octave", tooHard: "trop fort : couinement", air: "vitesse de l'air",
      closed: "bouché", half: "demi-trou", open: "ouvert", alt: "ou"
    },
    sections: [
      { id: "hold", h: "Tenir la flûte", body: `
<p>Tenez la flûte inclinée vers le bas, à environ 45°. Placez seulement le bout du bec entre les lèvres, sans toucher les dents.</p>
<ul>
<li><b>Main gauche en haut</b> : index, majeur et annulaire sur les trous 1, 2 et 3.</li>
<li><b>Main droite en bas</b> : index, majeur et annulaire sur les trous 4, 5 et 6.</li>
<li>Les pouces se placent derrière le tube pour le tenir. L'auriculaire droit peut se poser sur le tube, sous les trous.</li>
<li>Bouchez avec la <b>pulpe</b> du doigt, à plat, pas avec le bout.</li>
<li>Restez détendu : poignets droits, épaules basses. Appuyer fort ne bouche pas mieux.</li>
</ul>
[[fig:hands]]
[[fig:pad]]
<p class="tip">Une note qui souffle ou qui couine vient presque toujours d'un trou mal bouché. Jouez le Ré grave doucement ; s'il ne sort pas, vérifiez chaque doigt en partant du bas.</p>` },
      { id: "breath", h: "Le souffle et le son", body: `
<p>La flûte demande très peu d'air. Soufflez un filet doux et régulier, comme pour dire un long « tou » sans voix. La poussée vient du ventre, pas des joues, qui restent plates.</p>
<p>Chaque registre a sa vitesse d'air. Le Ré grave demande le souffle le plus doux : trop fort, il saute à l'octave.</p>
[[fig:breath]]
<p>Respirez par la bouche en fin de phrase. En musique traditionnelle, on supprime une note pour respirer plutôt que de ralentir l'air.</p>` },
      { id: "tongue", h: "Coup de langue et liaisons", body: `
<p>On attaque une note avec la langue en disant « tu » (ou « du », plus doux) dans la flûte. Détachez la première note d'une phrase et les notes répétées. Sous une liaison, seule la première note est attaquée : les autres suivent dans le même souffle, seuls les doigts bougent.</p>
[[abc:tongue]]
<p>Les flûtistes irlandais utilisent moins la langue qu'en classique : les notes répétées sont souvent séparées par un coupé (voir Ornements).</p>` },
      { id: "octave", h: "La deuxième octave (+)", body: `
<p>Le <b>+</b> signale la 2ᵉ octave. Le doigté reste celui de l'octave grave : seul le souffle change. Soufflez <b>plus vite, pas plus fort</b> : resserrez un peu les lèvres et poussez avec le ventre. Au bon moment, le son bascule d'un coup vers l'aigu.</p>
<div class="figs">[[n:2]][[n:14]]</div>
<p>Plus la note est haute, plus il faut de vitesse : le Ré+ et le Mi+ partent facilement, le La+ et le Si+ beaucoup moins.</p>
<p>Le <b>Ré+</b> se joue avec le trou 1 ouvert : il sort plus proprement et plus juste. Tous trous bouchés, ça marche aussi, mais il a tendance à retomber dans le grave.</p>
<div class="figs">[[n:12]][[n:12:XXXXXX]]</div>
<p class="tip">Ça couine : trop d'air. Le son retombe ou hésite entre les deux octaves : pas assez. Rien ne sort : un trou fuit.</p>
<div class="tunes">[[tune:ex-echo]][[tune:ex-jumps]][[tune:ex-slurs]][[tune:ex-long]]</div>` },
      { id: "half", h: "Les demi-trous", body: `
<p>Un demi-trou ne bouche qu'une partie du trou, pour obtenir le demi-ton intermédiaire. Sur une flûte en Ré, quatre notes en demandent un : Fa naturel (trou 5), Sol dièse (trou 3), Si bémol (trou 2) et Ré dièse, ou Mi bémol (trou 6).</p>
[[fig:half]]
<div class="figs">[[n:3]][[n:6]][[n:8]][[n:1]]</div>
<ul>
<li>Faites glisser ou rouler le doigt vers le bas du tube pour découvrir une partie du trou, plutôt que de le lever.</li>
<li>Réglez à l'oreille : touchez la note dans le tableau des doigtés pour l'entendre, puis ajustez l'ouverture.</li>
<li>Dans la liste des morceaux, un point orange signale les airs qui demandent des demi-trous sur votre flûte.</li>
</ul>
<div class="tunes">[[tune:ex-fnat]][[tune:ex-bflat]][[tune:ex-gsharp]][[tune:ex-chromatic]]</div>` },
      { id: "cross", h: "Doigté croisé : le Do naturel", body: `
<p>Le Do naturel se joue en <b>doigté croisé</b> : trou 1 ouvert, trous 2 et 3 bouchés. À comparer avec le Do dièse, tous trous ouverts. Certains préfèrent boucher le trou 1 à moitié.</p>
<div class="figs">[[n:10]][[n:11]]</div>
<p>Le Do naturel est fréquent dans les airs en Sol et en Ré mixolydien.</p>
<div class="tunes">[[tune:ex-gscale]]</div>` },
      { id: "orn", h: "Les ornements", body: `
<p>La musique irlandaise s'orne de notes très brèves, jouées avec les doigts et non avec la langue. Apprenez d'abord l'air sans ornements, puis ajoutez-les quand la mélodie est sûre.</p>
<p><b>Coupé</b> (cut) : levez un doigt au-dessus de la note pendant un instant, d'un seul geste vif. Il sépare deux notes identiques ou accentue une note. Il s'écrit avec une petite note au-dessus.</p>
[[abc:cut]]
<p><b>Frappé</b> (tap) : frappez brièvement le trou juste sous la note avec un doigt. Il s'écrit avec une petite note en dessous.</p>
[[abc:tap]]
<p><b>Roulé</b> (roll) : note, coupé, note, frappé, note, dans le même souffle. Il s'écrit ~ et remplace une note longue.</p>
[[abc:roll]]` },
      { id: "practice", h: "Comment travailler", body: `
<ul>
<li>Peu mais souvent : 10 à 15 minutes par jour valent mieux qu'une heure par semaine.</li>
<li>Commencez à 50 ou 60 % de la vitesse et n'accélérez que lorsque c'est propre.</li>
<li>Travaillez un passage difficile avec « Passage à jouer » et « En boucle ».</li>
<li>Activez le métronome pour garder une pulsation régulière.</li>
<li>Choisissez « Exercice » dans le filtre des types pour voir tous les exercices. Ordre conseillé : gammes, octaves, puis demi-trous.</li>
</ul>
<div class="tunes">[[tune:scale]][[tune:ex-thirds]][[tune:ex-gscale]][[tune:ex-jigscale]]</div>` }
    ]
  },

  es: {
    labels: {
      pad: "Yema del dedo: el agujero queda sellado", tip: "Punta del dedo: el aire se escapa",
      tooSoft: "muy suave: soplido", oct1: "1.ª octava", oct2: "2.ª octava", tooHard: "muy fuerte: chirrido", air: "velocidad del aire",
      closed: "tapado", half: "medio agujero", open: "abierto", alt: "o"
    },
    sections: [
      { id: "hold", h: "Sujetar la flauta", body: `
<p>Sujeta la flauta inclinada hacia abajo, a unos 45°. Coloca solo la punta de la boquilla entre los labios, sin tocar los dientes.</p>
<ul>
<li><b>Mano izquierda arriba</b>: índice, medio y anular en los agujeros 1, 2 y 3.</li>
<li><b>Mano derecha abajo</b>: índice, medio y anular en los agujeros 4, 5 y 6.</li>
<li>Los pulgares van detrás del tubo para sujetarlo. El meñique derecho puede apoyarse en el tubo, debajo de los agujeros.</li>
<li>Tapa con la <b>yema</b> del dedo, plana, no con la punta.</li>
<li>Mantente relajado: muñecas rectas, hombros sueltos. Apretar fuerte no tapa mejor.</li>
</ul>
[[fig:hands]]
[[fig:pad]]
<p class="tip">Una nota que sopla o chirría casi siempre viene de un agujero mal tapado. Toca el Re grave suave; si no sale, revisa cada dedo empezando por abajo.</p>` },
      { id: "breath", h: "El soplo y el sonido", body: `
<p>La flauta necesita muy poco aire. Sopla un hilo suave y regular, como si dijeras un «tu» largo sin voz. El empuje viene del abdomen, no de las mejillas, que quedan planas.</p>
<p>Cada registro tiene su velocidad de aire. El Re grave necesita el soplo más suave: si soplas fuerte, salta a la octava.</p>
[[fig:breath]]
<p>Respira por la boca al final de las frases. En la música tradicional se omite una nota para respirar en lugar de frenar la melodía.</p>` },
      { id: "tongue", h: "Golpe de lengua y ligaduras", body: `
<p>Se ataca una nota con la lengua diciendo «tu» (o «du», más suave) dentro de la flauta. Ataca la primera nota de cada frase y las notas repetidas. Bajo una ligadura, solo se ataca la primera nota: las demás siguen en el mismo soplo y solo se mueven los dedos.</p>
[[abc:tongue]]
<p>Los flautistas irlandeses usan menos la lengua que en la música clásica: las notas repetidas suelen separarse con un corte (ver Ornamentos).</p>` },
      { id: "octave", h: "La segunda octava (+)", body: `
<p>El <b>+</b> indica la 2.ª octava. La digitación es la misma que en la octava grave: solo cambia el soplo. Sopla <b>más rápido, no más fuerte</b>: cierra un poco los labios y empuja con el abdomen. En el momento justo, el sonido salta a la octava aguda.</p>
<div class="figs">[[n:2]][[n:14]]</div>
<p>Cuanto más aguda la nota, más velocidad de aire necesita: el Re+ y el Mi+ salen fácilmente, el La+ y el Si+ mucho menos.</p>
<p>El <b>Re+</b> se toca con el agujero 1 abierto: sale más limpio y más afinado. Con todos los agujeros tapados también funciona, pero tiende a caer al grave.</p>
<div class="figs">[[n:12]][[n:12:XXXXXX]]</div>
<p class="tip">Chirría: demasiado aire. El sonido cae o duda entre las dos octavas: falta aire. No sale nada: un agujero pierde aire.</p>
<div class="tunes">[[tune:ex-echo]][[tune:ex-jumps]][[tune:ex-slurs]][[tune:ex-long]]</div>` },
      { id: "half", h: "Medios agujeros", body: `
<p>Un medio agujero tapa solo una parte del agujero para obtener el semitono intermedio. En una flauta en Re, cuatro notas lo necesitan: Fa natural (agujero 5), Sol sostenido (agujero 3), Si bemol (agujero 2) y Re sostenido o Mi bemol (agujero 6).</p>
[[fig:half]]
<div class="figs">[[n:3]][[n:6]][[n:8]][[n:1]]</div>
<ul>
<li>Desliza o rueda el dedo hacia abajo para destapar parte del agujero, en lugar de levantarlo.</li>
<li>Afina de oído: toca la nota en la tabla de digitaciones para oírla y ajusta la abertura.</li>
<li>En la lista de piezas, un punto naranja indica las que necesitan medios agujeros en tu flauta.</li>
</ul>
<div class="tunes">[[tune:ex-fnat]][[tune:ex-bflat]][[tune:ex-gsharp]][[tune:ex-chromatic]]</div>` },
      { id: "cross", h: "Digitación cruzada: el Do natural", body: `
<p>El Do natural se toca con <b>digitación cruzada</b>: agujero 1 abierto, agujeros 2 y 3 tapados. Compáralo con el Do sostenido, todos los agujeros abiertos. Algunos prefieren tapar el agujero 1 a medias.</p>
<div class="figs">[[n:10]][[n:11]]</div>
<p>El Do natural es frecuente en las piezas en Sol y en Re mixolidio.</p>
<div class="tunes">[[tune:ex-gscale]]</div>` },
      { id: "orn", h: "Ornamentos", body: `
<p>La música irlandesa se adorna con notas muy breves, hechas con los dedos y no con la lengua. Aprende primero la pieza sin adornos y añádelos cuando la melodía esté segura.</p>
<p><b>Corte</b> (cut): levanta un dedo por encima de la nota un instante, en un solo gesto rápido. Separa dos notas iguales o acentúa una nota. Se escribe con una notita encima.</p>
[[abc:cut]]
<p><b>Golpe</b> (tap): golpea brevemente con un dedo el agujero justo debajo de la nota. Se escribe con una notita debajo.</p>
[[abc:tap]]
<p><b>Roll</b>: nota, corte, nota, golpe, nota, en el mismo soplo. Se escribe ~ y sustituye a una nota larga.</p>
[[abc:roll]]` },
      { id: "practice", h: "Cómo practicar", body: `
<ul>
<li>Poco y a menudo: 10 a 15 minutos al día valen más que una hora a la semana.</li>
<li>Empieza al 50 o 60 % de velocidad y acelera solo cuando salga limpio.</li>
<li>Trabaja un pasaje difícil con «Fragmento a tocar» y «En bucle».</li>
<li>Activa el metrónomo para mantener un pulso regular.</li>
<li>Elige «Ejercicio» en el filtro de tipos para ver todos los ejercicios. Orden aconsejado: escalas, octavas y luego medios agujeros.</li>
</ul>
<div class="tunes">[[tune:scale]][[tune:ex-thirds]][[tune:ex-gscale]][[tune:ex-jigscale]]</div>` }
    ]
  },

  de: {
    labels: {
      pad: "Fingerkuppe flach: das Loch ist dicht", tip: "Fingerspitze: Luft entweicht",
      tooSoft: "zu schwach: hauchig", oct1: "1. Oktave", oct2: "2. Oktave", tooHard: "zu stark: Quietschen", air: "Luftgeschwindigkeit",
      closed: "gedeckt", half: "Halbloch", open: "offen", alt: "oder"
    },
    sections: [
      { id: "hold", h: "Die Whistle halten", body: `
<p>Halte die Whistle etwa 45° nach unten geneigt. Nimm nur die Spitze des Mundstücks zwischen die Lippen, ohne die Zähne zu berühren.</p>
<ul>
<li><b>Linke Hand oben</b>: Zeige-, Mittel- und Ringfinger auf den Löchern 1, 2 und 3.</li>
<li><b>Rechte Hand unten</b>: Zeige-, Mittel- und Ringfinger auf den Löchern 4, 5 und 6.</li>
<li>Die Daumen liegen hinter dem Rohr und halten es. Der rechte kleine Finger darf unterhalb der Löcher auf dem Rohr ruhen.</li>
<li>Decke die Löcher mit der <b>flachen Fingerkuppe</b>, nicht mit der Spitze.</li>
<li>Bleib locker: gerade Handgelenke, entspannte Schultern. Fester drücken dichtet nicht besser.</li>
</ul>
[[fig:hands]]
[[fig:pad]]
<p class="tip">Klingt ein Ton hauchig oder quietscht er, ist fast immer ein Loch nicht ganz gedeckt. Spiel das tiefe D leise; kommt es nicht, prüfe jeden Finger von unten nach oben.</p>` },
      { id: "breath", h: "Atem und Ton", body: `
<p>Die Whistle braucht sehr wenig Luft. Blase einen sanften, gleichmäßigen Strom, als würdest du ein langes „tu“ ohne Stimme sagen. Der Druck kommt aus dem Bauch, nicht aus den Wangen, die flach bleiben.</p>
<p>Jedes Register hat seine Luftgeschwindigkeit. Das tiefe D braucht den sanftesten Atem: zu stark, und es springt eine Oktave höher.</p>
[[fig:breath]]
<p>Atme am Ende einer Phrase durch den Mund. In der traditionellen Musik lässt man zum Atmen eher eine Note weg, als das Tempo zu bremsen.</p>` },
      { id: "tongue", h: "Zungenstoß und Bindungen", body: `
<p>Ein Ton beginnt mit der Zunge: sag „tu“ (oder weicher „du“) in die Whistle. Stoße die erste Note einer Phrase und wiederholte Noten an. Unter einem Bogen wird nur die erste Note angestoßen: die anderen folgen im selben Atem, nur die Finger bewegen sich.</p>
[[abc:tongue]]
<p>Irische Spieler stoßen weniger an als klassische Flötisten: wiederholte Noten werden oft mit einem Cut getrennt (siehe Verzierungen).</p>` },
      { id: "octave", h: "Die zweite Oktave (+)", body: `
<p>Ein <b>+</b> kennzeichnet die 2. Oktave. Der Griff bleibt wie in der tiefen Oktave: nur der Atem ändert sich. Blase <b>schneller, nicht lauter</b>: die Lippen etwas enger, Druck aus dem Bauch. Im richtigen Moment springt der Ton nach oben.</p>
<div class="figs">[[n:2]][[n:14]]</div>
<p>Je höher der Ton, desto mehr Luftgeschwindigkeit braucht er: hohes D und E kommen leicht, hohes A und H viel weniger.</p>
<p>Das <b>hohe D</b> spielt man mit offenem Loch 1: es kommt sauberer und reiner. Mit allen Löchern gedeckt geht es auch, fällt aber leicht ins tiefe D zurück.</p>
<div class="figs">[[n:12]][[n:12:XXXXXX]]</div>
<p class="tip">Es quietscht: zu viel Luft. Der Ton fällt zurück oder schwankt zwischen den Oktaven: zu wenig Luft. Es kommt gar nichts: ein Loch ist undicht.</p>
<div class="tunes">[[tune:ex-echo]][[tune:ex-jumps]][[tune:ex-slurs]][[tune:ex-long]]</div>` },
      { id: "half", h: "Halblöcher", body: `
<p>Ein Halbloch deckt das Loch nur teilweise, um den Halbton dazwischen zu bekommen. Auf einer D-Whistle brauchen vier Töne eines: F (Loch 5), Gis (Loch 3), B (Loch 2) und Dis bzw. Es (Loch 6).</p>
[[fig:half]]
<div class="figs">[[n:3]][[n:6]][[n:8]][[n:1]]</div>
<ul>
<li>Schiebe oder rolle den Finger am Rohr nach unten, um einen Teil des Lochs freizugeben, statt ihn anzuheben.</li>
<li>Stimme nach Gehör: tippe den Ton in der Grifftabelle an, um ihn zu hören, und passe die Öffnung an.</li>
<li>In der Stückliste zeigt ein orangefarbener Punkt Stücke, die auf deiner Whistle Halblöcher brauchen.</li>
</ul>
<div class="tunes">[[tune:ex-fnat]][[tune:ex-bflat]][[tune:ex-gsharp]][[tune:ex-chromatic]]</div>` },
      { id: "cross", h: "Gabelgriff: das C", body: `
<p>Das C spielt man mit <b>Gabelgriff</b>: Loch 1 offen, Löcher 2 und 3 gedeckt. Zum Vergleich das Cis, alle Löcher offen. Manche decken stattdessen Loch 1 halb.</p>
<div class="figs">[[n:10]][[n:11]]</div>
<p>Das C ist häufig in Stücken in G und in D-Mixolydisch.</p>
<div class="tunes">[[tune:ex-gscale]]</div>` },
      { id: "orn", h: "Verzierungen", body: `
<p>Irische Musik wird mit sehr kurzen Vorschlägen verziert, die mit den Fingern gespielt werden, nicht mit der Zunge. Lerne ein Stück zuerst ohne Verzierungen und füge sie hinzu, wenn die Melodie sitzt.</p>
<p><b>Cut</b>: einen Finger oberhalb der Note ganz kurz anheben, in einer schnellen Bewegung. Er trennt zwei gleiche Noten oder betont eine Note. Notiert als kleine Note darüber.</p>
[[abc:cut]]
<p><b>Tap</b> (Schlag): mit einem Finger kurz auf das Loch direkt unter der Note schlagen. Notiert als kleine Note darunter.</p>
[[abc:tap]]
<p><b>Roll</b>: Note, Cut, Note, Tap, Note, alles in einem Atem. Notiert als ~, ersetzt eine lange Note.</p>
[[abc:roll]]` },
      { id: "practice", h: "Wie üben", body: `
<ul>
<li>Wenig, aber oft: 10 bis 15 Minuten täglich bringen mehr als eine Stunde pro Woche.</li>
<li>Beginne mit 50 bis 60 % Tempo und werde erst schneller, wenn es sauber klingt.</li>
<li>Übe schwierige Stellen mit „Abschnitt zum Spielen“ und „Schleife“.</li>
<li>Schalte das Metronom ein, um den Puls gleichmäßig zu halten.</li>
<li>Wähle „Übung“ im Typ-Filter, um alle Übungen zu sehen. Empfohlene Reihenfolge: Tonleitern, Oktaven, dann Halblöcher.</li>
</ul>
<div class="tunes">[[tune:scale]][[tune:ex-thirds]][[tune:ex-gscale]][[tune:ex-jigscale]]</div>` }
    ]
  }
};
