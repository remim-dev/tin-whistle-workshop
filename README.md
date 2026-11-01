# Tin Whistle Workshop

*[Version française plus bas](#français)*

A free web app for learning the Irish tin whistle. Pick a tune: the whistle on the left shows which holes to cover for each note while the score plays on the right.

## Features

- **218 tunes**: 18 workshop tunes (songs, airs, first Irish tunes) and **200 well-known tunes from O'Neill's *Music of Ireland*** (1903): jigs, reels, hornpipes, slip jigs, set dances, marches and airs. Filter by collection, level and type.
- **Automatic difficulty level** (beginner, intermediate, advanced), estimated from the tempo of the tune type, the share of second-octave notes, half-holes, cross-fingerings, leaps and ornaments (`difficulty.js`). Imported tunes get one too; estimated levels are marked with *.
- **Live fingerings**: a large whistle diagram follows the score note by note, together with the next note. Badges flag the second octave, half-holes and cross-fingerings.
- **Tab view**: a small whistle drawn under every note of the staff, highlighted as the tune plays.
- **Adjustable speed** (30 to 150 %), **metronome**, and a one-bar **count-in**.
- **Practise a section**: numbered bars, start from any bar, loop the whole tune or just a few bars.
- **Any whistle key**: C, D (default), E♭, F, G, A, B♭. Either keep your D fingerings with the score transposed, or keep concert pitch and get the matching fingerings.
- **Playability check**: each tune shows whether it fits your whistle, needs half-holes or goes out of range, and you can filter the list to show only easy tunes.
- **Your own tunes**: paste any tune in [ABC notation](https://abcnotation.com/wiki/abc:standard:v2.1). It is saved in your browser.
- **Import and export**: save the whole bank or just your own tunes as a standard `.abc` file, and import `.abc` files (several tunes per file, duplicates skipped). Handy for backups or moving to another device.
- Tunes listed in alphabetical order, ignoring leading articles (“The Kesh Jig” sorts under K).
- **Four languages**: English, French, Spanish and German, picked from your browser settings and switchable at any time.
- Fingering chart, light and dark themes, works on phones.

## Running it

No build step and no dependencies to install.

- **Online**: enable GitHub Pages for this repository (Settings → Pages → deploy from the `main` branch, root folder). The app will be at `https://<your-name>.github.io/<repo>/`.
- **Locally**: open `index.html` in a browser, or serve the folder, for example with `python -m http.server`.

An Internet connection is needed the first time, to load [abcjs](https://www.abcjs.net/) and the fonts from their CDNs.

## Files

| File | Contents |
| --- | --- |
| `index.html` | Page layout and styles |
| `app.js` | Application logic (score, timing, fingerings, audio) |
| `i18n.js` | Interface translations |
| `tunes.js` | The workshop tunes, in ABC notation |
| `tunes-oneill.js` | 200 tunes from O'Neill's *Music of Ireland* (GPL, see below) |
| `difficulty.js` | Difficulty estimate, used by the app and to build `tunes-oneill.js` |

## Adding a language

Copy the `en` block in `i18n.js`, give it the two-letter language code (`it`, `ga`, `nl`, …) and translate the values. Missing keys fall back to English. Also add `desc` (and, if useful, `title`) entries in that language to the tunes in `tunes.js`.

## Adding tunes

Add an entry to `tunes.js` with an `id`, a `level` (1 to 3, or check what `difficulty.js` gives), a type (`rk`), short descriptions and the ABC, written for a D whistle.

Only add tunes that are traditional or in the public domain, in a transcription **you wrote yourself** (or one explicitly released for free reuse). By contributing, you agree to release your contribution under the project's licence. Many online collections have their own licence terms, so please don't copy tunes from them into the bank. Anyone can still paste tunes from those sites into their own browser with “Add a tune to my collection”.

## Credits and licence

Created by [remim-dev](https://github.com/remim-dev).

- The whole project (code, texts and ABC transcriptions) is licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/), see [LICENSE](LICENSE). You may share and adapt it for **non-commercial** purposes, crediting remim-dev and keeping the same licence. The tunes themselves are traditional or in the public domain.
- **Exception, `tunes-oneill.js`**: the 200 tunes come from Francis O'Neill's *The Music of Ireland* (Chicago, 1903, public domain), in the ABC transcriptions of the [O'Neill's Project](https://trillian.mit.edu/~jc/music/book/ONeills/) (1997–2000; each tune names its transcriber in its `Z:` line). That file is distributed under the [GNU GPL v2 or later](LICENSE-GPL-2.0.txt), as the project requires, not under CC BY-NC-SA. Only tunes that stay within the range of a D whistle were kept. Titles were tidied and a type and learning tempo were added; the notes are unchanged. These are O'Neill's 1903 settings, which sometimes differ from the versions played in sessions today.
- [abcjs](https://github.com/paulrosen/abcjs) (MIT) is loaded from cdnjs. The Atkinson Hyperlegible, IBM Plex Mono and Uncial Antiqua fonts (SIL Open Font License) are loaded from Google Fonts.

---

## Français

Une application web libre pour apprendre la flûte irlandaise (tin whistle). Choisissez un air : la flûte de gauche montre les trous à boucher pour chaque note pendant que la partition défile à droite.

### Fonctionnalités

- **218 morceaux** : 18 morceaux de l'atelier (chansons, airs, premiers airs irlandais) et **200 airs connus du recueil O'Neill's *Music of Ireland*** (1903) : jigs, reels, hornpipes, slip jigs, set dances, marches et airs lents. Filtres par collection, niveau et type.
- **Niveau de difficulté automatique** (débutant, intermédiaire, avancé), estimé d'après le tempo du type d'air, la part de notes en 2ᵉ octave, les demi-trous, les doigtés croisés, les sauts et les ornements (`difficulty.js`). Les morceaux importés en reçoivent un aussi ; les niveaux estimés sont marqués d'une *.
- **Doigtés en direct** : un grand schéma de flûte suit la partition note par note, avec la note suivante. Des badges signalent la 2ᵉ octave, les demi-trous et les doigtés croisés.
- **Mode tablature** : une mini-flûte sous chaque note de la portée, mise en évidence pendant la lecture.
- **Vitesse réglable** (de 30 à 150 %), **métronome** et **décompte** d'une mesure.
- **Travail par passage** : mesures numérotées, départ à n'importe quelle mesure, boucle sur tout le morceau ou sur quelques mesures.
- **Toutes les tonalités de flûte** : Do, Ré (par défaut), Mi♭, Fa, Sol, La, Si♭. On garde les doigtés de Ré avec une partition transposée, ou bien la hauteur réelle avec les doigtés correspondants.
- **Jouabilité** : chaque air indique s'il tient sur votre flûte, demande des demi-trous ou sort de la tessiture, et la liste peut ne montrer que les airs faciles.
- **Vos propres airs** : collez n'importe quel morceau en notation ABC. Il est enregistré dans votre navigateur.
- **Import et export** : enregistrez toute la banque ou seulement vos morceaux dans un fichier `.abc` standard, et importez des fichiers `.abc` (plusieurs airs par fichier, doublons ignorés). Pratique pour une sauvegarde ou pour passer sur un autre appareil.
- Morceaux classés par ordre alphabétique, sans tenir compte des articles (« The Kesh Jig » est rangé à K).
- **Quatre langues** : français, anglais, espagnol et allemand, choisies d'après le navigateur et modifiables à tout moment.
- Tableau des doigtés, thèmes clair et sombre, fonctionne sur téléphone.

### Lancer l'application

Aucune compilation ni dépendance à installer.

- **En ligne** : activez GitHub Pages pour ce dépôt (Settings → Pages → déployer depuis la branche `main`, dossier racine).
- **En local** : ouvrez `index.html` dans un navigateur, ou servez le dossier, par exemple avec `python -m http.server`.

Une connexion Internet est nécessaire au premier chargement, pour abcjs et les polices.

### Contribuer

- **Une langue** : copiez le bloc `en` de `i18n.js` sous le code de la langue et traduisez les valeurs. Ajoutez aussi les descriptions des airs dans `tunes.js`.
- **Un air** : seulement des airs traditionnels ou du domaine public, dans une transcription que vous avez écrite vous-même. Ne copiez pas d'airs depuis des collections en ligne soumises à leurs propres licences.

### Crédits et licence

Créé par [remim-dev](https://github.com/remim-dev).

L'ensemble du projet (code, textes et transcriptions ABC), sauf le fichier `tunes-oneill.js`, est sous licence [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr) : vous pouvez le partager et l'adapter à des fins **non commerciales**, en citant remim-dev et en gardant la même licence. Les airs eux-mêmes sont traditionnels ou du domaine public. abcjs est sous licence MIT, les polices sous licence SIL OFL.

**Exception, `tunes-oneill.js`** : les 200 airs viennent du recueil *The Music of Ireland* de Francis O'Neill (Chicago, 1903, domaine public), dans les transcriptions ABC de l'[O'Neill's Project](https://trillian.mit.edu/~jc/music/book/ONeills/) (1997–2000 ; chaque air cite son transcripteur dans sa ligne `Z:`). Ce fichier est distribué sous [GNU GPL v2 ou ultérieure](LICENSE-GPL-2.0.txt), comme l'exige ce projet, et non sous CC BY-NC-SA. Seuls les airs qui tiennent dans la tessiture d'une flûte en Ré ont été gardés. Les titres ont été harmonisés, un type et un tempo d'apprentissage ajoutés ; les notes sont inchangées. Ce sont les versions d'O'Neill de 1903, parfois différentes de celles jouées aujourd'hui en session.
