# Tin Whistle Workshop

*[Version française plus bas](#français)*

A free web app for learning the Irish tin whistle. Pick a tune: the whistle on the left shows which holes to cover for each note while the score plays on the right.

## Features

- **Live fingerings**: a large whistle diagram follows the score note by note, together with the next note. Badges flag the second octave, half-holes and cross-fingerings.
- **Tab view**: a small whistle drawn under every note of the staff, highlighted as the tune plays.
- **Adjustable speed** (30 to 150 %), **metronome**, and a one-bar **count-in**.
- **Practise a section**: numbered bars, start from any bar, loop the whole tune or just a few bars.
- **Any whistle key**: C, D (default), E♭, F, G, A, B♭. Either keep your D fingerings with the score transposed, or keep concert pitch and get the matching fingerings.
- **Playability check**: each tune shows whether it fits your whistle, needs half-holes or goes out of range, and you can filter the list to show only easy tunes.
- **Your own tunes**: paste any tune in [ABC notation](https://abcnotation.com/wiki/abc:standard:v2.1). It is saved in your browser.
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
| `tunes.js` | The tune bank, in ABC notation |

## Adding a language

Copy the `en` block in `i18n.js`, give it the two-letter language code (`it`, `ga`, `nl`, …) and translate the values. Missing keys fall back to English. Also add `desc` (and, if useful, `title`) entries in that language to the tunes in `tunes.js`.

## Adding tunes

Add an entry to `tunes.js` with an `id`, a `level` (1 to 3), a type (`rk`), short descriptions and the ABC, written for a D whistle.

Only add tunes that are traditional or in the public domain, in a transcription **you wrote yourself** (or one explicitly released for free reuse). Many online collections have their own licence terms, so please don't copy tunes from them into the bank. Anyone can still paste tunes from those sites into their own browser with “Add a tune to my collection”.

## Licences

- Code: [MIT](LICENSE).
- ABC transcriptions in `tunes.js`: [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/). The tunes themselves are traditional or in the public domain.
- [abcjs](https://github.com/paulrosen/abcjs) (MIT) is loaded from cdnjs. The Atkinson Hyperlegible, IBM Plex Mono and Uncial Antiqua fonts (SIL Open Font License) are loaded from Google Fonts.

---

## Français

Une application web libre pour apprendre la flûte irlandaise (tin whistle). Choisissez un air : la flûte de gauche montre les trous à boucher pour chaque note pendant que la partition défile à droite.

### Fonctionnalités

- **Doigtés en direct** : un grand schéma de flûte suit la partition note par note, avec la note suivante. Des badges signalent la 2ᵉ octave, les demi-trous et les doigtés croisés.
- **Mode tablature** : une mini-flûte sous chaque note de la portée, mise en évidence pendant la lecture.
- **Vitesse réglable** (de 30 à 150 %), **métronome** et **décompte** d'une mesure.
- **Travail par passage** : mesures numérotées, départ à n'importe quelle mesure, boucle sur tout le morceau ou sur quelques mesures.
- **Toutes les tonalités de flûte** : Do, Ré (par défaut), Mi♭, Fa, Sol, La, Si♭. On garde les doigtés de Ré avec une partition transposée, ou bien la hauteur réelle avec les doigtés correspondants.
- **Jouabilité** : chaque air indique s'il tient sur votre flûte, demande des demi-trous ou sort de la tessiture, et la liste peut ne montrer que les airs faciles.
- **Vos propres airs** : collez n'importe quel morceau en notation ABC. Il est enregistré dans votre navigateur.
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

### Licences

Code sous licence MIT, transcriptions ABC sous licence CC0, abcjs sous licence MIT, polices sous licence SIL OFL.
