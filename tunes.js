// Tune bank. Every tune here is traditional or in the public domain, and every ABC
// transcription was written for this project. Licence: CC BY-NC-SA 4.0 (see LICENSE).
// Please only add tunes you transcribed yourself (or that are explicitly free to reuse).
//
// Fields:
//   id     unique identifier
//   level  1 beginner, 2 intermediate, 3 advanced
//   rk     type: exercise, song, classical, air, jig, slip jig, reel, hornpipe, polka, slide, waltz, march, other
//   title  optional translated titles (otherwise the ABC T: line is used)
//   desc   short description per language (English is the fallback)
//   abc    the tune, written for a D whistle
window.TWW_TUNES = [
  // Exercises. Titles start with their series and number so they sort together.
  { id: "scale", level: 1, rk: "exercise",
    title: { en: "Scale 1: D major over two octaves", fr: "Gamme 1 : Ré majeur sur deux octaves", es: "Escala 1: Re mayor en dos octavas", de: "Tonleiter 1: D-Dur über zwei Oktaven" },
    desc: {
      en: "The whole range of the whistle: the first octave, then the same scale again, blowing harder.",
      fr: "Toute l'étendue de la flûte : la 1ʳᵉ octave, puis la même gamme en soufflant plus fort.",
      es: "Toda la extensión de la flauta: la primera octava y luego la misma escala soplando más fuerte.",
      de: "Der ganze Tonumfang der Whistle: erst die tiefe Oktave, dann dieselbe Tonleiter mit stärkerem Atem."
    },
    abc: `X:1
T:D scale
M:4/4
L:1/4
Q:1/4=70
K:D
D E F G | A B c d | e f g a | b4 | b a g f | e d c B | A G F E | D4 |]` },

  { id: "ex-thirds", level: 1, rk: "exercise",
    title: { en: "Scale 2: thirds in D", fr: "Gamme 2 : tierces en Ré", es: "Escala 2: terceras en Re", de: "Tonleiter 2: Terzen in D" },
    desc: {
      en: "The scale in skips of a third: two fingers move at once. Keep the fingers close to the holes.",
      fr: "La gamme par sauts de tierce : deux doigts bougent à la fois. Gardez les doigts près des trous.",
      es: "La escala por saltos de tercera: se mueven dos dedos a la vez. Mantén los dedos cerca de los agujeros.",
      de: "Die Tonleiter in Terzsprüngen: zwei Finger bewegen sich gleichzeitig. Halte die Finger nah an den Löchern."
    },
    abc: `X:1
T:Thirds in D
M:4/4
L:1/8
Q:1/4=66
K:D
D F E G F A G B | A c B d c e d2 | d B c A B G A F | G E F D E2 D2 |]` },

  { id: "ex-gscale", level: 1, rk: "exercise",
    title: { en: "Scale 3: G major (C natural)", fr: "Gamme 3 : Sol majeur (Do naturel)", es: "Escala 3: Sol mayor (Do natural)", de: "Tonleiter 3: G-Dur (mit C)" },
    desc: {
      en: "The scale of G uses C natural, played with a cross-fingering: hole 1 open, holes 2 and 3 covered.",
      fr: "La gamme de Sol utilise le Do naturel, joué en doigté croisé : trou 1 ouvert, trous 2 et 3 bouchés.",
      es: "La escala de Sol usa el Do natural, con digitación cruzada: agujero 1 abierto, agujeros 2 y 3 tapados.",
      de: "Die G-Dur-Tonleiter braucht das C, gespielt mit Gabelgriff: Loch 1 offen, Löcher 2 und 3 gedeckt."
    },
    abc: `X:1
T:G major scale
M:4/4
L:1/4
Q:1/4=70
K:G
G A B c | d e f g | g f e d | c B A G |
B c B A | G A B c | d c B A | G4 |]` },

  { id: "ex-jigscale", level: 1, rk: "exercise",
    title: { en: "Scale 4: in jig rhythm", fr: "Gamme 4 : en rythme de jig", es: "Escala 4: en ritmo de jig", de: "Tonleiter 4: im Jig-Rhythmus" },
    desc: {
      en: "The D scale in groups of three, long-short-long feel. Stress the first note of each group.",
      fr: "La gamme de Ré par groupes de trois, à la manière d'une jig. Appuyez la première note de chaque groupe.",
      es: "La escala de Re en grupos de tres, como una jig. Acentúa la primera nota de cada grupo.",
      de: "Die D-Dur-Tonleiter in Dreiergruppen wie eine Jig. Betone die erste Note jeder Gruppe."
    },
    abc: `X:1
T:Scale in jig rhythm
M:6/8
L:1/8
Q:3/8=60
K:D
|: DED FEF | GFG AGA | BAB cBc | d3 z3 | dcd cBc | BAB AGA | GFG FEF | D3 z3 :|` },

  { id: "ex-echo", level: 1, rk: "exercise",
    title: { en: "Octaves 1: low and high echoes", fr: "Octaves 1 : échos grave et aigu", es: "Octavas 1: ecos grave y agudo", de: "Oktaven 1: Echo tief und hoch" },
    desc: {
      en: "Each phrase is played low, then repeated an octave higher with the same fingers. Only the breath changes.",
      fr: "Chaque phrase est jouée dans le grave, puis répétée une octave plus haut avec les mêmes doigts. Seul le souffle change.",
      es: "Cada frase se toca en el grave y luego una octava más alta con los mismos dedos. Solo cambia el soplo.",
      de: "Jede Phrase erst tief, dann eine Oktave höher mit denselben Fingern. Nur der Atem ändert sich."
    },
    abc: `X:1
T:Low and high echoes
M:4/4
L:1/4
Q:1/4=72
K:D
D E F G | A4 | d e f g | a4 |
A G F E | D4 | a g f e | d4 |
F E D E | F2 A2 | f e d e | f2 a2 |
G F E F | D4 | g f e f | d4 |]` },

  { id: "ex-jumps", level: 2, rk: "exercise",
    title: { en: "Octaves 2: octave jumps", fr: "Octaves 2 : sauts d'octave", es: "Octavas 2: saltos de octava", de: "Oktaven 2: Oktavsprünge" },
    desc: {
      en: "Tongue each note. Going up, speed up the air just as you tongue; going down, relax it without letting the note drop out.",
      fr: "Détachez chaque note. En montant, accélérez l'air au moment du coup de langue ; en descendant, relâchez-le sans laisser tomber le son.",
      es: "Ataca cada nota con la lengua. Al subir, acelera el aire en el golpe de lengua; al bajar, relájalo sin que se caiga el sonido.",
      de: "Jede Note anstoßen. Aufwärts den Luftstrom beim Zungenstoß beschleunigen, abwärts entspannen, ohne dass der Ton abreißt."
    },
    abc: `X:1
T:Octave jumps
M:4/4
L:1/4
Q:1/4=66
K:D
D2 d2 | E2 e2 | F2 f2 | G2 g2 | A2 a2 | B2 b2 | A2 a2 | d4 |
d2 D2 | e2 E2 | f2 F2 | g2 G2 | a2 A2 | b2 B2 | a2 A2 | D4 |]` },

  { id: "ex-slurs", level: 2, rk: "exercise",
    title: { en: "Octaves 3: slurred octaves", fr: "Octaves 3 : octaves liées", es: "Octavas 3: octavas ligadas", de: "Oktaven 3: gebundene Oktaven" },
    desc: {
      en: "No tonguing inside the slurs: the note must jump up and down with the breath alone, without a squeak.",
      fr: "Pas de coup de langue dans les liaisons : la note doit monter et redescendre avec le seul souffle, sans couinement.",
      es: "Sin golpe de lengua dentro de las ligaduras: la nota sube y baja solo con el soplo, sin chirridos.",
      de: "Kein Zungenstoß unter dem Bogen: der Ton springt allein durch den Atem hoch und wieder runter, ohne Quietschen."
    },
    abc: `X:1
T:Slurred octaves
M:4/4
L:1/8
Q:1/4=60
K:D
(D2d2) (d2D2) | (E2e2) (e2E2) | (F2f2) (f2F2) | (G2g2) (g2G2) |
(A2a2) (a2A2) | (B2b2) (b2B2) | (A2a2) (a2A2) | D8 |]` },

  { id: "ex-long", level: 2, rk: "exercise",
    title: { en: "Octaves 4: long high notes", fr: "Octaves 4 : notes longues dans l'aigu", es: "Octavas 4: notas largas agudas", de: "Oktaven 4: lange hohe Töne" },
    desc: {
      en: "Hold each high note steady for its full length, then breathe in the rest. Look for a clear, round sound rather than a loud one.",
      fr: "Tenez chaque note aiguë stable sur toute sa durée, puis respirez dans le silence. Cherchez un son clair et rond plutôt que fort.",
      es: "Mantén cada nota aguda estable toda su duración y respira en el silencio. Busca un sonido claro y redondo, no fuerte.",
      de: "Jeden hohen Ton über die ganze Länge ruhig halten, in der Pause atmen. Gesucht ist ein klarer, runder Ton, kein lauter."
    },
    abc: `X:1
T:Long high notes
M:4/4
L:1/4
Q:1/4=60
K:D
d3 z | e3 z | f3 z | g3 z | a3 z | b3 z |
a3 z | g3 z | f3 z | e3 z | d4- | d3 z |]` },

  { id: "ex-fnat", level: 2, rk: "exercise",
    title: { en: "Half-holes 1: F natural", fr: "Demi-trous 1 : Fa naturel", es: "Medios agujeros 1: Fa natural", de: "Halblöcher 1: F" },
    desc: {
      en: "F natural: holes 1 to 4 covered, hole 5 half covered. Slide the finger down rather than lifting it.",
      fr: "Fa naturel : trous 1 à 4 bouchés, trou 5 à moitié. Faites glisser le doigt vers le bas plutôt que de le lever.",
      es: "Fa natural: agujeros 1 a 4 tapados, el 5 a medias. Desliza el dedo hacia abajo en vez de levantarlo.",
      de: "F: Löcher 1 bis 4 gedeckt, Loch 5 halb. Den Finger nach unten wegschieben statt ihn anzuheben."
    },
    abc: `X:1
T:F natural
M:4/4
L:1/4
Q:1/4=63
K:D
D E =F E | D E =F2 | =F G A G | =F E D2 |
A G =F G | A2 =F2 | E =F E D | D4 |
d e =f e | d e =f2 | =f g a g | =f e d2 |]` },

  { id: "ex-bflat", level: 2, rk: "exercise",
    title: { en: "Half-holes 2: B flat", fr: "Demi-trous 2 : Si bémol", es: "Medios agujeros 2: Si bemol", de: "Halblöcher 2: B" },
    desc: {
      en: "B flat: hole 1 covered, hole 2 half covered, the others open. Played in both octaves.",
      fr: "Si bémol : trou 1 bouché, trou 2 à moitié, les autres ouverts. Joué dans les deux octaves.",
      es: "Si bemol: agujero 1 tapado, el 2 a medias y los demás abiertos. En las dos octavas.",
      de: "B: Loch 1 gedeckt, Loch 2 halb, die anderen offen. In beiden Oktaven."
    },
    abc: `X:1
T:B flat
M:4/4
L:1/4
Q:1/4=63
K:D
G A _B A | G A _B2 | A _B A G | F E D2 |
g a _b a | g a _b2 | a _b a g | f e d2 |]` },

  { id: "ex-gsharp", level: 2, rk: "exercise",
    title: { en: "Half-holes 3: G sharp", fr: "Demi-trous 3 : Sol dièse", es: "Medios agujeros 3: Sol sostenido", de: "Halblöcher 3: Gis" },
    desc: {
      en: "G sharp, in the key of A: holes 1 and 2 covered, hole 3 half covered.",
      fr: "Sol dièse, en La majeur : trous 1 et 2 bouchés, trou 3 à moitié.",
      es: "Sol sostenido, en La mayor: agujeros 1 y 2 tapados, el 3 a medias.",
      de: "Gis, in A-Dur: Löcher 1 und 2 gedeckt, Loch 3 halb."
    },
    abc: `X:1
T:G sharp
M:4/4
L:1/4
Q:1/4=63
K:A
A G A B | A G F E | F G A B | A4 |
a g a b | a g f e | f g a b | a4 |]` },

  { id: "ex-chromatic", level: 3, rk: "exercise",
    title: { en: "Half-holes 4: chromatic scale", fr: "Demi-trous 4 : gamme chromatique", es: "Medios agujeros 4: escala cromática", de: "Halblöcher 4: chromatische Tonleiter" },
    desc: {
      en: "Every semitone from low D to high D and back: four half-holes and the cross-fingered C. Go slowly and check each note against the whistle on the left.",
      fr: "Tous les demi-tons du Ré grave au Ré aigu, aller et retour : quatre demi-trous et le Do en doigté croisé. Allez lentement et vérifiez chaque note sur la flûte de gauche.",
      es: "Todos los semitonos del Re grave al Re agudo, ida y vuelta: cuatro medios agujeros y el Do con digitación cruzada. Ve despacio y comprueba cada nota en la flauta.",
      de: "Alle Halbtöne vom tiefen zum hohen D und zurück: vier Halblöcher und das C mit Gabelgriff. Langsam spielen und jeden Ton an der Whistle links prüfen."
    },
    abc: `X:1
T:Chromatic scale
M:4/4
L:1/4
Q:1/4=56
K:D
D ^D E =F | ^F G ^G A | _B =B =c ^c | d4 |
d ^c =c =B | _B A ^G G | ^F =F E ^D | D4 |]` },

  { id: "clair", level: 1, rk: "song",
    desc: {
      en: "French folk song. The first phrase only needs three fingers of the left hand: ideal to start with.",
      fr: "Chanson populaire française. Trois doigts de la main gauche suffisent pour la première phrase : idéal pour démarrer.",
      es: "Canción popular francesa. La primera frase solo necesita tres dedos de la mano izquierda: ideal para empezar.",
      de: "Französisches Volkslied. Für die erste Phrase reichen drei Finger der linken Hand: ideal für den Anfang."
    },
    abc: `X:1
T:Au clair de la lune
M:4/4
L:1/4
Q:1/4=90
K:G
G G G A | B2 A2 | G B A A | G4 |
G G G A | B2 A2 | G B A A | G4 |
A A A A | E2 E2 | A G F E | D4 |
G G G A | B2 A2 | G B A A | G4 |]` },

  { id: "twinkle", level: 1, rk: "song",
    title: { en: "Twinkle, Twinkle, Little Star", fr: "Ah ! vous dirai-je, maman", es: "Estrellita, ¿dónde estás?", de: "Blinke, blinke, kleiner Stern" },
    desc: {
      en: "18th-century French melody, later turned into variations by Mozart. Repeated notes to practise tonguing.",
      fr: "Mélodie française du XVIIIᵉ siècle, variée par Mozart. Des notes répétées pour travailler le coup de langue.",
      es: "Melodía francesa del siglo XVIII, que Mozart convirtió en variaciones. Notas repetidas para trabajar el golpe de lengua.",
      de: "Französische Melodie aus dem 18. Jahrhundert, von Mozart variiert. Tonwiederholungen zum Üben des Zungenstoßes."
    },
    abc: `X:1
T:Twinkle, Twinkle, Little Star
M:4/4
L:1/4
Q:1/4=96
K:D
D D A A | B B A2 | G G F F | E E D2 |
A A G G | F F E2 | A A G G | F F E2 |
D D A A | B B A2 | G G F F | E E D2 |]` },

  { id: "jacques", level: 1, rk: "song",
    title: { en: "Are You Sleeping? (Frère Jacques)", fr: "Frère Jacques", es: "Martinillo (Frère Jacques)", de: "Bruder Jakob" },
    desc: {
      en: "A round to play with friends. Introduces C natural (cross-fingering: holes 2 and 3 covered).",
      fr: "Un canon à jouer à plusieurs. Introduit le Do naturel (doigté croisé : trous 2 et 3 bouchés).",
      es: "Un canon para tocar con amigos. Introduce el Do natural (digitación cruzada: agujeros 2 y 3 tapados).",
      de: "Ein Kanon für mehrere. Führt das c ein (Gabelgriff: Löcher 2 und 3 gedeckt)."
    },
    abc: `X:1
T:Frère Jacques
M:4/4
L:1/4
Q:1/4=100
K:G
G A B G | G A B G | B c d2 | B c d2 |
d/e/ d/c/ B G | d/e/ d/c/ B G | G D G2 | G D G2 |]` },

  { id: "birthday", level: 1, rk: "song",
    title: { en: "Happy Birthday to You", fr: "Joyeux anniversaire", es: "Cumpleaños feliz", de: "Zum Geburtstag viel Glück" },
    desc: {
      en: "Mildred and Patty Hill (1893), now in the public domain. One octave leap up to high A.",
      fr: "Mildred et Patty Hill (1893), aujourd'hui dans le domaine public. Un saut d'octave vers le La aigu.",
      es: "Mildred y Patty Hill (1893), hoy de dominio público. Incluye un salto de octava hasta el La agudo.",
      de: "Mildred und Patty Hill (1893), heute gemeinfrei. Mit einem Oktavsprung zum hohen A."
    },
    abc: `X:1
T:Happy Birthday to You
M:3/4
L:1/8
Q:1/4=100
K:D
A>A | B2 A2 d2 | c4 A>A | B2 A2 e2 | d4 A>A |
a2 f2 d2 | c2 B2 g>g | f2 d2 e2 | d4 |]` },

  { id: "ode", level: 1, rk: "classical",
    title: { en: "Ode to Joy", fr: "Ode à la joie", es: "Himno de la alegría", de: "Ode an die Freude" },
    desc: {
      en: "Ludwig van Beethoven, 9th Symphony. Stepwise motion, perfect for linking fingerings.",
      fr: "Ludwig van Beethoven, 9ᵉ symphonie. Mouvement conjoint, parfait pour enchaîner les doigtés.",
      es: "Ludwig van Beethoven, Novena sinfonía. Movimiento por grados conjuntos, perfecto para encadenar digitaciones.",
      de: "Ludwig van Beethoven, 9. Sinfonie. Schrittweise Melodie, ideal zum Verbinden der Griffe."
    },
    abc: `X:1
T:Ode to Joy
M:4/4
L:1/4
Q:1/4=100
K:G
B B c d | d c B A | G G A B | B3/2 A/ A2 |
B B c d | d c B A | G G A B | A3/2 G/ G2 |
A A B G | A B/c/ B G | A B/c/ B A | G A D2 |
B B c d | d c B A | G G A B | A3/2 G/ G2 |]` },

  { id: "saints", level: 1, rk: "song",
    desc: {
      en: "Traditional American gospel. Four notes to begin with, then the tune comes down to low D.",
      fr: "Gospel traditionnel américain. Quatre notes pour démarrer, puis la mélodie descend vers le Ré grave.",
      es: "Gospel tradicional estadounidense. Cuatro notas para empezar y luego la melodía baja hasta el Re grave.",
      de: "Traditioneller amerikanischer Gospel. Vier Töne zum Einstieg, dann führt die Melodie hinunter zum tiefen D."
    },
    abc: `X:1
T:When the Saints Go Marching In
M:4/4
L:1/4
Q:1/4=110
K:D
z D F G | A4 | z D F G | A4 | z D F G | A2 F2 | D2 F2 | E4 |
z F F E | D3 D | F2 A2 | A G3 | F G A F | D2 E2 | D4- | D4 |]` },

  { id: "jingle", level: 1, rk: "song",
    title: { en: "Jingle Bells", fr: "Vive le vent (Jingle Bells)", es: "Navidad, Navidad (Jingle Bells)", de: "Jingle Bells" },
    desc: {
      en: "James Lord Pierpont (1857). A steady rhythm, good breathing practice.",
      fr: "James Lord Pierpont (1857). Rythme régulier, bon exercice de souffle.",
      es: "James Lord Pierpont (1857). Ritmo regular, buen ejercicio de respiración.",
      de: "James Lord Pierpont (1857). Gleichmäßiger Rhythmus, gute Atemübung."
    },
    abc: `X:1
T:Jingle Bells
M:4/4
L:1/4
Q:1/4=120
K:D
F F F2 | F F F2 | F A D3/2 E/ | F4 |
G G G3/2 G/ | G F F F/F/ | F E E F | E2 A2 |
F F F2 | F F F2 | F A D3/2 E/ | F4 |
G G G G | G F F F/F/ | A A G E | D4 |]` },

  { id: "grace", level: 1, rk: "song",
    desc: {
      en: "English hymn (John Newton, 1779). A slow air in three: work on a long, steady breath on held notes.",
      fr: "Hymne anglais (John Newton, 1779). Air lent à trois temps : travaillez le souffle long et régulier sur les notes tenues.",
      es: "Himno inglés (John Newton, 1779). Aire lento en tres tiempos: trabaja el soplo largo y regular en las notas tenidas.",
      de: "Englische Hymne (John Newton, 1779). Langsam im Dreiertakt: übe den langen, ruhigen Atem auf gehaltenen Tönen."
    },
    abc: `X:1
T:Amazing Grace
M:3/4
L:1/4
Q:1/4=80
K:G
D | G2 B/G/ | B2 A | G2 E | D2 D | G2 B/G/ | B2 A/B/ | d3- | d2 B/d/ |
d2 B/G/ | B2 A | G2 E | D2 D | G2 B/G/ | B2 A | G3- | G2 |]` },

  { id: "auld", level: 1, rk: "song",
    title: { en: "Auld Lang Syne", fr: "Ce n'est qu'un au revoir (Auld Lang Syne)", es: "Canción de la despedida (Auld Lang Syne)", de: "Auld Lang Syne (Nehmt Abschied, Brüder)" },
    desc: {
      en: "Scottish song (Robert Burns, 1788). Dotted rhythm: a long note, then a short one.",
      fr: "Chanson écossaise (Robert Burns, 1788). Rythme pointé : une note longue, puis une note brève.",
      es: "Canción escocesa (Robert Burns, 1788). Ritmo con puntillo: una nota larga y luego una breve.",
      de: "Schottisches Lied (Robert Burns, 1788). Punktierter Rhythmus: ein langer Ton, dann ein kurzer."
    },
    abc: `X:1
T:Auld Lang Syne
M:4/4
L:1/8
Q:1/4=76
K:G
D2 | G3 G G2 B2 | A3 G A2 B2 | G3 G B2 d2 | e6 e2 |
d3 B B2 G2 | A3 G A2 B2 | G3 E E2 D2 | G6 e2 |
d3 B B2 G2 | A3 G A2 e2 | d3 B B2 d2 | e6 g2 |
d3 B B2 G2 | A3 G A2 B2 | G3 E E2 D2 | G6 |]` },

  { id: "silent", level: 1, rk: "song",
    title: { en: "Silent Night", fr: "Douce nuit", es: "Noche de paz", de: "Stille Nacht" },
    desc: {
      en: "Franz Xaver Gruber (1818). A lullaby in 6/8: let every note sing.",
      fr: "Franz Xaver Gruber (1818). Une berceuse en 6/8 : laissez chanter chaque note.",
      es: "Franz Xaver Gruber (1818). Una canción de cuna en 6/8: deja cantar cada nota.",
      de: "Franz Xaver Gruber (1818). Ein Wiegenlied im 6/8-Takt: jeden Ton singen lassen."
    },
    abc: `X:1
T:Silent Night
M:6/8
L:1/8
Q:3/8=50
K:D
A>BA F3 | A>BA F3 | e2e c3 | d2d A3 |
B2B d>cB | A>BA F3 | B2B d>cB | A>BA F3 |
e2e g>ec | d3 f3 | d>AF A>GE | D6 |]` },

  { id: "greensleeves", level: 2, rk: "song",
    desc: {
      en: "16th-century English song, in A Dorian. G sharp is a half-hole on the D whistle.",
      fr: "Chanson anglaise du XVIᵉ siècle, en La dorien. Le Sol dièse se joue en demi-trou sur la flûte en Ré.",
      es: "Canción inglesa del siglo XVI, en La dórico. El Sol sostenido se toca con medio agujero en la flauta en Re.",
      de: "Englisches Lied aus dem 16. Jahrhundert, in A-Dorisch. Das Gis ist auf der D-Whistle ein Halbloch."
    },
    abc: `X:1
T:Greensleeves
M:6/8
L:1/8
Q:3/8=56
K:Ador
A | c2d e>fe | d2B G>AB | c2A A>^GA | B2^G E2A |
c2d e>fe | d2B G>AB | c>BA ^G>^FG | A3 A2 g |
g3 g>fe | d2B G>AB | c2A A>^GA | B2^G E3 |
g3 g>fe | d2B G>AB | c>BA ^G>^FG | A3- A2 |]` },

  { id: "sibheag", level: 2, rk: "air",
    desc: {
      en: "Turlough O'Carolan (1670-1738), the most famous of the Irish harpers.",
      fr: "Turlough O'Carolan (1670-1738), le plus célèbre des harpistes irlandais.",
      es: "Turlough O'Carolan (1670-1738), el más célebre de los arpistas irlandeses.",
      de: "Turlough O'Carolan (1670–1738), der berühmteste irische Harfner."
    },
    abc: `X:1
T:Sí Bheag, Sí Mhór
M:3/4
L:1/8
Q:1/4=90
K:D
|: de | f2e2d2 | B4d2 | A4F2 | A4de | f2e2d2 | B4e2 | e6- | e4de |
f2e2d2 | B4d2 | A4F2 | A4Bc | d2e2d2 | B4e2 | d6- | d4 :|
|: fg | a4f2 | a4f2 | a4f2 | e4fg | a4f2 | e4d2 | B6- | B4de |
f2e2d2 | B4d2 | A4F2 | A4Bc | d2e2d2 | B4e2 | d6- | d4 :|` },

  { id: "kesh", level: 2, rk: "jig",
    desc: {
      en: "One of the first jigs people learn for sessions. Think “1-2-3, 1-2-3”, leaning on the first beat.",
      fr: "Une des premières jigs apprises en session. Pensez « 1-2-3, 1-2-3 » en appuyant le premier temps.",
      es: "Una de las primeras jigs que se aprenden para tocar en sesiones. Piensa «1-2-3, 1-2-3» marcando el primer tiempo.",
      de: "Einer der ersten Jigs, die man für Sessions lernt. Denke „1-2-3, 1-2-3“ und betone den ersten Schlag."
    },
    abc: `X:1
T:The Kesh Jig
R:jig
M:6/8
L:1/8
Q:3/8=90
K:G
|: G3 GAB | A3 ABd | edd gdd | edB dBA |
GAG GAB | ABA ABd | edd gdB | AGF G3 :|
|: BAB dBd | ege dBd | BAB dBG | ABA AGA |
BAB dBd | ege dBd | gfg aga | bgf g3 :|` },

  { id: "washerwoman", level: 2, rk: "jig",
    desc: {
      en: "A famous traditional jig in G. C natural comes up often: good cross-fingering practice.",
      fr: "Jig traditionnelle très connue, en Sol. Le Do naturel revient souvent : un bon entraînement au doigté croisé.",
      es: "Jig tradicional muy conocida, en Sol. El Do natural aparece a menudo: buena práctica de digitación cruzada.",
      de: "Ein bekannter traditioneller Jig in G. Das c kommt oft vor: gute Übung für den Gabelgriff."
    },
    abc: `X:1
T:The Irish Washerwoman
R:jig
M:6/8
L:1/8
Q:3/8=90
K:G
|: dc | BGG DGG | BGB dcB | cAA EAA | cBc edc |
BGG DGG | BGB dcB | cBc Adc | BGG G :|
|: ga | bgg dgg | bgb bag | aff dff | afa agf |
egg dgg | cgg Bgg | cBc Adc | BGG G :|` },

  { id: "swallow", level: 2, rk: "jig",
    desc: {
      en: "E Dorian: C is sharp, so every note sits on the D whistle without cross-fingering.",
      fr: "Mode dorien de Mi : le Do est dièse, toutes les notes restent sur la flûte en Ré sans doigté croisé.",
      es: "Mi dórico: el Do es sostenido, así que todas las notas salen en la flauta en Re sin digitación cruzada.",
      de: "E-Dorisch: Das C ist erhöht (Cis), daher liegen alle Töne ohne Gabelgriff auf der D-Whistle."
    },
    abc: `X:1
T:The Swallowtail Jig
R:jig
M:6/8
L:1/8
Q:3/8=90
K:Edor
|: GEE BEE | GEE BAG | FDD ADD | dcd AGF |
GEE BEE | GEE B2c | dcd AGF | GEE E3 :|
|: Bcd e2f | e2f edB | Bcd e2f | edB d3 |
Bcd e2f | e2f edB | dcd AGF | GEE E3 :|` },

  { id: "maggie", level: 3, rk: "reel",
    desc: {
      en: "A fast reel in E Dorian. Start slowly: the E–B leaps need precision.",
      fr: "Reel rapide en Mi dorien. Commencez lentement : les sauts Mi-Si demandent de la précision.",
      es: "Un reel rápido en Mi dórico. Empieza despacio: los saltos Mi-Si exigen precisión.",
      de: "Ein schneller Reel in E-Dorisch. Langsam beginnen: Die Sprünge E–H verlangen Genauigkeit."
    },
    abc: `X:1
T:Drowsy Maggie
R:reel
M:4/4
L:1/8
Q:1/4=150
K:Edor
|: E2BE dEBE | E2BE AFDF | E2BE dEBE |1 BABc dAFD :|2 BABc dAFA ||
|: d2fd c2ec | defg afge |1 d2fd c2ec | BABc dAFA :|2 afge fdec | BABc dAFD |]` },

  { id: "cooley", level: 3, rk: "reel",
    desc: {
      en: "Named after the accordion player Joe Cooley, who made it popular. A session staple.",
      fr: "Il porte le nom de l'accordéoniste Joe Cooley, qui l'a rendu populaire. Un classique des sessions.",
      es: "Lleva el nombre del acordeonista Joe Cooley, que lo hizo popular. Un clásico de las sesiones.",
      de: "Benannt nach dem Akkordeonspieler Joe Cooley, der ihn bekannt machte. Ein Session-Klassiker."
    },
    abc: `X:1
T:Cooley's Reel
R:reel
M:4/4
L:1/8
Q:1/4=150
K:Edor
|: D2 | EBBA B2EB | B2AB dBAG | FDAD BDAD | FDAD dAFD |
EBBA B2EB | B2AB defg | afge dBAF | DEFD E2 :|
|: gf | eBB2 efge | eBB2 gedB | A2FA DAFA | A2FA defg |
eBB2 eBgB | eBB2 defg | afge dBAF | DEFD E2 :|` }
];
