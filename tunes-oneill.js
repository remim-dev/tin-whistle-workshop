// 200 well-known tunes from Francis O'Neill's "The Music of Ireland" (Chicago, 1903, public domain).
//
// The ABC transcriptions come from the O'Neill's Project (1996-2000), as published by John Chambers
// at https://trillian.mit.edu/~jc/music/book/ONeills/ . Each tune keeps its transcriber in the Z: line.
//
//   "This collection of ABC transcriptions is copyrighted 1997-2000 by the contributors to the
//    O'Neill's Project. [...] you can redistribute it and/or modify it under the terms of the
//    GNU General Public License as published by the Free Software Foundation; either version 2
//    of the License, or (at your option) any later version."
//
// This file is therefore distributed under the GNU GPL, version 2 or later (see LICENSE-GPL-2.0.txt),
// and NOT under the CC BY-NC-SA licence of the rest of the project. It is a separate work that the
// app loads alongside its own files.
//
// Changes made for the Tin Whistle Workshop: tune selection; titles tidied (article first, title
// case); R: type, B: source and Q: learning tempo added; comments, notes and alternative titles
// removed; one stray character and one rest typo fixed. The notes themselves are unchanged.
// Only tunes that stay between low D and high D on a D whistle were kept.
//
// Fields: id, n (tune number in the book), level (estimated by difficulty.js), rk (type),
// lo / hi / p (lowest and highest written note and pitch classes used, computed by difficulty.js), abc.
window.TWW_TUNES_ONEILL = [
  { id: "on58", n: 58, level: 2, rk: "air", lo: 67, hi: 83, p: 3030, abc: `X:58
T:The Parting Glass
R:air
B:O'Neill's Music of Ireland (1903), no. 58
Z:John Chambers
M:C
L:1/8
Q:1/4=70
K:A
(e>d) \\
| c2(B>c) A2(AB) | (cd)(ec) d2(c>d) | e2a>f =gf(ed) | c2A2 G2(e>d) |
| c2(B>c) A2(AB) | (cd)(ec) Hd2(c>d) | e2a>f (=gf)(ed) | c2A2 A2 ||
|| (e>f) \\
| (=gf)(ga) (gfed) | e2a2 a2(ba) | (=gfed) (cB)(de) | e2=G2 G2(e>d) |
| c2(B>c) A2(AB) | (cd)(ec) Hd2(c>d) | e2a>f (=gf)(ed) | c2A2 A2 ||` },
  { id: "on59", n: 59, level: 3, rk: "air", lo: 62, hi: 81, p: 3831, abc: `X:59
T:Shule Aroon
R:air
B:O'Neill's Music of Ireland (1903), no. 59
Z:John Chambers
M:C
L:1/8
Q:1/4=70
K:Dm
(fe) \\
| d2(dc) (AB)(GA) | c2(dc) A2(FG) | A2A2 f2(ec) | dcA^F G2(AG) |
| =F2(EF) D2 ((3A=B^c) | d>cAG A2 Ha>g | f2ed (^cd)(ec) | d4 d2z2 ||
|| f4 e2 | d2(dc) A2(AB) | c2d2 f2e2 | dc A^F G2AG |
| F2(EF) D2((3A=B^c) | d>c AG A2 Ha>g | f2ed ^cdec | d4 d2 ||` },
  { id: "on69", n: 69, level: 2, rk: "air", lo: 62, hi: 77, p: 1783, abc: `X:69
T:O'Carolan's Lament
R:air
B:O'Neill's Music of Ireland (1903), no. 69
Z:John Chambers
M:3/4
L:1/8
Q:1/4=70
K:Dm
(FG) \\
| A2 (A>B AG) | A2 d2 (F>G) | A2 (A>B A>^F) | G4 (=F>G) |
| A2 (A>B AG) | A2 d2 (d>e) | f2 e>d ^ce | d4 ||
|| (d>e) \\
| f2 (e>d ^ce) | d=c A2 (d>e) | f2 (e>d ^ce) | d4 (d>e) |
| f2 (e>d ^ce) | d=c A2 ^FG | A2 G=F (E>F) | D4 ||` },
  { id: "on108", n: 108, level: 2, rk: "air", lo: 62, hi: 83, p: 2774, abc: `X:108
T:The Dawning of the Day
R:air
B:O'Neill's Music of Ireland (1903), no. 108
M:C
L:1/8
Q:1/4=70
K:D
d2 d>e f>gef|d>fed {d}c2 z d|A>BG>A F>GEF|Ddec d2 z:|
(f/g/)|affa ag z g|affa g3 f|egec egec|z ffe f3g|
afga bagf|efed {d}c2 z d|A>BG>A F>GEF|Ddec d2 z2||` },
  { id: "on185", n: 185, level: 1, rk: "air", lo: 62, hi: 79, p: 2773, abc: `X:185
T:The Foggy Dew
R:air
B:O'Neill's Music of Ireland (1903), no. 185
M:2/4
L:1/8
Q:1/4=70
K:Em
gf|ef ed|B2 (GB)|(AB) (AF)|D2 (EF)|
G2 (AG)|E2 E2|(E4|D2)"fine"||
B2|E2 E2|GA Bc|d2 (BA)|G2 A2|
B2 e2|d2 f2|e4-|e2"D.C.":|` },
  { id: "on199", n: 199, level: 3, rk: "air", lo: 62, hi: 81, p: 3030, abc: `X:199
T:The Blackbird
R:air
B:O'Neill's Music of Ireland (1903), no. 199
M:C
L:1/8
Q:1/4=70
K:D
(5D/E/F/G/A/|B2 (B2{cB}AG) A2 (A3/2B/4c/4)|"~"(dc)(dA) (G3/2A/4G/4) (FE)|(D>E)(~FG) (A>"~"BA>).G|T(F2 D2) D2 (5D/E/F/G/A/|
B2 (B2{cB}AG) A2 "~"(fe)|"~"(dc)(dA) (G3/2A/4G/4) ("~"FE)|D>E~FG (A>"~"BA).G|T(F2 D2) D2||
(D/E/F/G/)|(A<d)(~d>e) "~"fd (e3/2f/4g/4)|"~"(fd)"~"(ec) "~"(dc)(A>G)|(A<d)(~d>e) "~"(fd) (ef/{a}g/)|f2 d2 defg|
"~"(ag)(f<a) Tg2 "~"(fe)|(d>c)(de) Tf2 {a}(gf/e/)|"~"(dc A/G/F) (G>"~"BA>)G|T(F2 D2) D2||` },
  { id: "on203", n: 203, level: 2, rk: "air", lo: 62, hi: 79, p: 2781, abc: `X:203
T:The Minstrel Boy
R:air
B:O'Neill's Music of Ireland (1903), no. 203
Z:John Chambers
M:C
L:1/8
Q:1/4=70
K:G
D \\
| (G3A) (cBAG) | B2d2 g2(fg) | e2d2 (Bcd>B) | A4 G2z :|
d \\
| g2f2 e2(fg) | f2e2 d3^d | e3B B2^d2 | (e3/2f//e//d//e/f/) Hg3g |
| (G3A) (cBAG) | B2d2 g2(fg) | e2d2 (Bcd>B) | A4 G2z ||` },
  { id: "on260", n: 260, level: 2, rk: "air", lo: 62, hi: 83, p: 3031, abc: `X:260
T:The Boyne Water
R:air
B:O'Neill's Music of Ireland (1903), no. 260
Z:John Chambers
M:C
L:1/8
Q:1/4=70
K:ADor
AG \\
| E2e2 efge | dcBA G2AB | c2BA edcB | ABAG E3D |
| E2e2 efge | dcBA G2AB | c2BA edcB | A4 A2 ||
|| ^cd \\
| e2a2 a2b2 | a^ge^c d2cd | e2a2 ^gabg | a3^g e2f2 |
| =gfga g2fe | dcBA G2AB | c2BA edcB | A4 A2 ||` },
  { id: "on282", n: 282, level: 1, rk: "air", lo: 62, hi: 79, p: 2773, abc: `X:282
T:The Gentle Maiden
R:air
B:O'Neill's Music of Ireland (1903), no. 282
Z:John Chambers
M:6/8
L:1/8
Q:3/8=40
K:G
F \\
| (G>AG) (F>ED) | d3 (e>fg) | (d>cB) A2G | E3- E2F \\
| (G>AG) (F>ED) | d3 (e>fg) | (d>cB) (A2{BA}G) | G3- G2 ||
|| d \\
| (d>ef) g2g | g3 (g>fe) | d>cB {B}A2G | E3- E2F \\
| (G>AG) (F>ED) | d3 (e>fg) | (d>cB) (A2{BA}G) | G3- G2 ||` },
  { id: "on298", n: 298, level: 2, rk: "jig", lo: 62, hi: 81, p: 2772, abc: `X:298
T:St Patrick's Day
R:jig
B:O'Neill's Music of Ireland (1903), no. 298
Z:John Chambers
M:6/8
L:1/8
Q:3/8=90
K:G
D \\
| GAG GBd | gfe dBG | AGA BGD | EFE E2D \\
| GAG GBd | gfe dBG |
| AGA BGD | E2F G2 :| B | def gag | fed edB \\
| def gag | fed e2B | def gag | fed gfe |
| dBG GBd | gfe dBG | AGA BGD | EFE E2D \\
| GAG GBd | gfe dBG | AGA BGD | E2F G2 ||` },
  { id: "on363", n: 363, level: 2, rk: "air", lo: 69, hi: 81, p: 726, abc: `X:363
T:The Bard of Armagh
R:air
B:O'Neill's Music of Ireland (1903), no. 363
Z:Chris Falt
M:3/8
L:1/8
Q:1/8=110
K:D
A|(dfd|e)(a>g)|(fed)|(cA>)A|
(df).d|(ea>)g|fde/2f/2|g2(f/2g/2)|
(af)a|(gf)e|(d>fe/2d/2)|(cA>)A|
d>(ef/2d/2)|ea>g|fde/2f/2|g2(e/2f/2)|
afa|gfe|ded|cA>A|
d>(ef/2d/2)|ea>g|fde|d2||` },
  { id: "on364", n: 364, level: 2, rk: "jig", lo: 67, hi: 83, p: 2774, abc: `X:364
T:The Jolly Beggarman
R:jig
B:O'Neill's Music of Ireland (1903), no. 364
Z:Chris Falt
M:3/4
L:1/4
Q:3/8=90
K:D
(f/2e/2)|d>cA|(~AGA)|c>AG|A2(f/2e/2)|
d>cA|ABc|d>ed|(dfe)|
d>cA|(~AGA)|c>AG|A~fe|
c>cA|ABc|d3-|d2||
f/2g/2|(a2b)|(g2a)|fed|cde|
(a2b)|(g2a)|fed|efg|
(a2b)|(g2a)|fed|cde|
fed|cAc|d3-|d2||` },
  { id: "on392", n: 392, level: 2, rk: "air", lo: 66, hi: 81, p: 2772, abc: `X:392
T:Eileen Aroon
R:air
B:O'Neill's Music of Ireland (1903), no. 392
Z:Chris Falt
M:3/4
L:1/8
Q:1/4=70
K:D
(dB)|(A2B2)(dB)|(d2e2f2)|(F2A2ed)|B4(dB)|
(A2B2)(dB)|(d2e2f2)|(F2A2Bd)|d4||
(df)|.g.gf2(fe)|.f.aa2(fe)|.d.de2(dB)|A4f2|
a2(fedB)|(de)f4|(F2A2)(Bd)|d4||` },
  { id: "on411", n: 411, level: 1, rk: "march", lo: 62, hi: 74, p: 2774, abc: `X:411
T:The Enniskillen Dragoons
R:march
B:O'Neill's Music of Ireland (1903), no. 411
M:2/4
L:1/8
Q:1/4=100
K:D
(A/F/) | D>D E>F | G>A c>B | (3AGE D>D | D3 A |
d>d B>d | c>A B>G | (3EDE c>B | A3 A |
d>d B>d | c>A B>G | (3EDE c>B | A3 G/E/ |
D>D E>F | G>A c>B | (3AGE D>D | D3 ||` },
  { id: "on467", n: 467, level: 1, rk: "air", lo: 62, hi: 79, p: 2773, abc: `X:467
T:The Wearing of the Green
R:air
B:O'Neill's Music of Ireland (1903), no. 467
M:C
L:1/8
Q:1/4=70
K:G
(G>A) | BBB>A (B<d)d>B | BAA>G A2 Bd | ecHg>f edHB>G | AGG>G G2 :|
g>f | eedB ddGA | (B{d}c)(B>A) B2 g>f | eedB ddGB | AGFE D2 GA |
BBB>A (B<d)d>B | BAA>G A2 Bd | ecHg>f edHB>G | AGG>G G2 ||` },
  { id: "on498", n: 498, level: 2, rk: "air", lo: 62, hi: 79, p: 2781, abc: `X:498
T:Killarney
R:air
B:O'Neill's Music of Ireland (1903), no. 498
Z:John Chambers
M:C
L:1/8
Q:1/4=70
K:G
| (d3B) (A2(3GED) | G2G2 G3z | (d3{ed}c) (B2(3ABd) | e2A2 A3z |
| (d3B) (A2(3GED) | G2G2 G3z | (B3c) (d2Gc) | (B2A2) G3z ||
|| G2G2 A2E2 | G2G2 (Bd3) | B2(Bc) (dBAG) | (GE)(EG) A3z |
| ">"e2">"A2 ">"d2">"G2 | ">"c2">"F2 ">"B2">"G2 | ">"(F3G) A2 ((3Bcd) | F2E2 D4 |
| (G3E) D2 (EF) | G2G2 A3z | c3c B2A2 | dBAG E4 |
| (E3_E) (D3E) | G2 (3GBd e4 | G3A BHg2B | A4 G3z |]` },
  { id: "on633", n: 633, level: 2, rk: "air", lo: 62, hi: 83, p: 2774, abc: `X:633
T:O'Carolan's Concerto
R:air
B:O'Neill's Music of Ireland (1903), no. 633
Z:John Chambers
M:2/4
L:1/16
Q:1/4=70
K:D
ABc \\
| d2dd d2cB | ABGA F2A2 | E2A2 D2A2 | Bcde dcBA |
| d2a2 fgaf | efge fgaf | gabg fdfa | gfed dcBA |
| BdBd gBgB | AdAd fAfA | GBGB efed | {d}c2Bc A3G |
| FGAF EFGE | FGAF GABG | A2d2 fedc | d6 z2 :|
|| d2b2 agfe | d2a2 c2a2 | B2gB ABcd | ecBA d2df |
| edcB caaa | Bggg Afff | edcB caaa | Bggg  bgbg |
| afaf edcB | cABG AFGE | DAFA DAFA | GEBE GEBE |
| FAdc BAGF | EFGA Bcde | A2d2 fedc | d4 d :|` },
  { id: "on634", n: 634, level: 2, rk: "air", lo: 62, hi: 83, p: 2773, abc: `X:634
T:O'Carolan's Receipt for Drinking
R:air
B:O'Neill's Music of Ireland (1903), no. 634
Z:John Chambers
M:2/4
L:1/16
Q:1/4=70
K:G
g>f \\
| edcB cBAG | E2G>A G2g>f | edcB cBcd | e2AB A2(Bc) |
| dBde d2(Bd) | egfa g2(fg) | edcB cBAG | E2G>A G ||
|| (Bc) \\
| d>Bd>e d<BAG | E>FG>A G2(Bc) | dBde {e}d2(Bd) | egfa g2z2 |
| G3B A3c | BABd e3f | gfed BABd | egfa g2ga |
| babg agae | gfgd edcB | cBcd efgf | edgB A2(ge) |
| dcBA G2(ge) | dBAG E2(GA) | BAGE AGED | E2GA G2 |]` },
  { id: "on655", n: 655, level: 1, rk: "air", lo: 62, hi: 79, p: 2774, abc: `X:655
T:Blind Mary
R:air
B:O'Neill's Music of Ireland (1903), no. 655
Z:John Chambers
M:2/4
L:1/8
Q:1/4=70
K:D
A \\
| d2 d>c | {c}B2 A(F/G/) | A>B AF | E3 (F/G/) \\
| (Af) (f>e) | (dB) A(D/E/) | (F>G) ({F}E>D) | D3 ||
|| (d/e/) \\
| f>g fB | e>c (AB/c/) | d>D D(E/F/) | E3 (A/G/) \\
| (F>G) Ad | f>e d (D/E/) | (F>G) ({F}E>D) | D3 |]` },
  { id: "on673", n: 673, level: 2, rk: "air", lo: 64, hi: 83, p: 2902, abc: `X:673
T:Planxty Fanny Powers
R:air
B:O'Neill's Music of Ireland (1903), no. 673
Z:John Chambers
M:6/8
L:1/8
Q:3/8=40
K:A
A2E ABc | ">"(d2c) ">"(B2A) | ">"(G2F) EFE | ">"(G2A) ">"(B2d) |
| cBA cde | ">"(f2B) B2A | {A}GFE EFG | A3 A2z :|
|| .e(c/d/e) .e(c/d/e) | (.A2.A) (.A2.A) | .f(d/e/f) .f(d/e/f) | (.B2.B) (.B2.B) |
| cde fga | gab efe | {d}cBA BcB | A3 A2z|]` },
  { id: "on699", n: 699, level: 3, rk: "air", lo: 62, hi: 84, p: 1781, abc: `X:699
T:O'Carolan's Farewell
R:air
B:O'Neill's Music of Ireland (1903), no. 699
Z:John Chambers
M:C
L:1/8
Q:1/4=70
K:Gm
(G^F)(GA) B2(AG) | A2(cd) f2(dc) | (fd)(cA) (d>c)(A>G) | G4 (D3G) |
|(G^F)(GA) (BA)(BG) | A2(f<a) Hg3f | (d3f) (c3d) | (B{cB}A)G^F G3 ||
d | (g3a) (g^f)(ga) | (g^f)(ga) g2(d=e) | f4 (f=e)(fg) | ((fg)(fg)) f2d2 |
|(g3a) ({c'}ba)(g^f) | (g^f)(ga) g2(d=e) | (f=e)(fg) {b}a2(^fg) | g>gfd fdcA |
| d>cAG F2D2 | (G^F)(GA) (BA)(BG) | A2(f<a) Hg3f | d2(df) c2(cd) | (B{cB}A)G^F G3z |]` },
  { id: "on704", n: 704, level: 2, rk: "jig", lo: 62, hi: 78, p: 2775, abc: `X:704
T:The Walls of Liscarroll
R:jig
B:O'Neill's Music of Ireland (1903), no. 704
Z:A. Lee Worman
M:6/8
L:1/8
Q:3/8=90
K:D
"^A"[|] A \\
|  d>cA A>GE | G>EE D2 E | G>EE =c>EE | GAB =c2e \\
|| d>cA A>GE | G>EE D2 E | G>EE =c>EE | D>ED D2 :|
"^B"|: A \\
|  d>cd ecA | d>cd ecA | =c>[Bd]c c>BA | G>AB cGE \\
|| A>de fed | {f}e>dc dcA | G>EE =c>EE | D>ED D2 :|` },
  { id: "on708", n: 708, level: 3, rk: "jig", lo: 62, hi: 81, p: 3831, abc: `X:708
T:The Gold Ring
R:jig
B:O'Neill's Music of Ireland (1903), no. 708
Z:A. Lee Worman
M:6/8
L:1/8
Q:3/8=90
K:G
d |\\
cAG GFG | cAG G2d | cAG GFG | cAG F2d |\\
cAG GFG | cAG TA2G | FGA (~fed) | cAG G2 :|
|: d |\\
cAd cAd | cAG G2d | cAd cAd | cAG F2d |\\
cAd cAd | cAG TA2G | FGA (~fed) | cAG G2 :|
|: (3(d/e/f/) |\\
gag gdc | BGG G2 d/e/ | =fgf fc_B | A=FF F2d |\\
gag gdc | BGG G2d | =fgf fed | cAG G2 :|
|: (3(d/e/f/) |\\
gdd fdd | gdd fdd | gdd fdd | cAG G2 (3(d/e/f/) |\\
gdd fdd | gdd fdd | (f/g/a)g f2d | cAG G2 :|
|: D |\\
Gdd Gdd | cAG G2A | TB2G TA2G | cAG F2A |\\
TB2G TA2G | TB2G TA2G | FGA (~fed) | cAG G2 :|
|: (G/A/) |\\
BGB AFA | DED FED | Add fed | cAG FGA |\\
BGB AFA | DED FED | Add fed | cAG G2 :|
|: (G/A/) |\\
BAB DED | AFA DED | Add fed | cAG FGA |\\
BAB DED | AFA DED | Add fed | cAG G2 :|` },
  { id: "on712", n: 712, level: 3, rk: "jig", lo: 64, hi: 83, p: 3039, abc: `X:712
T:Off to the Hunt
R:jig
B:O'Neill's Music of Ireland (1903), no. 712
Z:A. Lee Worman
M:6/8
L:1/8
Q:3/8=90
K:Am
"^A"[|] E |\\
ABA ABd | ege dBG | G^FG BAG | dBG BAG ||\\
A>BA ABd | e^de gba | edc Bcd | ecA A2 :|
"^B"|: ^g |\\
{b}a^ga ABA | {b}a^ga A2 ^f | g2 G GAG | BAB GAB ||\\
cBc d^cd | e^de gba | edc Bcd | ecA A2 :|` },
  { id: "on713", n: 713, level: 3, rk: "jig", lo: 68, hi: 81, p: 2902, abc: `X:713
T:The Highway to Dublin
R:jig
B:O'Neill's Music of Ireland (1903), no. 713
Z:A. Lee Worman
M:6/8
L:1/8
Q:3/8=90
K:A
"^A"[|] g |\\
fed  cBA  | ecA A2g | fed cBc | dBG G2 || g |\\
f>ed c>BA | def efg | agf efd | cAA A2 :|
"^B"|: g |\\
faf {a}g2f | ecA A2g | faf {a}g2e | dBG G2 || g |\\
faf    geg | fdf efg | agf    efd | cAA A2 :|` },
  { id: "on717", n: 717, level: 3, rk: "jig", lo: 68, hi: 81, p: 2902, abc: `X:717
T:Saddle the Pony
R:jig
B:O'Neill's Music of Ireland (1903), no. 717
Z:A. Lee Worman
M:6/8
L:1/8
Q:3/8=90
K:A
"^A"[|] A/B/ |:\\
cAA eAA | cBc eAA | cAA eAA | dBG Bcd ||\\
cAA eAA | cBc efg | agf gfe | dBG Bcd :|
"^B"|:\\
(e/a3/)f {a}gee | fdd gee | (e/a3/)f {a}gfe | dBG Bcd ||\\
(e/a3/)f {a}gee | fdd gee | def gfe | dBG Bcd :|` },
  { id: "on721", n: 721, level: 2, rk: "jig", lo: 62, hi: 81, p: 2774, abc: `X:721
T:The Hag with the Money
R:jig
B:O'Neill's Music of Ireland (1903), no. 721
M:6/8
L:1/8
Q:3/8=90
K:D
Add AcA|GEF G2 E|Ddd (A/2B/2c)A|GEF GED|\\
A~dB c2 A|GEF G2 E|DFA {d/2}cBA|BGE GED:|
||A~dc d2 e|fec d2 c|A~dc d2 e|fdf ecA|\\
A~dc d2 e|(f/2g/2a)f ecA|AGE cBA|BGE GED:|` },
  { id: "on730", n: 730, level: 2, rk: "jig", lo: 62, hi: 83, p: 2774, abc: `X:730
T:Cherish the Ladies
R:jig
B:O'Neill's Music of Ireland (1903), no. 730
M:6/8
L:1/8
Q:3/8=90
K:D
((3A/2B/2c/2)|"Sign"dFF AFF|DFA AGF|BEE GEE|GBA GFE|\\
dFF AFF|DFA AFA|Bcd efg|fdd "Fine"d2:|
||((3A/2B/2c/2)|dfd cec|dfd AGF|BEE GEE|GBA GFE|\\
dfd cec|dfd AGF|Bcd efg|fdd d2:|
||A|dfd cec|dfd AGF|B z E G z E|GcB/2A/2 GFE|\\
eGe cFc|dGd A2 G|(A>Bc/2d/2) efg|fdd d2:|
||B|Add fdd|add fdd|(A/2B/2c)d gfg|ece gfe|\\
agf bgf|afd cBA|((3f/2g/2a/2) B2 AGF|GEF GFE:|
||f2 f afd|fed cde|g2 g gfg|ece gfe|\\
agf bge|afd cBA|fdB AGF|GEF GFE:|
||DFA dAF|DFA BGE|DFA dAF|GEF GFE|\\
DFA DGB|DFA d2 e|fdB AGF|GEF  GF"Sign"E:|` },
  { id: "on735", n: 735, level: 2, rk: "jig", lo: 62, hi: 79, p: 2781, abc: `X:735
T:The Basket of Turf
R:jig
B:O'Neill's Music of Ireland (1903), no. 735
Z:Bob Safranek
M:6/8
L:1/8
Q:3/8=90
K:Em
   E | EBB BAG | FDF AGF | EBB Bcd | AGF  E2 E |
       EGB BAG | FDF AGF | GAB Bcd | AGF  E2  :|
|: B | Bee efg | dcB AGF | Eee efg | f^df e2 e |
       Eee efg | dcB AGF | GAB Bcd | AGF  E2  :|` },
  { id: "on736", n: 736, level: 3, rk: "jig", lo: 66, hi: 83, p: 2807, abc: `X:736
T:Kelly the Rake
R:jig
B:O'Neill's Music of Ireland (1903), no. 736
Z:Bob Safranek
M:6/8
L:1/8
Q:3/8=90
K:Dmix
   gdB gdB | gdB g2 a | bag gfg | afd d^cd |
   gdB gdB | gdB g2 a | bag fga |1 g3 g2 z :|2 g2 =f2 z ||
|: fdB {c}BAB | fBB gBB | fdB {c}BAB | cAF FAc |
   fdB {c}BAB | fBB gBB | fba    gfe |1 dcB AGF :|2 dcB AFd |]` },
  { id: "on755", n: 755, level: 2, rk: "jig", lo: 62, hi: 83, p: 2773, abc: `X:755
T:The Templehouse Jig
R:jig
B:O'Neill's Music of Ireland (1903), no. 755
Z:Bob Safranek
M:6/8
L:1/8
Q:3/8=90
K:Em
       EFE G2 A | B2 F G2 E | DED F2 D | A2 D F2 D |
       EFE G2 A | B2 F G2 A | BcB AGF  | BGE  E2  :|
|: f | (g2 f) (e2 f) | (g2 f) (e2 g) | faf d2 f | faf d2 f
|1 g2 f e2 f | g2 f e2 d | BcB AGF | BGE E2 :|
|2 b2 g a2 f | g2 e f2 d | BcB AGF | BGE E2 |]` },
  { id: "on759", n: 759, level: 2, rk: "jig", lo: 62, hi: 83, p: 2773, abc: `X:759
T:Paddy Whack
R:jig
B:O'Neill's Music of Ireland (1903), no. 759
Z:Stephen Foy
M:6/8
L:1/8
Q:3/8=90
K:G
G|GBd g>fg|edc BAG|GBd e>fg|fdd def|\\
gbg afd|c>de dBG|GAB cAd|BGG G2:|
||c|BGB cde|dBG A2 G|GBd e>fg|fdd d2 (e/f/)|\\
gba gfe|dBG AFD|GAB cAd|BGG G2:|` },
  { id: "on763", n: 763, level: 2, rk: "jig", lo: 62, hi: 81, p: 2773, abc: `X:763
T:Nell Flaherty's Drake
R:jig
B:O'Neill's Music of Ireland (1903), no. 763
Z:Stephen Foy
M:6/8
L:1/8
Q:3/8=90
K:G
(D|G)AB AGE|DEG GBd|efg dBG|{c}BAA A2 (D|\\
G)AB AGE|DEG GBd|efg dBA|BGG G2:|
||B|def {a}gfg|afd edB|gfg edB|{c}BAA A2 (D|\\
G)AB AGE|DEG GBd|efg dBA|BGG G2:|` },
  { id: "on766", n: 766, level: 3, rk: "jig", lo: 67, hi: 81, p: 2805, abc: `X:766
T:The Hare in the Corn
R:jig
B:O'Neill's Music of Ireland (1903), no. 766
Z:Stephen Foy
M:6/8
L:1/8
Q:3/8=90
K:G
((3A/B/c/)|d2 G d2 =f|edc B2 G|c2 e dcB|cAA A2 (B/c/)|\\
d2 G d2 =f|edc BAG|Aag {g}fef|gGG G2:|
||((3A/B/c/)|.d(B/c/d/B/) GBc|.d(B/c/d/B/) GBd|\\
.e(c/d/e/c/) Ace|.e(c/d/e/c/) ABc|dBd ece|fdf {a}gfe|\\
dcB Agf|gGG G2:|` },
  { id: "on772", n: 772, level: 3, rk: "jig", lo: 64, hi: 81, p: 2741, abc: `X:772
T:The Penniless Traveller
R:jig
B:O'Neill's Music of Ireland (1903), no. 772
Z:Stephen Foy
M:6/8
L:1/8
Q:3/8=90
K:C
G|Gcc cBA|G>AG GEF|Gcc c2 d|ecA A2 G|\\
Gcc cA|G>AG GEF|Gcc Bdf|ecc c2:|
||(e/f/)|gec cBc|AFF F2 (f/g/)|afd dec|BGG G2 G|\\
Gcc cBA|G>AG GEF|Gcc Bdf|ecc c2:|` },
  { id: "on775", n: 775, level: 2, rk: "jig", lo: 62, hi: 81, p: 726, abc: `X:775
T:Tobin's Favourite
R:jig
B:O'Neill's Music of Ireland (1903), no. 775
Z:Stephen Foy
M:6/8
L:1/8
Q:3/8=90
K:D
A/F/|DFA dcd|ecA cde|fdf {a}gfg|ecA GFE|\\
DFA dcd|ecA efg|(f/g/a)f gec|edc d2:|
||d|dfa agf|(e/f/g)e efg|fdf {a}gfg|ecA GFE|\\
DFA dcd|ecA efg|(f/g/a)f gec|edc d2:|` },
  { id: "on776", n: 776, level: 2, rk: "jig", lo: 62, hi: 83, p: 2774, abc: `X:776
T:Banish Misfortune
R:jig
B:O'Neill's Music of Ireland (1903), no. 776
Z:Stephen Foy
M:6/8
L:1/8
Q:3/8=90
K:D
A/G/|F2 D DED|DEF GFG|A3 cAG|ABc (d/c/A)G|F2 D DED|DEF GFG|
|AdB cde|d3 d2::d/e/|f2 d/d/ dcd|dfa agf|e2 c/c/ cBc|\\
(e/d/)ef gfe|
|[1 f2 d/d/ dcd|dfa agf|(g/f/e)d cde|d3 d2:|[2 fga gab|\\
afd ecA|fed cde|d3 d2||
||d/e/|(f/e/d).f (e/d/c).e|(d/c/A).B cAG|F2 D DED|\\
DEF GFG|(A/G/A).B cAG|AdB cde|fed cde|d3 d2:|` },
  { id: "on777", n: 777, level: 2, rk: "jig", lo: 62, hi: 79, p: 2773, abc: `X:777
T:The Wheels of the World
R:jig
B:O'Neill's Music of Ireland (1903), no. 777
Z:Stephen Foy
M:6/8
L:1/8
Q:3/8=90
K:G
G|FDD ADD|BGB cBA|Bcd ecA|ABG FED|~G3 A2 A|BGB cBA|
|Bcd ecA|AGG G2::B|def gdB|dBG c2 A|Bcd ecA|ABG FED|
|[1 def gdB|dBG c2 A|Bcd ecA|AGG G2:|[2 ~G3 A2 A|BGB cBA|\\
Bcd ecA|AGG G2|]` },
  { id: "on784", n: 784, level: 2, rk: "jig", lo: 64, hi: 81, p: 2774, abc: `X:784
T:The Humours of Whiskey
R:jig
B:O'Neill's Music of Ireland (1903), no. 784
Z:Stephen Foy
M:6/8
L:1/8
Q:3/8=90
K:D
A|dfd ecA|dcB AGF|GBB FAA|GFG E2 A|\\
dcd ecA|dcB AFA|Bcd efg|fdd d2:|
||B|AFA dcd|BGB ede|AFA dAF|GFG EFG|\\
AFA dcd|BGB ede|faf ede|fdd d2:|` },
  { id: "on786", n: 786, level: 3, rk: "jig", lo: 62, hi: 81, p: 2805, abc: `X:786
T:The Humours of Bandon
R:jig
B:O'Neill's Music of Ireland (1903), no. 786
Z:Stephen Foy
M:6/8
L:1/8
Q:3/8=90
K:Em
D|D>GG {A}GFG|~BAG FGA|{A}d G {A}GFG|Bcd =fef|\\
~d2 e c2 d|{d}cAG FGA|{c}BAG (A<D)F|G3 G2:|
||B|d<gg ~gfg|(f<a)g f2 a|~g2 f d2 e|~=f2 d c2 e|\\
~d2 c A2 B|~c2 A G2 B|~A2 G F2 A|{A}GFE F2 E|]` },
  { id: "on795", n: 795, level: 2, rk: "jig", lo: 62, hi: 79, p: 2773, abc: `X:795
T:Out on the Ocean
R:jig
B:O'Neill's Music of Ireland (1903), no. 795
Z:Stephen Foy
M:6/8
L:1/8
Q:3/8=90
K:G
e|dcB {c}BAG|BdB A2 B|GED G2 A|{c}BAB GED|\\
dcB {c}BAG|BdB A2 B|GED G2 A|{c}BGG G2:|
||d|efd {f}edB|efe fdB|ded dBd|gfe dBA|\\
{A}GFG {B}AGA|BcB B2 A|GED G2 A|{c}BGG G2:|` },
  { id: "on802", n: 802, level: 2, rk: "jig", lo: 62, hi: 81, p: 2773, abc: `X:802
T:A Trip to the Cottage
R:jig
B:O'Neill's Music of Ireland (1903), no. 802
Z:Stephen Foy
M:6/8
L:1/8
Q:3/8=90
K:G
B/c/|dcd BGB|cBc AFA|DGG FAA|GBB ABc|\\
dcd BGB|cBc AFA|EGG FGA|BGG G2:|
||d|gfe d2 d|edc Bcd|ecA dBG|FAG FED|\\
gfe d2 d|edc Bcd|efg eag|fdd d2:|` },
  { id: "on806", n: 806, level: 3, rk: "jig", lo: 68, hi: 81, p: 3030, abc: `X:806
T:Drive the Cows Home
R:jig
B:O'Neill's Music of Ireland (1903), no. 806
Z:Stephen Foy
M:6/8
L:1/8
Q:3/8=90
K:A
d|efe edB|dBA A2 B|GAG GBd|BAG G2 g|fed efg|aga e2 f|
|=gfg dBd|ecA A2:|e|aga efg|aga e2 f|gfg def|gfg d2 e|
[1 aga efg|aga e2 f|=gfg dBd|ecA A2:|[2 agf gfe|fed edB|\\
=gfg dBd|ecA A2|]` },
  { id: "on814", n: 814, level: 2, rk: "jig", lo: 62, hi: 81, p: 2774, abc: `X:814
T:Shandon Bells
R:jig
B:O'Neill's Music of Ireland (1903), no. 814
Z:Dan G. Petersen
M:6/8
L:1/8
Q:3/8=90
K:D
B|A>FD DFA|d>ed cBA|B>GE EFA|B2A Bcd|
A>FD DFA|d>ed cBA|Bcd ecA|1 d3 dcB:|2 d3 d2|]
g|f2(d d)ed|faa afd|c>AA e>AA|cBc efg|
f2(d d)ed|faa afd|Bcd ecA|d3 d2|]` },
  { id: "on820", n: 820, level: 2, rk: "jig", lo: 64, hi: 81, p: 2902, abc: `X:820
T:Blackeyed Biddy
R:jig
B:O'Neill's Music of Ireland (1903), no. 820
Z:Dan G. Petersen
M:6/8
L:1/8
Q:3/8=90
K:A
E|ABA Ace|eac B2A|cBA d2B|cAA aec|
ABA Ace|eac B2A|cBA d2B|cAA A2:|
a|e2a f2a|e2a fed|efg aec|eac ecA|
cBc dcd|eac B2A|cBA d2B|cAA A2:|` },
  { id: "on825", n: 825, level: 2, rk: "jig", lo: 62, hi: 83, p: 2772, abc: `X:825
T:The Boys of the Town
R:jig
B:O'Neill's Music of Ireland (1903), no. 825
Z:Dan G. Petersen
M:6/8
L:1/8
Q:3/8=90
K:G
D|GFG GBd|edB dBA|GFG GBd|edB AFD|
GFG GBd|edB gfg|edB AGA|BGG G2:|
B|def gfg|afd edB|def gfg|afd e2d|
|1 def gfg|afd efg|edB AGA|BGG G2B:|
|2 def gbb|faa efg|edB AGA|BGG G2|]` },
  { id: "on826", n: 826, level: 3, rk: "jig", lo: 64, hi: 81, p: 2805, abc: `X:826
T:Petticoat Loose
R:jig
B:O'Neill's Music of Ireland (1903), no. 826
Z:Dan G. Petersen
M:6/8
L:1/8
Q:3/8=90
K:Am
A|GEE cEE|GFG GcA|GEE cEE|A3 (A/B/cA)|
GEE cEE|cde eag|fde cAG|1 EAA (A/B/cA):|2 EAA A2|]
^f|~g3 ged|cAA Bcd|eaa age|edd d2^f|
gaf ged|cAA Bcd|(e=f/e/d) cAG|EAA A2:|` },
  { id: "on839", n: 839, level: 2, rk: "jig", lo: 62, hi: 81, p: 2773, abc: `X:839
T:The Idle Road
R:jig
B:O'Neill's Music of Ireland (1903), no. 839
Z:Dan G. Petersen
M:6/8
L:1/8
Q:3/8=90
K:G
D|D>BB D>cc|D>BB c2e|dBG AFD|BAG AFD|
D>BB D>cc|D>BB c2e|dBG FGA|BGG G2:|
G|G>gg efg|fed cAF|G>gg gfg|afd cAF|
D>BB D>cc|D>BB c2e|dBG FGA|BGG G2:|` },
  { id: "on845", n: 845, level: 2, rk: "jig", lo: 62, hi: 81, p: 2774, abc: `X:845
T:The Humours of Mullinafauna
R:jig
B:O'Neill's Music of Ireland (1903), no. 845
Z:Dan G. Petersen
M:6/8
L:1/8
Q:3/8=90
K:D
(d/e/)|fed cAG|ABA {d}cAG|F2D DED|F2A GFD|
ABA cAG|ABA A2e|fed {f}ecA|ded d2:|
(d/e/)|f2d dcd|f2g agf|e2c cdc|e2f {a}gec|
f2g afd|e2f {a}gec|fed ecA|ded d2:|` },
  { id: "on847", n: 847, level: 3, rk: "jig", lo: 62, hi: 81, p: 2805, abc: `X:847
T:The Rakes of Kildare
R:jig
B:O'Neill's Music of Ireland (1903), no. 847
Z:Dan G. Petersen
M:6/8
L:1/8
Q:3/8=90
K:G
D|D2G {A}GFG|ABc d2e|=fef ded|cAG F3|
DGG {A}GFG|ABc d2e|=fed cA^F|G3 G2:|
d|{a}gfg def|gfg a2g|=fef ded|cAG F2d|
{a}gfg def|gfg a2g|=fed cA^F|G3 G2:|` },
  { id: "on853", n: 853, level: 3, rk: "jig", lo: 67, hi: 83, p: 2772, abc: `X:853
T:The Maid on the Green
R:jig
B:O'Neill's Music of Ireland (1903), no. 853
Z:Dan G. Petersen
M:6/8
L:1/8
Q:3/8=90
K:G
d|gfg e2d|Bee dBA|BGG dGG|BAA ABd|
gfg Te2d|Bee dBA|BGG dBA|BGG G2:|
d|gfg afd|gfg a2f|{a}gfg eag|fdd d2g|
bgb afa|gfg Te2d|Bee dBA|BGG G2:|` },
  { id: "on856", n: 856, level: 3, rk: "jig", lo: 64, hi: 79, p: 2781, abc: `X:856
T:Rory O'Moore
R:jig
B:O'Neill's Music of Ireland (1903), no. 856
Z:Dan G. Petersen
M:6/8
L:1/8
Q:3/8=90
K:G
e|dGG BGG|dGG G2e|dcB BAG|FAA ABc|
dGG BGG|dGG edc|Bcd def|gGG G2:|
f|gfe edB|{d}cBA G2F|EFG GAB|Be^d e2(e/f/)|
gfe edB|{d}cBA G2F|EFG GAB|1 edd d2:|2 Be^d e2|]` },
  { id: "on858", n: 858, level: 2, rk: "jig", lo: 62, hi: 81, p: 2783, abc: `X:858
T:Lannigan's Ball
R:jig
B:O'Neill's Music of Ireland (1903), no. 858
Z:Dan G. Petersen
M:6/8
L:1/8
Q:3/8=90
K:Em
EFE G2A|B2A B^cd|D2E F2G|ABA AFD|
EFE G2A|B2A B^c^d|edB cBA|BGE E2:|
d|e2f gfg|eag fe^d|e2f gfg|fdB B3|
e2f gfg|eag fe^d|edB cBA|BGE E2:|` },
  { id: "on861", n: 861, level: 2, rk: "jig", lo: 62, hi: 81, p: 2773, abc: `X:861
T:The Cliffs of Moher
R:jig
B:O'Neill's Music of Ireland (1903), no. 861
Z:Dan G. Petersen
M:6/8
L:1/8
Q:3/8=90
K:G
d|gfg agf|dgg fdc|AGG (A/G/FE)|DGG AGG|
gfg agf|dgg fdc|AGG (A/G/FE)|DGG G2:|
A|ded cAA|ded cAG|(F/G/A).B cAG|(F/G/A).B Tc2A|
ded cAA|ded cAG|(F/G/A).B cAG|FGG G2:|` },
  { id: "on867", n: 867, level: 3, rk: "jig", lo: 67, hi: 81, p: 2773, abc: `X:867
T:The Butcher's March
R:jig
B:O'Neill's Music of Ireland (1903), no. 867
Z:Dan G. Petersen
M:6/8
L:1/8
Q:3/8=90
K:G
g|fAA eAA|~d2B A2g|fAA eAA|~d2B G2g|
fAA eAA|fAA efg|faf gfe|~d2B G2:|
(B/c/)|ded BAB|~d2B A2B|ded BAB|~d2B G2B|
ded BAB|~d2B A2g|faf gfe|~d2B G2:|` },
  { id: "on869", n: 869, level: 3, rk: "jig", lo: 67, hi: 84, p: 2773, abc: `X:869
T:Larry O'Gaff
R:jig
B:O'Neill's Music of Ireland (1903), no. 869
Z:Dan G. Petersen
M:6/8
L:1/8
Q:3/8=90
K:G
(3(d/e/f/)|gGG BAG|ded dBG|cec BdB|ABc def|
gGG BAG|ded dBG|cec BdB|AGA G2:|
d|dgg gfg|gaf ged|eaa aga|bgg g2b|
|1 c'ba gfe|ded dBG|cec BdB|AGA G2:|
|2 c'ba gfe|dge dBG|cec BdB|AGA G2|]` },
  { id: "on893", n: 893, level: 2, rk: "jig", lo: 67, hi: 83, p: 2772, abc: `X:893
T:Behind the Haystack
R:jig
B:O'Neill's Music of Ireland (1903), no. 893
Z:Dan G. Petersen
M:6/8
L:1/8
Q:3/8=90
K:G
d|efe edB|def gfe|dBA ABA|dBA ABd|
efe edB|def gfe|dBG GAG|dBG G2:|
d|gbg faf|ege dBG|dBA ABA|dBA ABd|
gbg faf|ege dBG|dBG GAG|dBG G2:|
d|g2a bge|g2a bge|dBA ABA|dBA ABd|
g2a bge|g2a bge|dBG GAG|dBG G2:|` },
  { id: "on894", n: 894, level: 2, rk: "jig", lo: 64, hi: 83, p: 2774, abc: `X:894
T:Gallant Tipperary
R:jig
B:O'Neill's Music of Ireland (1903), no. 894
Z:Dan G. Petersen
M:6/8
L:1/8
Q:3/8=90
K:D
(3(A/B/d/)|ded FGA|B2A A2(B/c/)|d2d ede|f2d d2(e/f/)|
gag fed|efd cBA|BAG FGA|B2A A2:|
(f/g/)|aba def|gab efg|aba fed|e2A A2(f/g/)|
aba fgf|efe d2A|BAG FGA|B2A A2:|
A|dAF dAF|B2A ABc|dAF dAF|G2E E2(3(A/B/d/)|
dAF BAF|Adf a2g|fed FGA|B2A A2:|
(f/g/)|afd cBA|BGG G2g|bge efd|cAA A2(f/g/)|
afd gfe|afd cBA|BAG FGA|B2A A2:|` },
  { id: "on898", n: 898, level: 2, rk: "jig", lo: 64, hi: 83, p: 2772, abc: `X:898
T:Jackson's Bottle of Brandy
R:jig
B:O'Neill's Music of Ireland (1903), no. 898
Z:Dan G. Petersen
M:6/8
L:1/8
Q:3/8=90
K:Em
G2e dBG|ABG dBG|G2e dBG|A2A BGE|
G2e dBG|BAB def|gfe dBG|AGA BGE:|
gbg faf|ege def|gfg aga|bab afd|
gbg faf|ege def|gfe dBG|AGA BGE:|` },
  { id: "on899", n: 899, level: 2, rk: "jig", lo: 62, hi: 83, p: 2774, abc: `X:899
T:Jackson's Morning Brush
R:jig
B:O'Neill's Music of Ireland (1903), no. 899
Z:Dan G. Petersen
M:6/8
L:1/8
Q:3/8=90
K:D
D|DFE EFD|DFA AFA|BAB def|gfg e2D|
DFE EFD|DFA AFA|BAB d2e|fdd d2:|
g|fed faf|ede fdB|AFA def|gfg e2g|
fed faf|ede fdB|AFA d2e|fdd d2:|
g|fdf ece|dBd AFA|DFA def|gfg e2g|
fdf ece|dBd AFA|DFA d2e|fdd d2g|
fdf ece|dBd AFA|DFA def|gfg e2g|
afd gec|dcB AFA|DFA d2e|fdd d2||
g|fed faf|gbg faf|fed faf|gfg e2g|
fed faf|gbg faf|fed eag|fdd d2:|` },
  { id: "on901", n: 901, level: 2, rk: "jig", lo: 64, hi: 81, p: 2774, abc: `X:901
T:The Kinnegad Slashers
R:jig
B:O'Neill's Music of Ireland (1903), no. 901
Z:Tom Keays
M:6/8
L:1/8
Q:3/8=90
K:D
A | d>ed dAF | A>BA ABc | d>ed dAF | (E<e)e e2f |
d>ed dAF | ABA Aag | {g}fef dBA | (B<d)d d2 :|
|| A | d>fa afd | c>de ecA | d>fa afd | (f<a)a a2A |
(d<f)a afd | c>de eag | {g}fef dBA | (B<d)d d2 :|
|| ((3A/2B/2c/2) | dAF dAF | A>BA ABc | dAF dAF | (E<e)e e2f |
dAF dAF | A>BA Aag | {g}f>ef dBA | (B<d)d d2 :|` },
  { id: "on902", n: 902, level: 3, rk: "jig", lo: 62, hi: 83, p: 3063, abc: `X:902
T:The Rakes of Clonmel
R:jig
B:O'Neill's Music of Ireland (1903), no. 902
Z:Tom Keays
M:6/8
L:1/8
Q:3/8=90
K:Am
(A/2B/2) | cBA GED | EAA A2B | cBA edc | BGG G2 (e/2^f/2) |
g^fg efg | dBG Bcd | ecA GED | EAA A2 :|
a | aea aed | cAA A2(e/2^f/2) | gea gdc | BGG G2 [fB] |
|1 gea gfe | dBG Bcd | ecA GED | EAA A2 :|2 cBc d^cd | edc Bcd | ecA GED | EAA A2||
|| B | Aaa a^ga | bge e2^f | g^fg bge | dBG G2B |
cBc d^cd | efe Bcd | ecA GED | EAA A2 :|` },
  { id: "on909", n: 909, level: 3, rk: "jig", lo: 67, hi: 79, p: 2741, abc: `X:909
T:Huish the Cat
R:jig
B:O'Neill's Music of Ireland (1903), no. 909
Z:Tom Keays
M:6/8
L:1/8
Q:3/8=90
K:Gmix
G>AG c2e | d<dA c2e | G>AG c2d | ecA A2c |
G>AG c2e | d<dA c2e | g>fe f2d | ecA (A2{BA}G) :|
|| gfe f2d | edc f2d | gfe f2d | edA A2G |
gfe f2d | edc f2d | G>AG f2d | ecA (A2{BA}G) :|` },
  { id: "on914", n: 914, level: 2, rk: "jig", lo: 62, hi: 83, p: 2774, abc: `X:914
T:Off She Goes!
R:jig
B:O'Neill's Music of Ireland (1903), no. 914
Z:Tom Keays
M:6/8
L:1/8
Q:3/8=90
K:D
| F2A G2B | ABc d3 | F2A G2B | AFD E2D  |
F2A G2B | ABc d2e | f2d g2f | edc d2 :|
|| e | faf def | gbg efg | faf def | ecA A2g  |
faf def | gbg efg | f2d g2f | edc d2 :|` },
  { id: "on915", n: 915, level: 2, rk: "jig", lo: 64, hi: 83, p: 2773, abc: `X:915
T:The Black Rogue
R:jig
B:O'Neill's Music of Ireland (1903), no. 915
Z:Tom Keays
M:6/8
L:1/8
Q:3/8=90
K:Em
g | dBB BAB | dBB B2g | dBB BAB | GEE E2g |
dBB BAB | dBB BAG | ABc BAB | GEE E2 :|
|| d | gfg aga | bge edB | gfg aga | bge (e>fg/2a/2) |
bag agf | gef g2e | dBB BAB | GEE E2 :|` },
  { id: "on917", n: 917, level: 2, rk: "jig", lo: 62, hi: 83, p: 2773, abc: `X:917
T:The Blooming Meadows
R:jig
B:O'Neill's Music of Ireland (1903), no. 917
Z:Tom Keays
M:6/8
L:1/8
Q:3/8=90
K:G
G/F/ | D2G G2A | BdB ({d}c)AG | F2D DED | F2G AFD |
D2G G2A | BAG ABd | fed ({d}c)AF | GAG G2 :|
((3d/e/f/) | g2d def | g2a bag | f2d ded | f2g afd |
|1 g2d def | g2a bag | fed cAF | GAG G2 :|2g2e f2d |
edc Bcd | fed cAF | GAG G2 |]` },
  { id: "on929", n: 929, level: 3, rk: "jig", lo: 68, hi: 83, p: 3060, abc: `X:929
T:The Tenpenny Bit
R:jig
B:O'Neill's Music of Ireland (1903), no. 929
Z:Tom Keays
M:6/8
L:1/8
Q:3/8=90
K:Am
e | eAA ^GAA | Bdd Bdd | eAA ^GAA | BAA A2 e |
eAA ^GAA | Bdd Bdd | g^fe edB | BAA A2 :|
|| d | e2 ^f gfg | eag fed | e2 ^f gfg | e^f^g a2 a |
baa a^ff | g^fe def | g^fe edB | BAA A2 :|` },
  { id: "on954", n: 954, level: 2, rk: "jig", lo: 62, hi: 79, p: 2775, abc: `X:954
T:Paddy O'Rafferty
R:jig
B:O'Neill's Music of Ireland (1903), no. 954
Z:Dan G. Petersen
M:6/8
L:1/8
Q:3/8=90
K:G
GAB DED|DcB AGE|GAB DED|GAG GED|
GAB DED|DcB ABc|dcB AGE|GAG GED:|
DBB DAA|DBB AGE|DBB DAA|GAG GED|
DBB DAA|DBB ABc|dcB AGE|GAG GED:|
dcd efg|ded dBG|d^cd efg|GAG GED|
d^cd efg|ded def|gfe dcB|GAG GED:|
BDD EDD|BGB AGE|BDD EDD|GAG GED|
BDD EDD|BGB ABc|dcB AGE|GAG GED:|
B2G A2G|B2G AGE|B2G AGE|GAG GED|
BGG AGG|BGG ABc|dcB AGE|GAG GED:|` },
  { id: "on966", n: 966, level: 3, rk: "jig", lo: 67, hi: 81, p: 2741, abc: `X:966
T:Scatter the Mud
R:jig
B:O'Neill's Music of Ireland (1903), no. 966
Z:Dan G. Petersen
M:6/8
L:1/8
Q:3/8=90
K:C
d|eAA B2(c/B/ A)|eAA ABd|eAA B2(c/B/ A)|BGG GBd|
eAA B2(c/B/ A)|eAA ABd|edc BcA|BGG G2:|
d|gfg efg|fag fed|gfg efg|afd d2d|
gfg efg|fag fed|edc BcA|BGG G2:|` },
  { id: "on971", n: 971, level: 2, rk: "jig", lo: 67, hi: 83, p: 2773, abc: `X:971
T:Garryowen
R:jig
B:O'Neill's Music of Ireland (1903), no. 971
Z:Dan G. Petersen
M:6/8
L:1/8
Q:3/8=90
K:G
(g/f/)|edc BAG|B>cB Bgf|edc BAG|ABA Agf|
edc BAG|B>cB B2(B/c/)|def gdB|A>BA A2:|
(B/c/)|d2B d2B|deB dgf|e2c e2c|efd e2f|
g2a b2a|gfe edB|def gdB|A>BA A2:|` },
  { id: "on987", n: 987, level: 3, rk: "jig", lo: 64, hi: 83, p: 2772, abc: `X:987
T:Haste to the Wedding
R:jig
B:O'Neill's Music of Ireland (1903), no. 987
Z:Robert Thorpe
M:6/8
L:1/8
Q:3/8=90
K:D
A|AFA Agf|ede fdB|AFA AdF|EFE E2 A|
|AFA Agf|ede fdB|A2 g g<-ag|ded d2:|
a|afa afa|bgb bfb|afa agf|efe dfg|
a3 f3|ede fdB|A2 g f<-ag|ded d2:|` },
  { id: "on1000", n: 1000, level: 2, rk: "jig", lo: 62, hi: 83, p: 2773, abc: `X:1000
T:The Old Grey Goose
R:jig
B:O'Neill's Music of Ireland (1903), no. 1000
Z:Robert Thorpe
M:6/8
L:1/8
Q:3/8=90
K:Em
E/-F/ | GBG FAF | GEE E2 F | DFA dAG | FDD DEF |
  | ~GFG AGA | BAB gfg | edB {c}-BAF | GEE E2 :|
F | G2 G dBG | GAB/-c/ dBG | A2 A ecA | ABc/-d/ ecA |
  | GAG dBG | ege {a}-gfg | edB ~BAF | GEE E2 :|
d | efe edB | def g2 e | fdd add | fag fed |
  | gfg fef | def {a}-gfg | edB ~BAF | GEE E2 :|
c | BGG AFF | GEE E2 c | BGG dAG | FDD D2 c |
  | BGG AGF | GEE {a}-gfg | edB ~BAF | GEE E2 :|
f | gbg faf | gee e2 f | gbg fag | fdd def |
  | gbg faf | ege {a}-gfg | edB ~BAF | GEE E2 :|
f | gdc BcA | GEE E2 f | gdB dAG | FDD DEF |
  | G3 {B}-AGA | BcB {a}-gfg | edB ~BAF | GEE E2 :|` },
  { id: "on1003", n: 1003, level: 2, rk: "jig", lo: 66, hi: 83, p: 2774, abc: `X:1003
T:The Connachtman's Rambles
R:jig
B:O'Neill's Music of Ireland (1903), no. 1003
Z:Dan G. Petersen
M:6/8
L:1/8
Q:3/8=90
K:Bm
(3B/A/G/|FAA dAA|~BAA dAG|FAA dfe|dBB {c}BAG|
FAA dAA|~BAA def|gfe dfe|dBB B2:|
f|fbb faa|{g}fef def|fbb faa|fed e2e|
fbb afe|dBc def|{a}gfe dfe|dBB B2:|` },
  { id: "on1023", n: 1023, level: 3, rk: "jig", lo: 64, hi: 81, p: 3061, abc: `X:1023
T:The Gallowglass
R:jig
B:O'Neill's Music of Ireland (1903), no. 1023
Z:Dan G. Petersen
M:6/8
L:1/8
Q:3/8=90
K:Am
(A/B/) | cBA  eBd  | cAA A2(A/B/) | cBA e^fg | BGG G2(A/B/) |
         cBA  eBd  | cea e2d      | cBA ^GAB | cAA A2 :|
||   e | a^ga e=fd | cAA A2(A/B/) | cBA e^fg | BGG G2e |
         a^ga e=fd | cAA Aed      | cBA ^GAB | cAA A2  |
||   e | a^ga e=fd | cAA A2(A/B/) | cBA e^fg | BGG G2e |
         aeg  fdB  | ecA B^GE     | ABc dBe  | cAA A2 ||` },
  { id: "on1031", n: 1031, level: 2, rk: "jig", lo: 62, hi: 81, p: 2774, abc: `X:1031
T:The Top of Cork Road
R:jig
B:O'Neill's Music of Ireland (1903), no. 1031
Z:Dan G. Petersen
M:6/8
L:1/8
Q:3/8=90
K:D
(f/e/)|dAF DFA|Bed cBA|dcd efg|aed cBA|
dAF DFA|Bed cBA|dcd efg|fdd d2:|
g|fdf fga|ecd efg|dcd fed|cAA A2c|
BGB Bcd|AFA DFA|dcd efg|fdd d2:|` },
  { id: "on1034", n: 1034, level: 3, rk: "jig", lo: 64, hi: 83, p: 3030, abc: `X:1034
T:The Mooncoin Jig
R:jig
B:O'Neill's Music of Ireland (1903), no. 1034
M:6/8
L:1/8
Q:3/8=90
K:A
(e/d/)|cBA AEA|AEA Bcd|cBA Ace|dBG Bcd|
cBA AEA|AEA Bcd|Ace gfe|dBG Bcd:|
cde ef=g|(f/g/a)f ged|cde ef=g|(f/g/a)A Bcd|
cde efg|afd bge|afd gec|dBG Bcd:|
cBA Aaf|ecA Bcd|cBA =gfe|dBG Bcd|
cBA Aaa|Agg Aff|Aee efg|dBG Bcd:|` },
  { id: "on1042", n: 1042, level: 2, rk: "jig", lo: 62, hi: 83, p: 2773, abc: `X:1042
T:The Cook in the Kitchen
R:jig
B:O'Neill's Music of Ireland (1903), no. 1042
M:6/8
L:1/8
Q:3/8=90
K:G
D|G>DG GAG|FDE F2 A|G>DG GFG|Add cAG|
G>DG GAG|FDE F2 d|cAG FGA|{B}AGG G2:|
A|B>cB BAG|ABA AGF|GAG GFG|Add cAG|
B>cB BAG|ABA A2 d|cAG FGA|{B}AGG G2:|
B|d2 e f2 g|Ta2 g f2 d|cAG FGA|Add cAG|
d2 e f2 g|Ta2 g f2 d|cAG FGA|{B}AGG G2:|` },
  { id: "on1043", n: 1043, level: 2, rk: "jig", lo: 62, hi: 81, p: 2775, abc: `X:1043
T:Kitty's Rambles
R:jig
B:O'Neill's Music of Ireland (1903), no. 1043
M:6/8
L:1/8
Q:3/8=90
K:D
G|FED {d}cBA|dcd efg|fed {d}cAF|GAF GFE|
{G}FED c2 A|dcd efg|fed {d}cAG|Adc d2:|
A|dfa dfa|dfa afd|=ceg ceg|=ceg gfe|
fef gfg|afa gfe|fed {d}cAG|Adc d2:|
e|fgf efe|ded cAG|FGF EFE|DED GED|
AGA cAG|dcd efg|fed {d}cAG|Adc d2:|
(f/g/)|afd {e}dcd|dfa agf|ge=c {d}cBc|e=ce gfe|
fdf {a}geg|agf efg|fed {d}cAG|Adc d2:|` },
  { id: "on1060", n: 1060, level: 3, rk: "jig", lo: 62, hi: 81, p: 2997, abc: `X:1060
T:The Banks of Lough Gowna
R:jig
B:O'Neill's Music of Ireland (1903), no. 1060
M:6/8
L:1/8
Q:3/8=90
K:Am
ABA  AGE | EDE G3  | ABA  AGE | c2d  ecA |
ABA  AGE | EDE G3  | cde  ged | cAA  A3 :|
cde ^g2a | gea ged | cde ^g2a | ge^g a3  |
cde ^g2a | gea ged | cde  fed | ecA  A3 :|` },
  { id: "on1085", n: 1085, level: 2, rk: "jig", lo: 62, hi: 79, p: 2774, abc: `X:1085
T:The Geese in the Bog
R:jig
B:O'Neill's Music of Ireland (1903), no. 1085
M:6/8
L:1/8
Q:3/8=90
K:D
Add fdB|AFA AFA|Add fdB|AFA TB2A|
Add fdB|AFA DFA|gfe fdB|AFA BdB:|
AFE DFE|DFA BdB|AFD DFA|BGA BdB|
AFE DFE|DFA Bgf|gfe fdB|1 AFA BdB:|2 AFA B2d||` },
  { id: "on1086", n: 1086, level: 2, rk: "jig", lo: 62, hi: 83, p: 2772, abc: `X:1086
T:Going to Donnybrook
R:jig
B:O'Neill's Music of Ireland (1903), no. 1086
M:6/8
L:1/8
Q:3/8=90
K:G
E|"S"DGG BGG|AGG GBd|efg dBG|AGA BGE|
DGG BGG|AGG GBd|efg dBG|AGG G2:|
f|gfg efg|edB def|gfg eag|fdd d2f|
gfg efg|edB def|1 gfe dBA|BGG G2:|
[2 gba gfe|dBA BGE"S"||` },
  { id: "on1098", n: 1098, level: 2, rk: "jig", lo: 62, hi: 83, p: 2773, abc: `X:1098
T:The Luck Penny
R:jig
B:O'Neill's Music of Ireland (1903), no. 1098
M:6/8
L:1/8
Q:3/8=90
K:G
(G/A/)|BAG AGF|DGE FGA|BAG Bcd|cAG F2(d/c/)|
BAG AGF|GBd gag|fed gdB|cAF G2:|
d|dgf gfg|abg fed|bag afd|def g2a|
bag agf|gbg fed|def gdB|cAF G2:|
(B/c/)|dBG GFG|BGB dBG|cAF FEF|AFA cAF|
dBG GFG|gbg fed|def gdB|cAF G2:|` },
  { id: "on1099", n: 1099, level: 2, rk: "jig", lo: 62, hi: 81, p: 2709, abc: `X:1099
T:The Blarney Pilgrim
R:jig
B:O'Neill's Music of Ireland (1903), no. 1099
M:6/8
L:1/8
Q:3/8=90
K:G
DED DEG|A2G ABc|BAG AGE|GEA GED|
DED DEG|A2G ABc|BAG AGE|GED D2z:|
ded dBG|AGA BGE|ded dBG|ABA G3|
Tg2e dBG|AGA BGE|B2G AGE|GAG G2z:|
A2D B2D|A2D ABc|BAG AGE|GEA GED|
A2D B2D|A2D ABc|BAG AGE|GED D2z:|` },
  { id: "on1101", n: 1101, level: 2, rk: "jig", lo: 62, hi: 79, p: 2773, abc: `X:1101
T:The Dairy Maid
R:jig
B:O'Neill's Music of Ireland (1903), no. 1101
M:6/8
L:1/8
Q:3/8=90
K:G
(A/G/)|FDD FEF|DGG G2A|BAB GBd|cAG F2A|
BAB Bcd|cBc ABc|(d/e/f)d cAF|AGG G2:|
d|gfe fdc|BGG G2g|fef (d/e/f)d|cAG F2c|
BAB Bcd|cBc ABc|(d/e/f)d cAF|AGG G2:|` },
  { id: "on1110", n: 1110, level: 2, rk: "jig", lo: 62, hi: 81, p: 2774, abc: `X:1110
T:Gillan's Apples
R:jig
B:O'Neill's Music of Ireland (1903), no. 1110
M:6/8
L:1/8
Q:3/8=90
K:Amix
(3A/B/c/|dAF FAF|FAF F2d|AFE EFE|EFE EFA|
dAF FEF|DFA d2e|fed cdB|A3 A2:|
d|cAe cAe|cAe edc|dBf dBf|dBf fed|
cAe cAe|cAe e2a|fed cdB|A3 A2:|
d|cBA BAF|dAF D2d|cBA BAF|AFE E2d|
cBA BAF|DFA d2e|fed cdB|A3 A2:|
d|cAA eAA|(f/g/a)f edc|dBB fBB|(f/g/a)f fed|
cAA eAA|fAA cea|fed cdB|A3 A2:|` },
  { id: "on1111", n: 1111, level: 3, rk: "jig", lo: 62, hi: 83, p: 2781, abc: `X:1111
T:Apples in Winter
R:jig
B:O'Neill's Music of Ireland (1903), no. 1111
M:6/8
L:1/8
Q:3/8=90
K:Em
(d/c/)|BEE dEE|BAG FEF|DED FDF|ABc ded|
BEE BAB|^def gfe|fdB AdF|FEE E2:|
B|efe edB|(e/f/g)e fdB|ded dAF|DFA ^def|
e=dB ^def|gba gfe|fdB AdF|FEE E2:|` },
  { id: "on1116", n: 1116, level: 3, rk: "slip jig", lo: 64, hi: 83, p: 2902, abc: `X:1116
T:Rocky Road to Dublin
R:slip jig
B:O'Neill's Music of Ireland (1903), no. 1116
Z:Michael Hogan
M:9/8
L:1/8
Q:3/8=100
K:A
|: efe d2B A2A | E2A A2A Bcd | efe d2B A2c | B2A G2A Bcd :|
e2a {b}a2f g2b | e2a {b}a2A Bcd | e2a {b}a2f g2e | d2B G2A Bcd |
e2a {b}a2f g2d | e2a {b}a2A Bcd | efg fga gfe | d2B G2A Bcd ||
ecA ecA A2a | ecA ecA Bcd | ecA ecA a2c | d2B G2A Bcd |
ecA ecA A2a | ecA ecA Bcd | efg fga gfe | d2B G2A Bcd ||` },
  { id: "on1118", n: 1118, level: 2, rk: "slip jig", lo: 62, hi: 81, p: 2773, abc: `X:1118
T:The Swaggering Jig
R:slip jig
B:O'Neill's Music of Ireland (1903), no. 1118
Z:Michael Hogan
M:9/8
L:1/8
Q:3/8=100
K:G
d | BGG AGE DGG | BAG GFG Azd | BGG AGE DGG | cBA BGE D2 :|
c | "~".B(dc) dgf dBG | Bdd dBG Azc | Bdd dge dBG | cBA BGE Dzc|
"~".B(dc) dgf dBG | Bdd dBG Azf | {a}gfe dBd cBA |cBA BGE D2 ||` },
  { id: "on1134", n: 1134, level: 2, rk: "slip jig", lo: 62, hi: 83, p: 2773, abc: `X:1134
T:The Boys of Ballysadare
R:slip jig
B:O'Neill's Music of Ireland (1903), no. 1134
Z:Michael Hogan
M:9/8
L:1/8
Q:3/8=100
K:G
D2G {A}G2A B2d | ege d2e g3 | D2G {A}G2A d2B | ABA B2G E2G |
D2G {A}G2A B2d | ege d2e g2a | b2a g2e d2B | ABA B2G E2G ||
d2d {e}d2c d2B | d2d e2f g3 | B2d {e}d2B d2B | A2G B2G (E2D) |
d2d {e}d2B d2B | d2d e2f g2a | b2a g2e d2B | ABA B2G E2G ||` },
  { id: "on1137", n: 1137, level: 3, rk: "slip jig", lo: 64, hi: 81, p: 2910, abc: `X:1137
T:The Irish Girl
R:slip jig
B:O'Neill's Music of Ireland (1903), no. 1137
Z:Stephen Foy
M:9/8
L:1/8
Q:3/8=100
K:A
c2 A AEA AEA | cBc Ace dcB | Tc2 A AEA AEA | BAB dge dBG :|
cde efd e2 d | cde efd ged | cde efd efg | agf {a}gfe dcB |
cde efd e2 d | cde egd ged | cde efd efg | agf {a}gfe ded ||` },
  { id: "on1157", n: 1157, level: 3, rk: "slip jig", lo: 66, hi: 83, p: 2902, abc: `X:1157
T:Riding a Mile
R:slip jig
B:O'Neill's Music of Ireland (1903), no. 1157
Z:Stephen Foy
M:9/8
L:1/8
Q:3/8=100
K:A
efg a2 a gfe | a2 c c2 d e3 | efg aba gfe |1 f2 B B2 c d2 :|2 fga baf a2 f ||
|: ecA (ABA) (ABA) | cBA A2 A agf | ecA ABA ABA |1 F2 B c2 d e2 f :|2 fga bag a2 z ||` },
  { id: "on1174", n: 1174, level: 2, rk: "slip jig", lo: 62, hi: 79, p: 2781, abc: `X:1174
T:A Fig for a Kiss
R:slip jig
B:O'Neill's Music of Ireland (1903), no. 1174
Z:Stephen Foy
M:9/8
L:1/8
Q:3/8=100
K:Em
G2 B E2 B BAG | F2 A D2 A AGF | G2 B E2 B BAG | (B/c/d).B AGF E2 :|
g2 e g2 e edB | f2 d ded fed | g2 e g2 e edB | dBG GBd e2 f |
g2 e g2 e edB | f2 d ded fed | g2 e f2 ^d e=dB | BdB AGF E3 ||` },
  { id: "on1184", n: 1184, level: 2, rk: "reel", lo: 62, hi: 83, p: 2773, abc: `X:1184
T:The Peeler's Jacket
R:reel
B:O'Neill's Music of Ireland (1903), no. 1184
Z:Trish O'Neil
M:C|
L:1/8
Q:1/4=150
K:G
G2(BG) DGBG|FGABc2(Bc)|(dg)(gfd2)(eg)|(f<d)cA (B<G)AF|
G2(BG) DGBG|FGABc2(Bc)|dggfd2(eg)|(f<d)cA (B<G) "end"Gz||
gagfd2(ef)|gfga bgaf|gagfd2(eg)|(f<d)cA BGGz|
gagfd2(ef)|gfga bgaf|gbag fdeg|(f<d)cA (B<G)AF||` },
  { id: "on1185", n: 1185, level: 3, rk: "reel", lo: 62, hi: 81, p: 3030, abc: `X:1185
T:The Silver Tip
R:reel
B:O'Neill's Music of Ireland (1903), no. 1185
Z:Trish O'Neil
M:C|
L:1/8
Q:1/4=150
K:D
DEFG ABAF|(3GFE cE dEcE|DEFG ABAF|GEcE (TED) Dz:|
d2(fd) efge|(3fga (fd) ecAG|FAAB cBcG|EFG(E TFD) Dz|
d2(fd) efge|(3fga (fd) ecAF|GBGB FAFA|EFG(E TFD) Dz|]` },
  { id: "on1186", n: 1186, level: 3, rk: "reel", lo: 62, hi: 81, p: 3038, abc: `X:1186
T:The Bank of Ireland
R:reel
B:O'Neill's Music of Ireland (1903), no. 1186
Z:Trish O'Neil
M:C|
L:1/8
Q:1/4=150
K:D
(ed) \\
| cAAB {d}cABG | (EG)DG  (EG)DB | {d}cAAB T(cA)(BG) |1 Addc defd :|2 Addc d2 |
| (de) \\
| f2fde2ec | dfed cAAg | Tf2fee2{f}ed | eaag ed dz |
| fgaf efge | dfed T(cA)(AG) | (Ad){e}dc (de)fg | (af)ge (df)ed |]` },
  { id: "on1188", n: 1188, level: 3, rk: "reel", lo: 62, hi: 83, p: 2773, abc: `X:1188
T:All Hands Around
R:reel
B:O'Neill's Music of Ireland (1903), no. 1188
Z:Trish O'Neil
M:C|
L:1/8
Q:1/4=150
K:G
G2Bed2Bd|gdBd cAFA|G2Bed2Be|dcAB GDEF|
G2Bed2Bd|gdBd cAFA|GBAc (3Bcd eg|fdcAG3z||
bagb a2(fa)|gfeg (fd)d2|bagba2(fa)|gfefd2ga|
bagba2fa|gfeg fdBA|GBAc (3Bcd eg|fdcAG3z||` },
  { id: "on1191", n: 1191, level: 3, rk: "reel", lo: 64, hi: 81, p: 3030, abc: `X:1191
T:The Morning Star
R:reel
B:O'Neill's Music of Ireland (1903), no. 1191
Z:Trish O'Neil
M:C|
L:1/8
Q:1/4=150
K:G
(GA) \\
| B2 T(BA) BGEF | GABd efed | B2 T(BA) BGEG | FGAF "end"G2 :|
(GA) \\
| Bdef g2(eg) | Tf2(df) edBA | Bdef g2(fg) | agfg e2z2 |
| Bdef g2(eg) | Tf2(df) edBA | Bdd^c d2(ef) | geaf {a}gfed |]` },
  { id: "on1199", n: 1199, level: 3, rk: "reel", lo: 62, hi: 83, p: 2774, abc: `X:1199
T:The Bucks of Oranmore
R:reel
B:O'Neill's Music of Ireland (1903), no. 1199
Z:Trish O'Neil
M:C|
L:1/8
Q:1/4=150
K:D
 (dB)|A2FAA2dB| (3ABA FA BEEz| A2FAA2Bd| (3efg (fd) ecdB|
A2FAA2dB| (3ABA FA BEEF| DEFG AFAB| defd ecdB||
AD (3FEDA2dB| ADFA BEEz| AD (3FEDA2Bd| (3efg fd ecdB|
AD (3FEDA2dB| AD (3FED BEEz| DEFG AFAB| defd efge||
(3aba fd eddf| (3aba fd eBBz| (3aba fd eddf| (3efg fd eBBz|
(3aba fd eddf| (3aba fd eBBz| (3aba fd eddf| (3gfe fd eBBd||
(3fgf df (3efe de| (3fgf df eBBz| (3fgf df (3efe df| (3efg fd eBBd|
(3fgf df (3efe de| (3fgf df eBBz| f(a{b}a)f bfaf| (3efg fd ecdB||` },
  { id: "on1201", n: 1201, level: 2, rk: "reel", lo: 62, hi: 83, p: 2773, abc: `X:1201
T:The Mourne Mountains
R:reel
B:O'Neill's Music of Ireland (1903), no. 1201
Z:Trish O'Neil
M:C|
L:1/8
Q:1/4=150
K:G
BGGAG2(ED)|EAABA2(GE)|DEGA BABd|(3efg (dB) cBAG|
BGGAG2(ED)|EAABA2(GE)|DEGA BABd|(3efg (dc) BGG2||
dggag2(ed)|eaaba2(ge)|dega bagf|(3efg (3dcB cBAc|
dggag2(ed)|eaaba2(ge)|dega bagf|(3gfe dc BGG2||` },
  { id: "on1205", n: 1205, level: 3, rk: "reel", lo: 62, hi: 83, p: 2774, abc: `X:1205
T:The Green Mountain
R:reel
B:O'Neill's Music of Ireland (1903), no. 1205
Z:Trish O'Neil
M:C|
L:1/8
Q:1/4=150
K:D
(dB)| AFAB AFEF| D(F {G}(3FDF) ABde| fB{c}BA Bcde| fdgf efdB|
AFAB AFEF| D(F{G}(3FEF) ABde| f(B{c}BA) BcdB| AFEFD2||
(eg)| fgab afde| fdad fddf| efga beef| (3gfe) (be) gfeg|
fgaf bfaf| defd efde| f(B{c}BA) BcdB| AFEFD2||` },
  { id: "on1206", n: 1206, level: 3, rk: "reel", lo: 65, hi: 83, p: 2805, abc: `X:1206
T:The Flogging Reel
R:reel
B:O'Neill's Music of Ireland (1903), no. 1206
Z:Trish O'Neil
M:C|
L:1/8
Q:1/4=150
K:G
(dc) \\
|: B>(G{A}(3GFG) BGdG | B>(G{A}(3GFG) Bdgd | B>(G{A}(3GFG) BdcB | AGFG ABcB :|
|: T(gfg)d BGBd | {a}gfge fgaf | T(gfg)d BcdB | AGFG ABcA |
T(gfg)e BGBd | T(gfg)e fgaf | bgaf gedB | AGFG ABcA :|
| Bdg(d (3Bcd) (gd) | Bdgd BGGB | Ac=fd ((3ABc) (fc) | Ac=fc A=FFc |
| Bdg(d (3Bcd) (gd) | Bdef {a}gfga | bgaf gedB | AGFG ABcA |]` },
  { id: "on1218", n: 1218, level: 3, rk: "reel", lo: 62, hi: 83, p: 3061, abc: `X:1218
T:The Star of Munster
R:reel
B:O'Neill's Music of Ireland (1903), no. 1218
Z:Trish O'Neil
M:C|
L:1/8
Q:1/4=150
K:C
ed|c2(Ac)B2(GB)|AGE^F GED=F|EAAB cBcd|eaa^f g=fed|
~c2(Ac)~B2(GB)|AGE^F GED=F|EAAB cded|cAB^GA2z2||
(ea)ab ageg|agbg age^f|{a}g^fga gfef|gea^f g=fed|
(ea)ab ageg|agbg age^f|~g2ge~a2ag|b2ba gfed||` },
  { id: "on1224", n: 1224, level: 3, rk: "reel", lo: 62, hi: 81, p: 3030, abc: `X:1224
T:Toss the Feathers
R:reel
B:O'Neill's Music of Ireland (1903), no. 1224
Z:Trish O'Neil
M:C|
L:1/8
Q:1/4=150
K:D
D2(AD E)DA>D | D2(AG EG)G>E | D2(AD ED)EG |1 A(d{e}dB) {d}cAGE :|2 AcGE "End"ADD2 ||
Ad2dd2(cd) | edcd edcd | edad fdad | edc.e edce |
ea2^g e=g2e | dfed {d}cAGE | D2(ED) EAAB | cded {d}cAG"D.C."E |]` },
  { id: "on1229", n: 1229, level: 2, rk: "reel", lo: 62, hi: 83, p: 2773, abc: `X:1229
T:The Ewe Reel
R:reel
B:O'Neill's Music of Ireland (1903), no. 1229
Z:Trish O'Neil
M:C|
L:1/8
Q:1/4=150
K:G
DG{A}GF DG{A}GF | F2(AF) cFAF | DG{A}GF DGGg |1 fdcA BGAF :|2 fdcA BGG2 ||
g2bg dgbg | f2af dfaf | g2bg dgbg | agfag2(ga) |
bgaf gdde | fefd cAGF | dggf (3gab ag | fdcA BGAF |]` },
  { id: "on1230", n: 1230, level: 3, rk: "reel", lo: 62, hi: 83, p: 2783, abc: `X:1230
T:The Templehouse
R:reel
B:O'Neill's Music of Ireland (1903), no. 1230
Z:Trish O'Neil
M:C|
L:1/8
Q:1/4=150
K:G
EFGE BE (3GFE | D2(3FED A>D (3FED | EFGA BAB^c | dBAc TBEE2 :|
g2efg2eg | f^dde fddf | gfef gfeg | fgaf bgef |
gfef gfeg | f^dde fddf | efge afge | dBAc TBEE2 |]` },
  { id: "on1232", n: 1232, level: 3, rk: "reel", lo: 66, hi: 83, p: 2773, abc: `X:1232
T:The Day We Paid the Rent
R:reel
B:O'Neill's Music of Ireland (1903), no. 1232
Z:Trish O'Neil
M:C|
L:1/8
Q:1/4=150
K:G
ge \\
| dGBG dGBe | dGBG FGAe | dGBG dGBd |1 efga bage :|2 efga bgg2 |
|| bagf gdBd | egdB BAA2 | bagf gdBd | egeag2ga |
| bagf gdBd | egdB BAAc | BGdG eGdG | egfag2 ||` },
  { id: "on1240", n: 1240, level: 2, rk: "reel", lo: 62, hi: 81, p: 2773, abc: `X:1240
T:The Green Fields of America
R:reel
B:O'Neill's Music of Ireland (1903), no. 1240
Z:Trish O'Neil
M:C|
L:1/8
Q:1/4=150
K:G
c2(ec)B2(dB)|AGAB AGEF|GAGE DEGB|AGAB AGEG|
c2(ec)B2(dB)|AGAB AGEF|GAGE DEGA|BGAFG2z2||
GABcd2ef|gage dBGB|c2(ec)B2(dB)|AGAB AGE2|
gfgd efge|dcBG AGEF|GAGE DEGA|BGAFG2z2||` },
  { id: "on1241", n: 1241, level: 3, rk: "reel", lo: 62, hi: 83, p: 3030, abc: `X:1241
T:The Boyne Hunt
R:reel
B:O'Neill's Music of Ireland (1903), no. 1241
Z:Trish O'Neil
M:C|
L:1/8
Q:1/4=150
K:D
~(BA)FA DAFA|DAFA|BEEB|~(BA)FA DAFA|ABde fddB|
~(BA)FA DAFA|DAFA|BEEB|~(BA)FA DAFA|ABde fddg||
f>a{b}(3a^ga bgaf|dfaf gfeg|f>a{b}(3a^ga bgaf|ABde fd (3dcd|
f>a{b}(3a^ga bgaf|dfaf gfeg|fgef dedB|ABde fddg||
fdad bdad|fdad ceeg|fdad bdad|ABde fddg|
fdad bdad|fdad ceeg|fgef dedB|ABde fddB||` },
  { id: "on1243", n: 1243, level: 3, rk: "reel", lo: 62, hi: 83, p: 2780, abc: `X:1243
T:The Mountain Lark
R:reel
B:O'Neill's Music of Ireland (1903), no. 1243
Z:Trish O'Neil
M:C|
L:1/8
Q:1/4=150
K:Em
D2(BA) Bdef|deBd AFDF|E2(BA) Bdef|dBAF BEEz|
D2(BA) Bdef|deBd AFDF|E2(BA) Bdef|gefd (Be) ez||
eB-~B2efge|fdad bdad|eB-~B2efge|fe^dfe2(ef)|
eBBB efge|fdad bdad|gafg egfe|dBAF (BE)Ez||` },
  { id: "on1245", n: 1245, level: 3, rk: "reel", lo: 67, hi: 84, p: 2781, abc: `X:1245
T:Peggy on the Settle
R:reel
B:O'Neill's Music of Ireland (1903), no. 1245
Z:Trish O'Neil
M:C|
L:1/8
Q:1/4=150
K:G
egfd eA (3.A.A.A | (ed)Bd eA (3.A.A.A | (eg)fd eA (3.A.A.A | (BG)dc BG"end "Bd :|
e^defg2(ag) | e^def g=dBd | e^defg2(ga) | bgaf gdBd |
e^defg2(ag) | e^def g=dBd | gdBdg2(ga) | bc'ba gf"D.C. "e^d |]` },
  { id: "on1262", n: 1262, level: 3, rk: "reel", lo: 68, hi: 83, p: 2846, abc: `X:1262
T:The Green Linnet
R:reel
B:O'Neill's Music of Ireland (1903), no. 1262
Z:Trish O'Neil
M:C|
L:1/8
Q:1/4=150
K:A
A2T(ae) cBAc|BAGB gdBG|A2T(ae) cBAc|BGdB TcAAB:|` },
  { id: "on1264", n: 1264, level: 3, rk: "reel", lo: 62, hi: 83, p: 2782, abc: `X:1264
T:The Ships Are Sailing
R:reel
B:O'Neill's Music of Ireland (1903), no. 1264
Z:Trish O'Neil
M:C|
L:1/8
Q:1/4=150
K:Em
Beed B^cdB | AD (3FED AD (3FED | E^DEF GFGA |1 Beef gfed :|2 Bee^de2 ||
(ef) | gfga bgeg | fefg afdf | gfga bgeg | fe^dfe2(ef) |
gfga bgeg | fefg afdf | g2~(ge)f2~(fd) | e^def "D.C."gfed |]` },
  { id: "on1267", n: 1267, level: 2, rk: "reel", lo: 62, hi: 81, p: 2775, abc: `X:1267
T:The Merry Sisters
R:reel
B:O'Neill's Music of Ireland (1903), no. 1267
Z:Trish O'Neil
M:C|
L:1/8
Q:1/4=150
K:Em
B>E (3FED BdcA | B>E (3FED dAFA | B>E (3FED BdcA |1 d>D (3DDD ADFA :|2 dAFB E2z2 ||
Bee^cd2cA | Bee^c dAFA | Bee^cd2cA | BAB^c dAFA |
Bee^cd2cA | Bee^c defg | (3agf (3gfe fdec | BABc dAFA ||
BdcA BFAF | B>E (3.E.E.E BEFA | BdcA BFAF | d>D (3.D.D.D ADFA |
BdcA BFAF | B>E (3.E.E.E BEFA | DFA^cd2eg | fde^c dAFA |]` },
  { id: "on1268", n: 1268, level: 3, rk: "reel", lo: 67, hi: 83, p: 3038, abc: `X:1268
T:The Swallow's Tail
R:reel
B:O'Neill's Music of Ireland (1903), no. 1268
Z:Trish O'Neil
M:C|
L:1/8
Q:1/4=150
K:A
(gf)|eA (3cBA eAcA|cdef gedB|=G2BG dGBG|cdef=g2fg|
eA (3cBA eAcA|cdef =g2fg|af=ge dB^GB|AcBGA2||
(cd)|eaag abag|e^def gedB|=G2BG dGBG|cdef =g2f^g|
eaag abag|e^def=g2f^g|af=ge dB^GB|AcBGA2||` },
  { id: "on1273", n: 1273, level: 3, rk: "reel", lo: 62, hi: 81, p: 3030, abc: `X:1273
T:The Sligo Chorus
R:reel
B:O'Neill's Music of Ireland (1903), no. 1273
Z:Trish O'Neil
M:C|
L:1/8
Q:1/4=150
K:D
(AG)|(3FED (AD) BDAD|(3FED (3ABcd2(AG)|(3FED AD BG (3GFG|BdcA GBAG|
(3FED (AD) BDAD|(3FED (3ABcd2(3ABc|dfec dc (3ABc|dcAFG2||
(AB)|cABG (3ABA AB|cAB^GA2(ed)|cBcd eaaf|gedc dfed|
cABG (3ABA AB|cAB^GA2(3ABc|dfec dc (3ABc|dcAFG2||` },
  { id: "on1274", n: 1274, level: 3, rk: "reel", lo: 62, hi: 83, p: 2805, abc: `X:1274
T:The Dogs Among the Bushes
R:reel
B:O'Neill's Music of Ireland (1903), no. 1274
Z:Trish O'Neil
M:C|
L:1/8
Q:1/4=150
K:G
B>(G {A}(3GFG) D>(G {A}(3GFG)| BGGB cedc|B>(G {A}(3GFG) D>(G {A}(3GFG)|A
FFA =fdcA|
B>(G {A}(3GFG) D>(G {A}(3GFG)|BGGB cedc|BABc de=fd|cAFA =fdcA||
dggf gagf|dgga bgaf|de=fe fgfe|d=feg fdcA|
Bggf gagf|dggf bgag|bgag bgag|d=feg fdcA||` },
  { id: "on1277", n: 1277, level: 2, rk: "reel", lo: 62, hi: 83, p: 2774, abc: `X:1277
T:Bonnie Kate
R:reel
B:O'Neill's Music of Ireland (1903), no. 1277
Z:Trish O'Neil
M:C|
L:1/8
Q:1/4=150
K:D
(dB)|AFdB ABAF|DFAFE2(EB)|AFAd BGBd|cABc dedB|
|AFdB ABAF|DFAFE2(EB)|AFAd BGBd|cABc defg||
a2fd (fa)fd|(3fga fde2(ef)|{a}gfef gbag|fedc defg|
a2fd (3fga fd|(3fga fde2((ef)|{a}gfef gbag|fedc d2|]` },
  { id: "on1278", n: 1278, level: 3, rk: "reel", lo: 64, hi: 83, p: 2773, abc: `X:1278
T:London Lasses
R:reel
B:O'Neill's Music of Ireland (1903), no. 1278
Z:Trish O'Neil
M:C|
L:1/8
Q:1/4=150
K:G
G2(BG) dGBG|eaag efg2|G2(BG) dGBG|egdB AGEF|
G2(BG) dGBG|eaag efga|bgag egfa|gedB AGEF||
gfgde2(dB)|dGBG Bdd2|gabge3d3|egdB AGEF|
gfgde2(dB)|d(B {c}(3BAB) dega|bgag egfa|gedB AGEF|]` },
  { id: "on1281", n: 1281, level: 3, rk: "reel", lo: 64, hi: 81, p: 3061, abc: `X:1281
T:Follow Me Down to Carlow
R:reel
B:O'Neill's Music of Ireland (1903), no. 1281
Z:Trish O'Neil
M:C|
L:1/8
Q:1/4=150
K:Am
AGAG E^FGB|A^GAB cded|cBcA E^FGa|1gedB cAdc:|2gedB cAA2||
ec (3ccc ecgc|BGdG BGdG|ec((3ccc eg^fa|gedB cAA2|
agea gedB|cBcG E^FGB|A^GAB ceaf|gedB cAA2|]` },
  { id: "on1284", n: 1284, level: 2, rk: "reel", lo: 66, hi: 85, p: 2774, abc: `X:1284
T:The Musical Priest
R:reel
B:O'Neill's Music of Ireland (1903), no. 1284
Z:Trish O'Neil
M:C|
L:1/8
Q:1/4=150
K:Bm
BA|FBBA BABd|cBAf ecBA|FB{c}BAB2(Bd)|cBAc "H"B2:|
(Bc)|d2(dc) dfed|cAeg faec|d2(dc) defb|afecB2(Bc)|
dcdc dfed|cAeg faec|dcBc defb|afecB2||
(Bc|d>B (3BBB bafb|afec ABce|d>B (3BBB bafb|afecB2(de)|
fbbc' bafb|afec ABce|dcBc defb|afec dB"D.C."cA|]` },
  { id: "on1289", n: 1289, level: 3, rk: "reel", lo: 64, hi: 83, p: 2902, abc: `X:1289
T:McFadden's Handsome Daughter
R:reel
B:O'Neill's Music of Ireland (1903), no. 1289
Z:Trish O'Neil
M:C|
L:1/8
Q:1/4=150
K:A
E3F ABcA|BABa ecAF|(3EEE (FG)A2(af)|ecBd cAAF|
E3F ABcA|BABa ecAF|(3EEE (FG)A2(af)|ecBd c"H"AAg||
aece fgaf|edcA B~F-F2|aece fgaf|edcB Ac (3efg|
aece aecA|TB2(cA) BAFA|agfe fgaf|edcB ABcd||
ce2f ecac|ecac f~B-B2|ce2f ecac|EFAe (cAA2)|
ceef ecac|ecac f~B-B2|cefg abaf|ec (efg (ae)"D.C."cA|]` },
  { id: "on1292", n: 1292, level: 2, rk: "reel", lo: 62, hi: 81, p: 2774, abc: `X:1292
T:The Drogheda Lasses
R:reel
B:O'Neill's Music of Ireland (1903), no. 1292
Z:Trish O'Neil
M:C|
L:1/8
Q:1/4=150
K:D
dD (3DDD (AB)AF|Dgfe dcBc|dD (3DDD (AB)AF|BEEF GABc|
dD (3DDD (AB)AF|Dgfe dcBc|dBcA BGAF|BEEF GABc||
d2(fd)fafd|Adfa gece|d2(fd)fafd|BEEFGABc|
d2(fd) fafd|Adfa gece|f2(ec) dABG|FABc dcBc|]` },
  { id: "on1295", n: 1295, level: 3, rk: "reel", lo: 67, hi: 83, p: 3029, abc: `X:1295
T:The Blackberry Blossom
R:reel
B:O'Neill's Music of Ireland (1903), no. 1295
Z:Trish O'Neil
M:C|
L:1/8
Q:1/4=150
K:G
(ge)|dBAc BAGA|BcBAB2(ge)|dBAc BGGB|Aaa^ga2:|
(ef)|gfge gbag|gfga beef|gfga bagf|eaa^ga2(ef)|
gfge gbaf|gfga beeg1(3bag af gfed|eaa^ga2|]` },
  { id: "on1297", n: 1297, level: 3, rk: "reel", lo: 69, hi: 81, p: 3030, abc: `X:1297
T:The Flowing Bowl
R:reel
B:O'Neill's Music of Ireland (1903), no. 1297
Z:Trish O'Neil
M:C|
L:1/8
Q:1/4=150
K:D
(ef)|gfed cAAB|cAdB cAAf|gfed cdeg|faged2:|
A2|d2(fd) adfd|d2(fa) gece|d2(fd) adfd|faged2A2|
d2(fd) adfd|d2(fa) gece|Tf4Tg4|faged2|]` },
  { id: "on1300", n: 1300, level: 2, rk: "reel", lo: 67, hi: 83, p: 2773, abc: `X:1300
T:The Woman of the House
R:reel
B:O'Neill's Music of Ireland (1903), no. 1300
Z:Trish O'Neil
M:C|
L:1/8
Q:1/4=150
K:G
(G>B {c}(3BAB c)BAB|GBdge2d2\\
|1(G>B {c}(3BAB c)BAB|e>A (3AGA e>A (3AGA:|2G2(BG)A2(GA)|BcAc BGG2||
f2fde2ed|gfge dBGB|f2fde2ed|e>A (3AAA e>A (3AAA|
f2fde2ed|gfge dBGB|G2(BG)A2(GA)|BcAc BGG2||
f2fde2ed|gfge dBGB|f2fde2ed|e>A (3AAA e>A (3AAA|
gaba gfed|efge dBAB|G2(BG)A2(GA)|BcAc BGG2|]` },
  { id: "on1305", n: 1305, level: 2, rk: "reel", lo: 62, hi: 81, p: 2774, abc: `X:1305
T:The Pure Drop
R:reel
B:O'Neill's Music of Ireland (1903), no. 1305
Z:Trish O'Neil
M:C|
L:1/8
Q:1/4=150
K:D
d>D (3.D.D.D (FD)FA | d2(ef) gfge | d>D (3.D.D.D (FD)FA | BEEF GABc |
d>D (3.D.D.D (FD)FA | d2efg2fg | afge fdec | BEEF GABc ||
d2(fd) adfd | d2efg2fe | d2(fd) adfd | BEEF GABc |
d2(fd) adfd | d2efg2fg | afge fdec | BEEF GABc |]` },
  { id: "on1308", n: 1308, level: 3, rk: "reel", lo: 62, hi: 81, p: 2807, abc: `X:1308
T:Kiss the Maid Behind the Barrel
R:reel
B:O'Neill's Music of Ireland (1903), no. 1308
Z:Trish O'Neil
M:C|
L:1/8
Q:1/4=150
K:G
DGGc AGGF|DGGB cAGF|DGGc AGA^c|de=fd cA^FA:|
dg {a}(3gfg ag {a}(3gfg|dg {a}(3gfg agfe|d=f {g}(3fef af {g}(3fef|de=fd cA^FA|
dg {a}(3gfg ag {a}(3gfg|dg {a}(3gfg agfg|afge =fdec|d=feg fdcA||
G2(dG) BGdG|G2(dG) cAFA|G2(dG) AGA^c|de=fd cAFA|
G2(dG) BGdG|G2(dG) cAFA|G2GBA2A^c|de=fd cA^FA||
B2BGA2Ac|BABc dedc|B2BGA2A^c|de=fd cA^FA :|` },
  { id: "on1310", n: 1310, level: 2, rk: "reel", lo: 62, hi: 81, p: 2773, abc: `X:1310
T:The Fermoy Lasses
R:reel
B:O'Neill's Music of Ireland (1903), no. 1310
Z:Trish O'Neil
M:C|
L:1/8
Q:1/4=150
K:G
BA"Segno"|G(E {F}(3EDE) B>(E {F}(3EDE)|G>(E {F}(3EDE) BcBA\\
|1G>(E {F}(3EDE) B>(E {F}(3EDE)|AFDF AcBA:|2G2"W"(GF) GGdG|AFDF"D.S."A2||
(BA)|(3GAG BG dGBG|(3GAG Bd efg2|(3GAG BG dGBG|AFDF AcBA|
(3GAG BG dGBG|(3GAG Bd efg2|af{a}ge dedB|AFDF Ac"D.S."BA|]` },
  { id: "on1312", n: 1312, level: 3, rk: "reel", lo: 62, hi: 83, p: 3030, abc: `X:1312
T:Miss Monaghan
R:reel
B:O'Neill's Music of Ireland (1903), no. 1312
Z:Trish O'Neil
M:C|
L:1/8
Q:1/4=150
K:D
D2(3FED FAA2|(BcBA FAAB|dedB ABde|fede Tf2e2|
D2(3FED FAA2|(BcBA FAAB|dedB ABdB|AFDFTE2D2||
(fa)ab (af)df|gefd edBc|dedB ABde|fedeTf2e2|
(fa)ab (af)df|gefd edBc|dedB ABdB|AFDFTE2D2||
defg abaf|gfed cAAG|FAdB cdeg|fdgfe2AA|
(de)fg abaf|gfed cAAc|defd ecdB|AFGED2z2|]` },
  { id: "on1321", n: 1321, level: 3, rk: "reel", lo: 64, hi: 83, p: 2902, abc: `X:1321
T:Lough Allen
R:reel
B:O'Neill's Music of Ireland (1903), no. 1321
Z:Trish O'Neil
M:C|
L:1/8
Q:1/4=150
K:A
(cd)|eAcA BGEd|eAcAd2(cd)|eAcA BGEG|AcBGA2(cd)|
eAcA BGEd|eAcAd2(cB)|AcBd cefa|gedBA2
|:(BA)|Beef gedB|agaba2(ba)|gaba gedB|AcBGA2 :|` },
  { id: "on1326", n: 1326, level: 2, rk: "reel", lo: 67, hi: 81, p: 2774, abc: `X:1326
T:The Black Haired Lass
R:reel
B:O'Neill's Music of Ireland (1903), no. 1326
Z:Trish O'Neil
M:C|
L:1/8
Q:1/4=150
K:Amix
(ed)|c2AB cdec|d2gd BGGB|{d}cBAB cdec|dfec Aced|
{d}cBAB cdec|d2gd BGGB|{d}cBAB cdec|dfecA2||
(AB)|cdef{a}g2(eg)|fddf {a}gfed|cdef {a}gfeg|fdecA2(AB)|
cdef {a}gfeg|fddfe2(fg)|af{a}ge fdec|dfecA2|]` },
  { id: "on1328", n: 1328, level: 3, rk: "reel", lo: 62, hi: 83, p: 3765, abc: `X:1328
T:The Dublin Lasses
R:reel
B:O'Neill's Music of Ireland (1903), no. 1328
Z:Trish O'Neil
M:C|
L:1/8
Q:1/4=150
K:Dm
cF-~F2cFdF|cFFG AGG2|cF-~F2cFdF|GBAG FD-D2|
cF-~F2cFdF|cFFG AGG2|FGAc (3ded cA|GBAG FDD2||
fefg T(ag)ag|fefg adde|fefga2ag|fdec Add2|
fefg T(ag)ag|fefg addf|afgef2ed|cAGB ADD2|]` },
  { id: "on1329", n: 1329, level: 2, rk: "reel", lo: 62, hi: 83, p: 2774, abc: `X:1329
T:The Miltown Maid
R:reel
B:O'Neill's Music of Ireland (1903), no. 1329
Z:Trish O'Neil
M:C|
L:1/8
Q:1/4=150
K:D
(dc)|BE-~E2Bdcd|(3BAF (DF) dAFA|BE-~E2Bcde|(3fed (3edc dAFA|
BE-~E2Bdcd|(3BAF (DF) dAFA|BABc dcde|(3fed ec dAFA||
Beecd2(dc)|Beed (~dA)FA|Beec dfag|fedc (~dA)FA|
Beecd2(dc)|Beec defg|afba gfeg|(3fga (ef) dfec|]` },
  { id: "on1338", n: 1338, level: 3, rk: "reel", lo: 67, hi: 83, p: 3031, abc: `X:1338
T:The Merry Harriers
R:reel
B:O'Neill's Music of Ireland (1903), no. 1338
Z:Trish O'Neil
M:C|
L:1/8
Q:1/4=150
K:G
e>A (3AAAg2(fg)|eAAc BGG2|e>A (3AAAg2(fg)|1afge dgfg:|2afg"H"ed2 (^cd)||
eaa^g ef=gf|eaa^g ed^cd|eaa^g efgb|1afged2^cd:|2afge dg"D.C."fg|]` },
  { id: "on1343", n: 1343, level: 3, rk: "reel", lo: 64, hi: 83, p: 2902, abc: `X:1343
T:The Mason's Apron
R:reel
B:O'Neill's Music of Ireland (1903), no. 1343
Z:Trish O'Neil
M:C|
L:1/8
Q:1/4=150
K:A
(ed)|c>A (3AAA ABAF|EFAc dcBA|d>B (3BBB BcBA|Bcde fefg|
a>A (3AAA ABAF|EFAc dcBA|Bcde fefa|(3AAA cBA2||
e2|cAeA fAeA|cAeA fedc|dBfB bBfB|defg afed|
(3cBA eA fAeA|EFAc dcBA|Bcde fefa|(3AAA cBA2|]` },
  { id: "on1344", n: 1344, level: 3, rk: "reel", lo: 62, hi: 81, p: 2773, abc: `X:1344
T:The Cashmere Shawl
R:reel
B:O'Neill's Music of Ireland (1903), no. 1344
Z:Trish O'Neil
M:C|
L:1/8
Q:1/4=150
K:C
(BG)|A2AB AGED|EGAB {d}c2(BG)|AcBG AGEa|gedB{d}c2:|
(cd)|ecgc eccg|ecged2(cd)|ecgc eccg|a^fged2(cd)|
ecgc eccg|ecged2(cd)|e^fg2eaa2|gedc{d}c2|]` },
  { id: "on1348", n: 1348, level: 3, rk: "reel", lo: 62, hi: 83, p: 2774, abc: `X:1348
T:Salamanca Reel
R:reel
B:O'Neill's Music of Ireland (1903), no. 1348
Z:Trish O'Neil
M:C|
L:1/8
Q:1/4=150
K:D
dB|A>D (3FED A>D (3FED|Adcd fdcd|B>E (3GFE B>E (3GFE|Beed cdeg|
fddg fdcA|Bdce dfag|fdec dBAG|FGEFD2||
(fg)|afdg bgeg|fdec dcBA|Bdce dfeg|fagba2fg|
abaf gfeg|fdec dfag|fdec dBAG|FGEFD2|]` },
  { id: "on1354", n: 1354, level: 3, rk: "reel", lo: 62, hi: 83, p: 2774, abc: `X:1354
T:The Strawberry Blossom
R:reel
B:O'Neill's Music of Ireland (1903), no. 1354
Z:Trish O'Neil
M:C|
L:1/8
Q:1/4=150
K:D
fddf edBc|d2efg2ag|fddf edBc|dBAFE2D2:|
faab afdf|afdfg2g2|faab afdf|gfedB2A2|
faab afdf|afdfg2g2|faa2faa2|gfedB2A2|]` },
  { id: "on1361", n: 1361, level: 3, rk: "reel", lo: 64, hi: 83, p: 2902, abc: `X:1361
T:The Money Musk
R:reel
B:O'Neill's Music of Ireland (1903), no. 1361
Z:Trish O'Neil
M:C|
L:1/8
Q:1/4=150
K:A
af|e>c (3ccc fcdf|edcA BEGB|edcB Aaga|befg agaf|
edca fcdf|edcA BEGB|edcB Aaga|fdBd cAA||
e|agae cefg|agba gaef|agae cdeg|fdBd cAAe|
(ag)(gf) (fe)(ec)|dfec dcBA|GABd cefa|gbega2|]` },
  { id: "on1363", n: 1363, level: 3, rk: "reel", lo: 62, hi: 81, p: 3029, abc: `X:1363
T:Molly Put the Kettle On
R:reel
B:O'Neill's Music of Ireland (1903), no. 1363
Z:Trish O'Neil
M:C|
L:1/8
Q:1/4=150
K:Am
Bded cAAc|Bcdc BGG2|ceed cBAG|EDE^GA2A2|
Bded cAAc|Bcdc BGG2|cBcAB2AG|EDE^GA2A2||
Bde^fg2fg|aged cAA2|Bde^fg2fg|age^ga2a2|
Bde^fg2fg|aged cAA2|ceed cAAG|EDE^GA2A2|]` },
  { id: "on1370", n: 1370, level: 3, rk: "reel", lo: 62, hi: 81, p: 2902, abc: `X:1370
T:The Ivy Leaf
R:reel
B:O'Neill's Music of Ireland (1903), no. 1370
Z:Trish O'Neil
M:C|
L:1/8
Q:1/4=150
K:A
A2(ed) cdec|A2(ec) dBGB|A2ed cdef|1{a}gfge dBGB:|2gedB cA"H"A2||
(ea)ag (ed)ef|{a}gfge dBGB|eaag edez|EEE(D E)(FG)B|
(ea)ag (ed)ef|{a}gfge dBGB|(Ac)(Bd) (ce)(df)|(eg)(fa) ged"D.C."B|]` },
  { id: "on1374", n: 1374, level: 2, rk: "reel", lo: 64, hi: 81, p: 2774, abc: `X:1374
T:The Dublin Reel
R:reel
B:O'Neill's Music of Ireland (1903), no. 1374
Z:Trish O'Neil
M:C|
L:1/8
Q:1/4=150
K:D
dF {G}(3FEF dfec|dF {G}(3FEF AFEF|dF {G}(3FEF dfed|1cABG AFEA:|2cABc ABcd||
e2(3cBA EAcf|(3efe dA BF {G}(3FEF|e2(3cBA EAcA|(3Bcd cA BG {G}(3FEF|
e2(3cBA ecfc|eAcA BF {G}(3FEF|d3c dfed|cABG AFEA|
d3c dAFA|dcdB AFEA|d2(dc) dfed|cABc AFEA|
 d3c dAFA|dcdB AFEA|{e}dcdfe2(ae)|fdBc dfec|]` },
  { id: "on1375", n: 1375, level: 3, rk: "reel", lo: 62, hi: 82, p: 1781, abc: `X:1375
T:The Sailor's Return
R:reel
B:O'Neill's Music of Ireland (1903), no. 1375
Z:Trish O'Neil
M:C|
L:1/8
Q:1/4=150
K:Gm
BAGF DGGB|AFcF dFcF|BAGF (3D=E^F GA|BABc dgga|
(3bag a^f gdd=e|fdcB AFF2|BAGF (3D=E^F GA|(Bd)cA (BG)G2||
Ggg^f gag=f|Fff=e fgfA|Ggg^f dgga| (3bag af dgga|
(3bag (3agf gdd=e|fdcB AFF2|BAGF (3D=E^F GA|(Bd)cA BGG2|]` },
  { id: "on1378", n: 1378, level: 3, rk: "reel", lo: 64, hi: 83, p: 2807, abc: `X:1378
T:The Mills Are Grinding
R:reel
B:O'Neill's Music of Ireland (1903), no. 1378
Z:Bob Safranek
M:C|
L:1/8
Q:1/4=150
K:G
GFGA B2 (Bc) | ded^c (dg) g2 | =FEFG A2 (Bc) |   dedc  (BG) G z |
GFGA B2 (Bc) | ded^c (dg)ga  | (bg)af (gd)de | (=fd)cA (BG) G z ||
gfga g2 (ga) | bgag fdde     | =fefg f2 (ce) |   dcBA  (BG) G z |
gfga g2 (ga) | bgag (fd)dg   | (bg)af (gd)de | (=fd)cA (BG) G z |]` },
  { id: "on1389", n: 1389, level: 3, rk: "reel", lo: 62, hi: 81, p: 2774, abc: `X:1389
T:The Flax in Bloom
R:reel
B:O'Neill's Music of Ireland (1903), no. 1389
Z:Bob Safranek
M:C|
L:1/8
Q:1/4=150
K:D
D2 ((3FED) FAAf | ((3gfe) ((3fed) edBd | ((3ABA) (FA) dfaf  | (ga)fd (ed)Bd  |
D2 ((3FED) FAAf | ((3gfe) ((3fed) edBd | (AB)AF      (AB)de | (fa)eg (fd) d2 ||
((3fgf) df ((3efe) ce | dcdB AGFG | DFAd FAdf | ((3gfe) ((3fed) edBd |
((3fgf) df ((3efe) ce | dcdB AGFA | DFAc defg | (ag)eg       (fd) d2 |]` },
  { id: "on1392", n: 1392, level: 3, rk: "reel", lo: 62, hi: 83, p: 2773, abc: `X:1392
T:The Sligo Lasses
R:reel
B:O'Neill's Music of Ireland (1903), no. 1392
Z:Bob Safranek
M:C|
L:1/8
Q:1/4=150
K:G
G2 (BG) DGBG|D2 ((3FED) dAFA| G2 BG DGef|1 ((3gfe) dc BGAF:|2 ((3gfe) dc BG G2||
g2  bg  dgbg| fgag      fdef| g2 bg dgbg|    dega    bg g2 |
dgbg    dgbg| fgag      fdef| gaba  gedc| ((3Bcd) AG FDEF  |]` },
  { id: "on1396", n: 1396, level: 2, rk: "reel", lo: 62, hi: 78, p: 3031, abc: `X:1396
T:The Four Courts
R:reel
B:O'Neill's Music of Ireland (1903), no. 1396
Z:Bob Safranek
M:C|
L:1/8
Q:1/4=150
K:D
dB   | ADFD  ADGB  | ADFD  G2 GB      | ADFD   ADGF       | ((3EFE) cA G2 FG |
       ADFD  ADGB  | ADFD  G2 FG      | A^GA=c BAB^c      |      dB=cA G2    ||
(AG) | F2 AF cFAG  | F2 cA G2 AG      | F2 AF  cFAc       |      dB=cA G2 AG |
       F2 AF cFAG  | F2 cA G2 ((3ABc) | dfdc   dc ((3ABc) |      dB=cA G2    ||
(dB) | A2 Ac B2 Bd | ABAF  G2 dB      | A2 Ac  B2 Bc      |      dB=cA G2 dB |
       AFAc  BGBd  | ABAF  G2 ((3ABc) | dfec   dc ((3ABc) |      dB=cA G2    |]` },
  { id: "on1401", n: 1401, level: 2, rk: "reel", lo: 62, hi: 81, p: 2774, abc: `X:1401
T:Julia Delaney
R:reel
B:O'Neill's Music of Ireland (1903), no. 1401
Z:Bob Safranek
M:C|
L:1/8
Q:1/4=150
K:D
dcAG ((3EFG) DE | G2 {B}AG (EG) G2 | dcAG ((3EFG) DG|1 Addc defe:|2 Addc d2 d2||
cdef g2 (fg)|       agef g2 (ed)|         cdef g2 (AG)           | Addc   dfed |
cdef g2 (fg)| ((3agf) ef g2 (fg)| ((3agf) ((3gfe) ((3fed) ((3edc)| d2 Tdc defe|]` },
  { id: "on1406", n: 1406, level: 3, rk: "reel", lo: 67, hi: 85, p: 2774, abc: `X:1406
T:The Pigeon on the Gate
R:reel
B:O'Neill's Music of Ireland (1903), no. 1406
Z:Bob Safranek
M:C|
L:1/8
Q:1/4=150
K:Amix
gf | e>A (3AAA egfg | e>A (3AAA e2 dB |1 G2 (BG) dGBG | GBdf g2 (fg) :|2\\
GBde g2 ga | bagb a2 ||
(ag) | eaag abag | eaab c'bag | eggf gage | dega bgag |
       eaag abag | eaab c'bag | edef gage | dBGB A2 |]` },
  { id: "on1417", n: 1417, level: 2, rk: "reel", lo: 67, hi: 83, p: 2773, abc: `X:1417
T:The Old Maids of Galway
R:reel
B:O'Neill's Music of Ireland (1903), no. 1417
Z:Bob Safranek
M:C|
L:1/8
Q:1/4=150
K:G
e>B ((3{c}BAB) e2 dB | A2 GA   dBgf | ((3efg) df e2 dB | A2 GA (BG) G2 :|
g2  (fg)       efde  | g2 (bg) eaaf | g2      fg efdB  | A2 GA  BG  G2 |
g2   fg        efde  | g2  bg  eaaa | bgaf       gedB  | A2 GA  BG  G2 |]` },
  { id: "on1418", n: 1418, level: 2, rk: "reel", lo: 62, hi: 84, p: 2773, abc: `X:1418
T:Miss McLeod's Reel
R:reel
B:O'Neill's Music of Ireland (1903), no. 1418
Z:Bob Safranek
M:C|
L:1/8
Q:1/4=150
K:G
BA | G2 BG DGBG | B2 BA BcBA  | G2 BG DGBG | A2 AG AcBA  |
     G2 BG DGBG | B2 BA B2 d2 | e3 f  edef | gedB  AcBA  ||
     G2 gf edeg | B2 BA BcBA  | G2 gf edeg | a2 ag ac'ba |
     g2 gf edeg | BcBA  B2 d2 | efed  cdef | gedB  A2    |]` },
  { id: "on1424", n: 1424, level: 3, rk: "reel", lo: 69, hi: 83, p: 3030, abc: `X:1424
T:Sleepy Maggie
R:reel
B:O'Neill's Music of Ireland (1903), no. 1424
Z:Bob Safranek
M:C|
L:1/8
Q:1/4=150
K:Edor
f2 (de) fBde | Tf2 (df) eAce | {g}f2 (de) fBde  | fgaf  eAce |
f2 (de) fBde | Tf2 (df) eAce | {g}f2 (de) fBde  | fgaf  eAce ||
fBdB    fBde | fBdB     eAce | fBdB       eBde  | f^gaf eAce |
fBdB    fBde | fBdB     eAce | dcBc       defg  | abaf  eAce ||
fBbB    fBde | fBbB     aAce | fBbB       aB^gB | fB^gB aAde :|` },
  { id: "on1431", n: 1431, level: 2, rk: "reel", lo: 62, hi: 83, p: 2774, abc: `X:1431
T:The Mooncoin Reel
R:reel
B:O'Neill's Music of Ireland (1903), no. 1431
Z:Bob Safranek
M:C|
L:1/8
Q:1/4=150
K:D
((3ABc) | d2 (AF) DFAc | dced cAAc | BAGF    GABc | dced cABc |
          d2 (AF) DFAc | dced cAGA | BAGF    GABc | dcec d2   ||
de      | fdad    fdad | fdad fddf | ecgc    ecgc | ecgc ecce |
          fdad    fdad | fdad fddf | g2 (gf) gbag | fdec d2   |]` },
  { id: "on1433", n: 1433, level: 2, rk: "reel", lo: 62, hi: 83, p: 2774, abc: `X:1433
T:Lord Gordon's Reel
R:reel
B:O'Neill's Music of Ireland (1903), no. 1433
Z:Bob Safranek
M:C|
L:1/8
Q:1/4=150
K:D
(dB) | AD ((3FED) AD ((3FED) | ADFD A2 (GF) | EFGA BE ((3{F}EDE) | defd B2 (AB)|
       defd       efdB       | AFDF A2 (Bc) | dBcA BGAF          | EFGA B2    ||
(de) | f>d ((3{e}dcd) fgag   | fddf a2 (gf) | efga beef          | degd B2 (AB)|
       defd       efdB       | AFDF A2 (Bc) | dBcA BGAF          | EFGA B2    |]` },
  { id: "on1451", n: 1451, level: 2, rk: "reel", lo: 62, hi: 83, p: 2774, abc: `X:1451
T:The Limerick Lasses
R:reel
B:O'Neill's Music of Ireland (1903), no. 1451
Z:Bob Safranek
M:C|
L:1/8
Q:1/4=150
K:D
dBAF D2 (EF) | GFGA BEEc | dBAF D2 (EF) | GBAG FDDc           |
dBAF D2 (EF) | GFGA BEEc | dBAF D2 (EF) | GBAG FABc           ||
dcde f2 (ed) | cdef gBBc | dfga b2 (ag) | faeg fddc           |
dcde fded    | cdef gfga | bBbB b2 (ag) | faeg fd "    Fine"d2||
AdBd AdBd    | AdBd ceec | AdBd AdBd    | efge fddB           |
AdBd AdBd    | Adfd ceef | gfec dcBA    | Bdce fd "D.C."d2    |]` },
  { id: "on1471", n: 1471, level: 3, rk: "reel", lo: 62, hi: 83, p: 2773, abc: `X:1471
T:After the Sun Goes Down
R:reel
B:O'Neill's Music of Ireland (1903), no. 1471
Z:Bob Safranek
M:C|
L:1/8
Q:1/4=150
K:G
G2 (BG) DGBG | egfa gedB | G2 (BG)         DGBG | AcBA G(E ~E2) |
G2 (BG) DGBG | egfa gedB | ((3efg) ((3fga) gedB | AcBA GE   E2  ||
gfeg    fedB | gfga bede | gfeg            fedB | AcBA G(E ~E2) |
gfeg    fedB | gfga beeg | bgaf            gedB | AcBA GE   E2  |]` },
  { id: "on1478", n: 1478, level: 3, rk: "reel", lo: 69, hi: 81, p: 2774, abc: `X:1478
T:Green Garters
R:reel
B:O'Neill's Music of Ireland (1903), no. 1478
Z:John B. Walsh
M:C|
L:1/8
Q:1/4=150
K:D
[| d2 (fd) Adfd | d2 (fa) gece | d2 (fd) Adfd | edcd efge |\\
|  d2 (fd) Adfd | d2 (fa) gece | d2 (fd) Adfa | gecd (ed) Hd2 |]
[| agfg afdf | a2 fd efge | agfg afdf | edcd efge |\\
|  agfg afdf | a2 fd efge | afge fdec | ABcd efg"_D.C."e |]` },
  { id: "on1479", n: 1479, level: 3, rk: "reel", lo: 62, hi: 83, p: 2775, abc: `X:1479
T:Jenny's Wedding
R:reel
B:O'Neill's Music of Ireland (1903), no. 1479
M:C|
L:1/8
Q:1/4=150
K:D
[| ((3.D.D.D)  FD  ADFD | Adde fded   | cAAB =c2 cd | ea{b}ag edcd ||
|  ((3.D.D.D)  FA  defd | cAAB cdeg   | fdec  d2 cA | BdAF EDFA |]
[| ((3.d.d.d) (fd) adfd | ecAB cdec   | ((3.d.d.d) (fd) adfd | cdeg (fd) d2 ||
|  ((3.d.d.d) (fd) adfd | cdef g2(fg) | ((3agf) ge fdec | dBAG (FD) D2 |]` },
  { id: "on1496", n: 1496, level: 3, rk: "reel", lo: 62, hi: 83, p: 3029, abc: `X:1496
T:Kiss the Bride
R:reel
B:O'Neill's Music of Ireland (1903), no. 1496
Z:John B. Walsh
M:C|
L:1/8
Q:1/4=150
K:G
"^A"[|]\\
D2 | GBAG FGAc | BGBd g2(dg) | ecAG FGAc |1 BGAF GFED :|2 BGAF G2 "^B"|[| d2 | g2 (a/g/f/g/) a2 (b/a/^g/a/) |
| bagf g2(dg) | ecAG FGAc | BGAF GFED || g2 (a/g/f/g/) a2 (b/a/^g/a/) | bagf g2(dg) | ecAG FGAc | BGAF G2 |]` },
  { id: "on1509", n: 1509, level: 3, rk: "reel", lo: 62, hi: 83, p: 3030, abc: `X:1509
T:The Merry Blacksmith
R:reel
B:O'Neill's Music of Ireland (1903), no. 1509
Z:John B. Walsh
M:C|
L:1/8
Q:1/4=150
K:D
D2 |\\
d3A T(BA)FA | ABdA TBAFA | ABde fded | Beed egfe |\\
d2dA TBAFA | ABdA TBAFA | ABde fdec | dBAF D2 |]
|| (fg) |\\
a3g f2Tfe | d2{e}dA TBAFA | ABde fded | Beed egfe |\\
abag f2{g}fe | d3A TBAFA | ABde fdec | dBAF D2 |]` },
  { id: "on1518", n: 1518, level: 2, rk: "reel", lo: 62, hi: 83, p: 2774, abc: `X:1518
T:The Wind That Shakes the Barley
R:reel
B:O'Neill's Music of Ireland (1903), no. 1518
Z:John B. Walsh
M:C|
L:1/8
Q:1/4=150
K:D
   B | A2AB AFED | B2BA BcdB | A2AB AFED | gfed [1 Bcd :| [2 B2d |]
|: e | f2fd g2ge | f2fd Bcde |[1 f2fd g2fg | afed Bcd :|[2 fafd gbge | afed Bcd !D.C.! ||` },
  { id: "on1532", n: 1532, level: 3, rk: "reel", lo: 62, hi: 83, p: 2773, abc: `X:1532
T:The Northern Lasses
R:reel
B:O'Neill's Music of Ireland (1903), no. 1532
Z:John B. Walsh
M:C|
L:1/8
Q:1/4=150
K:G
((3def) | gG (3GGG (EG)DG | (EG)DG (EG)AB | cBAG FGAB | cBAB cdef || gG (3GGG (EG)DG |
| (Aa)af gfed | cBAG FGAc | BGAF G2 || (Bd) | g2dg egdg | agbg agef | g2 dg egdg |
| agba g2 (ga) || ((3bag) ((3agf) gfed | Bdef gedc | ((3Bcd) ef gfge |1 Bgba gfef :|2 dB ((3cBA) G2 |:e]` },
  { id: "on1535", n: 1535, level: 3, rk: "reel", lo: 66, hi: 83, p: 2782, abc: `X:1535
T:The Jolly Tinker
R:reel
B:O'Neill's Music of Ireland (1903), no. 1535
Z:John B. Walsh
M:C|
L:1/8
Q:1/4=150
K:D
|: A3F GFGB | A2af gedB | ABAF GFGB |1 dBGB dedB :|2 dBGB d2 (3(Bcd) |] e^def g2(ef) | g2(af) gfed |
|  e^d (3(efg) ageg | a2(bg) aged :: eaag edBd | eaag (3(efg) dg | eaag efge | dBGB d2 (3(Bcd) :|
|: edgd ed (3(Bcd) | edgd e2 (3(Bcd) | edgd efge | dBGB d2 (Bd) :| eA (3AAA edBd | e^def gefd |
|  eA (3AAA efge | dBGB d2 (Bd) || ea{b}ag edBd | e^def gefd | efgb afge | dBGB ded"_D.C."B |]` },
  { id: "on1538", n: 1538, level: 3, rk: "reel", lo: 66, hi: 83, p: 2902, abc: `X:1538
T:The Maid in the Cherry Tree
R:reel
B:O'Neill's Music of Ireland (1903), no. 1538
Z:John B. Walsh
M:C|
L:1/8
Q:1/4=150
K:A
(cd) !segno!\\
|: eAAF G2 (cd) | eA (3AAA gefd | eAAF G2(Bc) | dBgB TBAA2 :| e>a ((3{b}aga) baag | eaag ((3efg) dg |
| e>a ((3{b}aga) baaf | gedB TBAA2 || e>a ((3{b}aga) baag | eaaf g2(ga) | bgaf gefd | edgB TBA !segno!A2 |]` },
  { id: "on1544", n: 1544, level: 2, rk: "reel", lo: 62, hi: 81, p: 2773, abc: `X:1544
T:The Grey Plover
R:reel
B:O'Neill's Music of Ireland (1903), no. 1544
Z:John B. Walsh
M:C|
L:1/8
Q:1/4=150
K:G
[|\\
G3B d2(BA) | BcBA BcBA | G3 B d2(BG) | FADA FADA ||\\
G2GB d2Bd | eBBd g2(fg) | efde Bddf | e2dB (BA)A2 |]
[|\\
d>g (3.g.g.g a2(ge) | d2BA GBB2 | d>g (3.g.g.g a2(ge) | d2BG FAA2 ||\\
dggg a2(ge) | dBBd g2(fg) | efde Bddf | e2dB (BA)A2 |]` },
  { id: "on1553", n: 1553, level: 2, rk: "reel", lo: 62, hi: 83, p: 3029, abc: `X:1553
T:Rolling on the Ryegrass
R:reel
B:O'Neill's Music of Ireland (1903), no. 1553
Z:John B. Walsh
M:C|
L:1/8
Q:1/4=150
K:Dmix
dB !segno! [|\\
A2(AF) DFAF | G(E{FE}D)E GBdB | BAFA DFAd | BGFG TE2D2 |\\
 FAAF  DFAF | (GE{FE}D)E GBdB | BAFA DFAd | BGFG E2D2 |]
[|\\
ABde f2(fa) | gefd edBd | ABde T(fe)fg | afdf e2d2 |\\
ABde f2(fa) | gefd edBd | ABde   faab  | afdf e2d2 |]
[|\\
A2(Ac) BAGF | GABc dBAG | FGAc BGGB | AFDF TE2D2 |\\
 FAAc  BAGF | GABc dBAG | FGAB defb | afdf e2!segno!d2 |]` },
  { id: "on1556", n: 1556, level: 2, rk: "hornpipe", lo: 62, hi: 81, p: 2774, abc: `X:1556
T:Chief O'Neill's Hornpipe
R:hornpipe
B:O'Neill's Music of Ireland (1903), no. 1556
M:C|
L:1/8
Q:1/4=120
K:D
(de)|fef(g af)ge|fde(ddc)AG|(FE)(FD) FGA(B|c)AdcA2 (de)|
fef(g af)ge|fdc(d dc)AG|(FE)(FD) GBAG|F2 D2 D2:|
(DE)|(FEF)(D FG)AB|cAd(B cA)GB|Add(e fd)ed|c(Adc) A2(de)|
fef(g af)ge|fde(d dc)AG|(FE)(FD) GBAG|F2 D2 D2:|` },
  { id: "on1557", n: 1557, level: 2, rk: "hornpipe", lo: 62, hi: 83, p: 2773, abc: `X:1557
T:The Greencastle Hornpipe
R:hornpipe
B:O'Neill's Music of Ireland (1903), no. 1557
M:C|
L:1/8
Q:1/4=120
K:G
(dc) \\
| BGDG BGDG | (3gag fg e2(dc) | BGDG BGDG | dcBc A2 (dc) |
BGDG BGDG | (3gag fg e2 (dc) | Bdfe dcAF | G2 GG G2 :|
(ga) \\
| bagf efga | bagf e2 (fg) | agfe defg | agfe d2 (3def |
gfgd e2d2 | {d}cBAB cdef | gfgd ecAF | G2GG G2 :|` },
  { id: "on1573", n: 1573, level: 2, rk: "hornpipe", lo: 62, hi: 81, p: 2773, abc: `X:1573
T:Bantry Bay
R:hornpipe
B:O'Neill's Music of Ireland (1903), no. 1573
M:C|
L:1/8
Q:1/4=120
K:G
(dc)|BGAG EGDE|G2G>G G3 B|AGAB cBAG|Bdde d3 d|
edef gage|dedB A (GA)|BGAG EGDE|G2 G>G G2:|
|:(Bc)|dBGB dBGB|e2 e>d e2 de|f2 fe defe|g2 gf g2 z2|
d2 ef gage|dedB A2 (GA)|BGAG EGDE|G2 G>G G2 :|` },
  { id: "on1577", n: 1577, level: 2, rk: "hornpipe", lo: 63, hi: 79, p: 3038, abc: `X:1577
T:The Sailor's Hornpipe
R:hornpipe
B:O'Neill's Music of Ireland (1903), no. 1577
Z:Michael Hogan
M:C|
L:1/8
Q:1/4=120
K:D
(AG) | FAdc d2 (AG) | FAdc d2 (A^G) | Aced cBA^G | Aced cBA=G |
FAdc d2 (AG | FAdc d2 A2 | BcdB cdec | f2 d2 d2 :|
|: (ef) | gfge c2 (ec) | dcdB A2 (GF) | GABG FGAF | E^DEF E2 (ef) |
gfge c2 (ec) | dcdB A2 (^GA) | BcdB cdec | f2 d2 d2 :||` },
  { id: "on1586", n: 1586, level: 2, rk: "hornpipe", lo: 62, hi: 81, p: 2773, abc: `X:1586
T:The Trumpet Hornpipe
R:hornpipe
B:O'Neill's Music of Ireland (1903), no. 1586
Z:Michael Hogan
M:2/4
L:1/16
Q:1/4=120
K:G
(3DEF | G2GG G2G2 | (BGBd) (gdBG) | D2DD D2D2 | FDFA dcAF |
G2GG G2G2 | BGBd g2 z2 | fafd egec |1 (3.d.d.d fe dcAF :|2 d2dd d2d2 ||
e2ee e2e2 | fgaf gfed | c2cc B2BB | ABAG FGEF |
D>G (3GFG E>G (3GFG | D>G (3GFG BGFD | Bdfe dcAF | G2GG G2 z2 :||` },
  { id: "on1603", n: 1603, level: 2, rk: "hornpipe", lo: 62, hi: 79, p: 2774, abc: `X:1603
T:The Harvest Home
R:hornpipe
B:O'Neill's Music of Ireland (1903), no. 1603
Z:Michael Hogan
M:C|
L:1/8
Q:1/4=120
K:D
(AF) | DAFA DAFA | defe dcBA | eAfA gAfA | edcB AGFE |
DAFA DAFA | defe dcBA | dAFA fgec | d2 d2 d2 :|
|: (cd) | e>A (3AAA f>A (3AAA | e>A (3AAA f>A (3AAA | eAfA gAfA | (3efe (3dcB (3ABA (3GFE |
DAFA DAFA | defe dcBA | dAFA fgec | d2 d2 d2 :|` },
  { id: "on1622", n: 1622, level: 3, rk: "hornpipe", lo: 64, hi: 81, p: 2902, abc: `X:1622
T:Cronin's Rambles
R:hornpipe
B:O'Neill's Music of Ireland (1903), no. 1622
Z:Michael Hogan
M:C|
L:1/8
Q:1/4=120
K:A
E2 | AGAB cABc | dcdf ed (3efg | aecA dfed | cABG EFGE |
 AGAB cABc | dcdf ed (3efg | aecA dBGB | A2 A2 A2 :|
|: A2 | Aceg aece | gefd efge | aecA dfed | cABG EFGE |
Aceg aecA | gfdf e2 (3efg | aecA dBGB | A2 A2 A2 :||` },
  { id: "on1627", n: 1627, level: 2, rk: "hornpipe", lo: 64, hi: 81, p: 2773, abc: `X:1627
T:The Little Stack of Barley
R:hornpipe
B:O'Neill's Music of Ireland (1903), no. 1627
Z:Nick Terhorst
M:C|
L:1/8
Q:1/4=120
K:G
B>d \\
| e>fed BedB | AGEG AcBA | GFGA BA (3Bcd | e2A2A2 B>d |
| efgf efdB | AGEG AcBA | G>FGA BdAB | G2GG G2 :|
|: GA \\
| Bdef g2fg | agfg eg d2 | gfed B>A (3Bcd | e2 AA A2 Bd |
| (3efg a f g2 fe | d>BAG AcBA | G>FGA BdAB | G2 GG G2 :|` },
  { id: "on1628", n: 1628, level: 2, rk: "hornpipe", lo: 62, hi: 79, p: 2772, abc: `X:1628
T:Off to California
R:hornpipe
B:O'Neill's Music of Ireland (1903), no. 1628
Z:Nick Terhorst
M:2/4
L:1/16
Q:1/4=120
K:G
(3DEF|G>FG>B A>GE>D|G>Bd>g e2(3def|g>fg>d e>dB>G|A>BA>G E2(3DEF|
G>FG>B A>GE>D|G>Bd>g e2(3def|g>fg>d e>dB>G|A>BA>F G2:|
|:(3def|g>fe>g f>ed>f|e>de>f e>dB>d|g>fg>d e>dB>G|
|A>BA>G E2D2|(3GAG B>G A>GE>D|G>Bd>g e2(3def|g>fg>d e>dB>G|A>BA>F G2:|` },
  { id: "on1633", n: 1633, level: 2, rk: "hornpipe", lo: 64, hi: 81, p: 2773, abc: `X:1633
T:Youghal Harbour
R:hornpipe
B:O'Neill's Music of Ireland (1903), no. 1633
Z:Nick Terhorst
M:2/4
L:1/16
Q:1/4=120
K:G
BA|GFEF GABd|egfa gage|dcBA G2Bd|cBAG EcBA|
|GFEF GABd|egfa gage|dcBA B>AG/2F/2E/2F/2|G2G2G2:|
|:dc|Bdef g2fg|agfg edge|dcBA G2Bd|cBAG EcBA|
|GFEF GABd|egfa gage|dcBA B>AG/2F/2E/2F/2|G2G2G2:|` },
  { id: "on1640", n: 1640, level: 3, rk: "hornpipe", lo: 64, hi: 83, p: 3031, abc: `X:1640
T:The Scholar
R:hornpipe
B:O'Neill's Music of Ireland (1903), no. 1640
M:2/4
L:1/16
Q:1/4=120
K:D
AA \\
| dfaf gfeg | fdAG FGA=c | BGFG EFGg | fdec dcBA |
| dfaf gfeg | fdAG FGA=c | BGFG EFGg |1 fgec d2 :|2 fgec defg :|
| a2fd dfaf | dfaf bagf | gfge =cege | =cege agfe |
| a^gaf dfaf | dfaf bagf | gfgf gbag |1 fdec defg :|2 fgec d2 :|` },
  { id: "on1642", n: 1642, level: 2, rk: "hornpipe", lo: 62, hi: 81, p: 2774, abc: `X:1642
T:The Soldier's Joy
R:hornpipe
B:O'Neill's Music of Ireland (1903), no. 1642
M:C|
L:1/8
Q:1/4=120
K:D
FG \\
| AFDF AFDF | A2 d2 d2 cB | AFDF AFDF | G2E2 E2 FG |
| AFDF AFDF | A2 d2 d2 de | fafd egec | d2 d2 d2 :|
|: de \\
| fdfd fagf | edcd efge | fdfd fagf | edcB A2 de |
| fdfd fagf | ecAc efge | fafd egec | d2 d2 d2 :|` },
  { id: "on1652", n: 1652, level: 2, rk: "hornpipe", lo: 66, hi: 81, p: 2774, abc: `X:1652
T:The Golden Vale
R:hornpipe
B:O'Neill's Music of Ireland (1903), no. 1652
M:C|
L:1/8
Q:1/4=120
K:D
(3ABc \\
| (3ddd d>A B>G ~G2 | F>GA>c B>G ~G2 | {a}g2 g>f e>dc>d | (3efe (3dcB A>B{d}c-A |
| (3ddd d>A B>G~G2 | F>GA>cB>GG2 | A>ge>f g>ec>d | e>d{e}d-cd2 :|
|: f-g \\
| a>fd>f g>fe>d | (3efe d>B A>GF>G | F>fe>fg>fe>d | (3Bcd e>f e2 f>g |
| a>fd>f g>fe>d | (3efe d>B A>GF>G | A>fe>f g>ec>d | e>d{e}d-c d2 :|` },
  { id: "on1675", n: 1675, level: 3, rk: "hornpipe", lo: 62, hi: 83, p: 2902, abc: `X:1675
T:The Humours of Ballyconnell
R:hornpipe
B:O'Neill's Music of Ireland (1903), no. 1675
M:4/4
L:1/8
Q:1/4=120
K:A
e-d \\
| cBcdcBAG | AGEFGABd | cdcBAGEG | ABcd e2e-d |
| cBcd cBAG | AGAB cdcB | ABAGEDEG | A2AAA2 :|
|: E2 \\
| ABcde2 d-c | dcdeg2e-^d | efga bagb | a2aaa2a-f |
| gedB cBAG | AGABcdcB | ABAGEDEG | A2AAA2 :|` },
  { id: "on1695", n: 1695, level: 3, rk: "hornpipe", lo: 62, hi: 81, p: 3061, abc: `X:1695
T:Frost and Snow
R:hornpipe
B:O'Neill's Music of Ireland (1903), no. 1695
M:4/4
L:1/8
Q:1/4=120
K:Am
E>F \\
| G>^FG>AG>ED>E | G>^FG>A G2E>D | E>AA>Bc>BA>^G | A>Bc>de2E2 |
| A>Bc>de2 ~g-e | d>BG>Bd2 c-d | e>dc>BA>GE>D | E>AA>^GA2 :|
|: E2 \\
| A>^GA>B c>Bc>d | e>^fg>e a2 e-f | g>^fg>e d>cB>d | c>BA>cB>GE>D |
| A>Bc>de^fg>e | d>BG>Bd2c-d | e>dc>AA>GE>D | E>AA>^GA2 :|` },
  { id: "on1700", n: 1700, level: 3, rk: "hornpipe", lo: 62, hi: 83, p: 2772, abc: `X:1700
T:The Boys of Bluehill
R:hornpipe
B:O'Neill's Music of Ireland (1903), no. 1700
M:2/4
L:1/16
Q:1/4=120
K:D
F-A \\
| BAFA D2F-A | BABd e2d-e | faaf egfe | dfed B2d-B |
| BAFA D2F-A | BABd e2d-e | faaf egfe | d2ddd2 :|
|: f-g \\
| afdf a2g-f | gfgab2a-g | faaf egfe | dfedB2d-B |
| BAFAD2F-A | BABde2d-e | faaf egfe | d2ddd2 :|` },
  { id: "on1702", n: 1702, level: 3, rk: "hornpipe", lo: 62, hi: 79, p: 3038, abc: `X:1702
T:Hull's Victory
R:hornpipe
B:O'Neill's Music of Ireland (1903), no. 1702
Z:Bob Safranek
M:C|
L:1/8
Q:1/4=120
K:D
   A2 | dAdf dAdf | fedc  d2 (FG) | A2 AB A2 G2 | FGEF  D2  A2  |
        dAdf dAdf | e2 e2 e3  d   | dcBA  GAB^G | A2 A2 A2     :|
|: A2 | dcde fedc | B2 G2 G2 (cd) | e^def gfed  | c2 A2 A2 (Bc) |
        dAdf dAdf | eAeg  eAeg    | fedf  edce  | d2 d2 d2     :|` },
  { id: "on1703", n: 1703, level: 3, rk: "hornpipe", lo: 62, hi: 83, p: 3029, abc: `X:1703
T:The Shaskeen Clog
R:hornpipe
B:O'Neill's Music of Ireland (1903), no. 1703
Z:Bob Safranek
M:C|
L:1/8
Q:1/4=120
K:G
   D>F |   G3   B A2   A>c | d>ge>d c>AA>c | B>dB>G (3ABc A>F | G>BA>G F>DE>F |
         (TGFG)>B A2 (3ABc | d>ge>d c>AA>g | Tfef>a   e>cA>c  | B>GA>F G2    :|
|: B>c |  dg{a}gf g2   f>g | a>ba>g f>dd>c | B>cB>G (3ABc A>F | G>BA>G F>D D2 |
          dg{a}gf g2   f>g | a>ba>g f>dd>e | Tfef>a   e>cA>c  | B>GA>F G2    :|` },
  { id: "on1733", n: 1733, level: 2, rk: "hornpipe", lo: 62, hi: 81, p: 2781, abc: `X:1733
T:The Cuckoo's Nest
R:hornpipe
B:O'Neill's Music of Ireland (1903), no. 1733
Z:Bob Safranek
M:2/4
L:1/16
Q:1/4=120
K:Em
   (GA) | BGEG  BGEG  | BAGF E2(FG) | AFDF  AFDF | AGFE D2(EF) |
          GFGE g2(fe) | dBGB d2(cB) | AGFE  DEFA | G2E2 E2    :|
|: (GA) | B2e2  efge  | d2B2 B2(dB) | AB^de faef | d2A2 A2 z2  |
          B2e2  efge  | dBGB d2(cB) | AGFE  DEFA | G2E2 E2    :|` },
  { id: "on1746", n: 1746, level: 2, rk: "hornpipe", lo: 62, hi: 83, p: 2773, abc: `X:1746
T:The Flowers of Edinburgh
R:hornpipe
B:O'Neill's Music of Ireland (1903), no. 1746
Z:Bob Safranek
M:2/4
L:1/16
Q:1/4=120
K:G
     (GE)  | D2(DE) G2G2  |      BGBd     cBAG  | FGEF DEFG | AFcF E2(GE) |
             D2(DE) G2G2  |      BGBd     efge  | dcBA GFGA | B2G2 G2    :|
|: ((3def) | g2(gf) gbag  |     f2(fe)    fagf  | edef gfed | B2e2 e2(ge) |
              dBGB d2(Bd) | ((3efg) (fa) g2(ge) | dcBA GFGA | B2G2 G2    :|` },
  { id: "on1748", n: 1748, level: 3, rk: "hornpipe", lo: 62, hi: 83, p: 2902, abc: `X:1748
T:The Redhaired Boy
R:hornpipe
B:O'Neill's Music of Ireland (1903), no. 1748
Z:Bob Safranek
M:2/4
L:1/16
Q:1/4=120
K:A
   (AG) | EAAG  ABcd  | efec d2(cd) | edcB ABcA | BGEF G2(ED) |
          EAAG  ABcd  | efec d2(cd) | eaab aged | c2A2 A2    :|
|: (ef) | gfga g2(ef) | gfec d2(cd) | edcB ABcA | BGEF G2(ED) |
          EAAG  ABcd  | efec d2(cd) | eaab aged | c2A2 A2    :|` },
  { id: "on1781", n: 1781, level: 3, rk: "set dance", lo: 66, hi: 81, p: 2807, abc: `X:1781
T:The Ace and Deuce of Pipering
R:set dance
B:O'Neill's Music of Ireland (1903), no. 1781
Z:Robert Thorpe
M:C|
L:1/8
Q:1/4=110
K:G
d-c|B2 cA B-GcA|BdcA B2 A-G|d2 ec d2 ec|dfec dcBA|
|e2 fd e-dcA|Adde dcBA|BGcA B2 A-G|FGAB cBcA|
|G2 g-e =fdcA|FGAB {d}-cAFG|.AG{A}G-F G2 F-G|.AG{A}G-F G2:|
|:G-F|G2 =f2 e2 f2|G2 =f-g fdcA|G2 g2 f2 g2|d2 g-a gfdc|
A2 =f2 e2 f2|d^cde fefg|agfa gfdc|BGcA B2 A-G|
|G2 g-e =fdcA|FGAB {d}cAFG|.AG{A}GF G2 F-G|.A G{A}GF G2:|` },
  { id: "on1784", n: 1784, level: 3, rk: "set dance", lo: 64, hi: 83, p: 2902, abc: `X:1784
T:Rodney's Glory
R:set dance
B:O'Neill's Music of Ireland (1903), no. 1784
Z:Robert Thorpe
M:2/4
L:1/16
Q:1/4=110
K:A
e-d \\
| c2B-c ABcA | BGEF G2c-d | efed cdef | {a}-gfge dfed |
| c2B-c ABcA | BGEF G2e-d | !c2B-A GABG | A4 A2 :|
|: d2 \\
| eaab aged | efed c3A | g2fg agec | dcAF G2G2 |
| AGAB cBcd | edee a2ab | aged cdef | gfge dfed |
| (3cdc (3BcB ABcA | BGEF G2e-d | c2B-A GABG | A4 A2 :|` },
  { id: "on1787", n: 1787, level: 2, rk: "set dance", lo: 62, hi: 83, p: 2773, abc: `X:1787
T:The Three Captains
R:set dance
B:O'Neill's Music of Ireland (1903), no. 1787
Z:Robert Thorpe
M:C|
L:1/8
Q:1/4=110
K:G
D|G>G (3BGB c>AF>A|G>G (3BGB d>BG>G|(3cec A>A (3BdB G>G|A>Bc>B (3AcG (3FED|
G>G (3BGB c>AF>A|G>G (3BGB d>BG>G|(3cec A>A (3BdB G>G|(3EcB (3AGF G2 G:|
|:d|g>g (3dcB (3ABc (3def|g>g (3dBd (3ecA A>A|g>g (3bge f>g (3afd|e/-f/-g/e/ (3edc d>d (3dcB|
c>d (3ecA B>c (3dBG|A>Bc>B (3ABG (3FED|G>G (3BGB c>AF>A|G>G (3BGB d>BG>G|
(3cec A>A (3BdB G>G|(3EcB (3AGF G2 G:|` },
  { id: "on1792", n: 1792, level: 2, rk: "set dance", lo: 62, hi: 81, p: 2774, abc: `X:1792
T:The Job of Journey Work
R:set dance
B:O'Neill's Music of Ireland (1903), no. 1792
Z:Robert Thorpe
M:C
L:1/8
Q:1/4=110
K:D
f-e|dcBA FGAB|cABG A2 f-e|d2 c-A BGAF|GBAF DEFG|
ABAF GFEF|D2 DE F2 G2|A2 d2 cdef|d2 dd d2:|
|:d-e|f2e-f gfef|dcAG A2 d-e|f2e-f gfef|d3 c A2 f-g|
agfa gfef|dcde f2ec|dcAG FGAB|cABG A2 f-e|
d2 cA BGAF|GBAF DEFG|ABAF GFEF|D2 DE F2 G2|
A2 d2 cdef|d2 dd d2:|` },
  { id: "on1793", n: 1793, level: 3, rk: "set dance", lo: 62, hi: 83, p: 2775, abc: `X:1793
T:The Blackbird
R:set dance
B:O'Neill's Music of Ireland (1903), no. 1793
Z:Robert Thorpe
M:2/4
L:1/16
Q:1/4=110
K:D
d-c|B2d2 c2B2|ABAG ABcA|~d-cde dcAF|GAGF D2D-E|
F2F-G A2f-e|~d-cde dcAF|GAGF D2D2|D6:|
d-e|f2d2 f2g2|abag fgaf|g2{a}g-f gbaf|gagf d2d-e|
f2de f2g2|abag fgaf|gagf d2d2|defg abag|
fgaf gage|f2ed cA2B|c2de defg|a4 A3G|
FGAB =c3e|d^cAF GAGF|D2D2 D2:|` },
  { id: "on1797", n: 1797, level: 2, rk: "set dance", lo: 64, hi: 85, p: 2774, abc: `X:1797
T:The Garden of Daisies
R:set dance
B:O'Neill's Music of Ireland (1903), no. 1797
Z:Robert Thorpe
M:C|
L:1/8
Q:1/4=110
K:D
fg|a2 b2 g3/2b/a3/2g/|f2 a2 g3/2f/e3/2f/|~d-cd3/2e/ f3/2d/e3/2c/|dedc AGFG|
A3 B ABAG|FEFG ABcA|~d-cde f3/2d/e3/2c/|d2 d3/2d/ d2:|
(3ABc|d2 e2 fefg|a3 f d2 ga|b3 g a3 f|g3 e c2 d-e|
f3 e f2 a2|g2 f2 efec|dcde fdec|dedc A2 f-g|
a2 b2 g3/2b/ag|f2 a2 g3/2f/ef|~d-cde f3/2d/e3/2c/|dedc AGFG|
A3 B ABAG|FEFG ABcA|~d-cde fdec|d2 d3/2d/ d2||
(3ABc|d2 e2 f2 g2|a2 a3/2a/ a2 f-g|a2 b2 c'2 a2|g2 g3/2g/ g2 f-g|
a2 b2 a2 g2|e2 a2 g2 e2|~d-cde fdec|dedc A2 f-g|
a2 b2 a2 g2|e2 a2 g2 e2|~d-cde fdec|dedc AGFG|
A2 AB ABAG|F2 G2 ABcA|d2 de fdec|d2 d3/2d/ d2|]` },
  { id: "on1801", n: 1801, level: 3, rk: "jig", lo: 67, hi: 84, p: 3061, abc: `X:1801
T:Brian Boru's March
R:jig
B:O'Neill's Music of Ireland (1903), no. 1801
Z:Bob Safranek
M:6/8
L:1/8
Q:3/8=90
K:Am
(e/d/) | c>BA A2 (e/d/) | c>BA A2 (d/c/) | B>AG G2 (d/c/) | B>AG   G2 (e/d/) |
         c>BA A2 (e/d/) | c>BA A2  a     | e>fe e2  d     | (c<A)A A2        ||
  G    | Acd (e2 {fe}d) | (e2 {fe}d) edB | GBc (d2 {ed}B) | d2 {ed}B  dBG    |
         Acd (e2 {fe}d) | (e2 {fe}d) ecA | cBA (e2 {fe}d) | (c<A)A A2        ||
  B    | cBA  {b}a^ga   | cBA  {b}a^ga   | BAG  {a}=g^fg  | BAG    {a}g^fg   |
         cBA  {b}a^ga   | cBA  a2  b     | c'ba gfe       | dcB    A2        ||
  B    |(cd/e/^f) g2 a  | g2 a gec       | (GA/B/c) d2 e  | dge    dBG       |
        (cd/e/^f) g2 a  | g2 a geB       | {d}cBA (e2 {fe}d) | (c<A)A A2     |]` },
  { id: "on1803", n: 1803, level: 2, rk: "march", lo: 64, hi: 83, p: 2773, abc: `X:1803
T:The White Cockade
R:march
B:O'Neill's Music of Ireland (1903), no. 1803
Z:Bob Safranek
M:C
L:1/8
Q:1/4=100
K:Bphr
(GA) | B2 (Bd) (cB)(AG) |   BABc    B2 (gf) | (ed)(cB) (cB)(AG) | E2 AA A2 GA |
       B2 (Bd) (cB)(AG) | (Bd)(ef) (gf)(ga) | (ba)(gf) (ag)(fe) | d2 B2 B2   ||
(Bc) | .d2 .B2 .f2 .B2  | (dc)(de)  d2 (Bc) |  d2 (Bd)  g2 (fg) | a2 AA A (GA) |
       B2 (Bd) (cB)(AG) | (Bd)(ef) (gf)(ga) | (ba)(gf) (ag)(fe) | d2 B2 B2   |]` },
  { id: "on1812", n: 1812, level: 3, rk: "march", lo: 64, hi: 81, p: 3030, abc: `X:1812
T:Johnny Cope
R:march
B:O'Neill's Music of Ireland (1903), no. 1812
Z:Bob Safranek
M:2/4
L:1/16
Q:1/4=100
K:A
   G | E2A2 ABcd | e2A2  B2AG | E2G2  GABc | d2G2 B2AG |
       E2A2 AGAB | cBcd  e2dc | B2=g2 edcB | c2A2 A3  :|
|: d | e2a2 e2a2 | e2a2  gfed | B2=g2 B2g2 | B2g2 gfed |
       e2a2 a2f2 | =g2f2 e2dc | B2=g2 edcB | c2A2 A3  :|` },
  { id: "on1814", n: 1814, level: 2, rk: "polka", lo: 66, hi: 79, p: 2773, abc: `X:1814
T:The Rakes of Mallow
R:polka
B:O'Neill's Music of Ireland (1903), no. 1814
Z:Bob Safranek
M:2/4
L:1/16
Q:1/4=120
K:G
.G2.B2 .G2.B2 | .G2.B2   cBAG | .F2.A2 .F2.A2 | .F2.A2 dcBA   |
.G2.B2 .G2.B2 | .G2.B2 .d2.B2 |  cBAG   FGAc  |  B2G2  G2 z2  |
 GBBB   GBBB  |  GBBB   cBAG  |  FAAA   FAAA  |  FAAA  dcBA   |
 GBBB   GBBB  |  GBBB   d2B2  |  cBAG   FGAc  |  B2G2  G2 z2  ||
 g2fe  .d2.c2 | .B2.c2 .d2.B2 |  g2fe  .d2.c2 | .B2.e2 A2 z2  |
 g2fe  .d2.c2 | .B2.c2 .d2.B2 |  cBAG   FGAc  |  B2G2  G2 z2  |
 g2fe  (de)dc |  BABc   dcBc  |  g2fe  (de)dc |  BABe  A2(Bd) |
 g2fe  (de)dc |  BABc   dcBd  |  cBAG   FGAc  |  B2G2  G2 z2  |]` },
  { id: "on1819", n: 1819, level: 2, rk: "march", lo: 67, hi: 83, p: 2773, abc: `X:1819
T:The Rocks of Cashel
R:march
B:O'Neill's Music of Ireland (1903), no. 1819
Z:Bob Safranek
M:C|
L:1/8
Q:1/4=100
K:G
   .G.B     d2     (e/d/c/B/)      d2    | .G.B     d2     (e/d/c/B/) A2  |\\
   .G.B     d2     (e/d/c/B/)      d2    |      gedB             cAAB    :|
|: .G.B (c/B/A/B/)    .g.B    (c/B/A/B/) | .G.B (c/B/A/B/)       cAAB     |\\
   .G.B (c/B/A/B/)    .d.B    (c/B/A/B/) |      gedB             cAAB    :|
   .B.d     g2     (g/f/e/d/)      g2    | .B.d     g2     (g/f/e/d/) gb  |\\
   .B.d     g2     (g/f/e/d/)      g2    |      gedB             cAAB     |
   .G.B (c/B/A/B/) (c/B/A/B/) (c/B/A/B/) |  G.B (c/B/A/B/)       cAAB     |\\
   .G.B (c/B/A/B/) (c/B/A/B/) (c/B/A/B/) |      gedB             cAAB     |]` },
  { id: "on1820", n: 1820, level: 2, rk: "jig", lo: 69, hi: 83, p: 2774, abc: `X:1820
T:Paddy Carey
R:jig
B:O'Neill's Music of Ireland (1903), no. 1820
Z:Bob Safranek
M:6/8
L:1/8
Q:3/8=90
K:D
   A2 d {e}dcd | f2 d {e}dcd | B2 e e2 f | gfe dcB   |
   A2 d {e}dcd | f2 d {e}dcd | ecA   ABc | def e2 d :|
|: d2 f   g2 b | a2 b    afd | d2 e g2 b | afd e2 d  |
   d2 f   g2 b | a2 b    afd | ecA   ABc | def e2 d :|
|: g2 e {f}ede | f2 d {e}dcd | ecA   ABc | def e2 d  |
   g2 e {f}ede | f2 d {e}dcd | ecA   ABc | def e2 d :|` },
  { id: "on1825", n: 1825, level: 2, rk: "march", lo: 62, hi: 81, p: 2773, abc: `X:1825
T:Farewell to Whiskey
R:march
B:O'Neill's Music of Ireland (1903), no. 1825
Z:Bob Safranek
M:2/4
L:1/16
Q:1/4=100
K:G
   (GE) | D2G2  B2G2  | A2E2  E2G2  | D2G2  BAGA  | B2d2 d3d |
          efge  d2g2  | cBAG  A2B2  | D2G2  BAGA  | B2G2 G  :|
|: (Bc) | d2B2 g2(Bc) | dcBA G2(Bc) | d2B2 g2(fg) | agfe d3d |
          efge  d2g2  | cBAG  A2B2  | D2G2  BAGA  | B2G2 G  :|` }
];
