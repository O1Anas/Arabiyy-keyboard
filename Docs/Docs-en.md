# Foundational Principle
This keyboard is designed to facilitate Arabic text input (Digitally ofc), with special attention to terminology our muslim brothers & sisters will need.

The primary goal of this keyboard is to allow users to type with their Latin keyboards and receive the correct Arabic text output

With the aim to reach the state where **YOU GET WHAT YOU WRITE**, from latin to arabic of course.

# Detailed Transformation Rules
## 0. Phonetic Nature
To ease arabic input & increase intuitiveness, each visible Latin letter key on the keyboard is mapped to its corresponding phonetic Arabic letter, this means:
- `k` becomes `ك` (kaf)
- `l` becomes `ل` (lam)
- `m` becomes `م` (meem)
- Etc...

However, latin vowel letters are mapped to diacritics, & double pressing on a diacritic replaces it with its corresponding arabic letter, meaning:
- `a` is set to ` َ` (fatha)
  - + `a` (another fatha) turns it into `ا` (alif)
  - + `a` (another fatha) turns it into `أ` (alif with hamza)
  - + `aa` (2x `a`) (another fatha) turns it into `ى` (alif maqsurah)
  - + `a` (another fatha) turns it into ` ٰ` (maddah)
  - + `a` (another fatha) turns it into `آ` (alif with madda)

- `i` is set to ` ِ` (kasra)
  - + `i` (another kasra) turns it into `ي` (ya')

- `o` is set to ` ُ` (damma)
  - + `o` (another damma) turns it into `و` (waw)
  - + `o` (another damma) turns it into `ؤ` (Waw with Hamza Above)

- `e` is set to ` ْ` (sukoon)
  - + `e` (another sukoon) turns it into ` ّ` (shadda)
  - + `e` (another sukoon) turns it into ` ٓ` (maddah above)
  - + `e` (another sukoon) turns it into `ـ` (tatweel)

- `w` is set to `و` (waw / wāw)
- `y` is set to `ي` (ya' / yāʼ)
- `g` is set to `غ` (ghayn / ḡayn)
- `u` is not set to any character
- `p` is not set to any character

Latin characters that are not in arabic are set in this way (to benefit from their space & not leave them empty):
- `x` is set to `ش` (shiin / šīn)
- `c` is set to `ص` (Sad / ṣād)
- `v` is set to `ى` (alif maqsurah / -ā)

Furthermore, some arabic letters that aren't accessible through the latin keyboard can be accessed through an Uppercase variation of their closest latin equivalent:
- `S` is set to `ص`
- `D` is set to `ض`
- `T` is set to `ط`

The numbers row is also used in this keyboard to output these characters:
- `é` (2) is set to `ء` (hamza)
- `"` (3) is set to `ع` ('ayn)
- `(` (5) is set to `خ` (khaa)
- `-` (6) is set to `ط` (taa)
- `è` (7) is set to `ح` (haa)
- `ç` (9) is set to `ق` (qaaf)

## 1. Shadda (Emphasis) Handling
Repeated consonants (`‎و` & `‎ي` as well) automatically receive a shadda (`‎ ّ`), for example:
- `‎سس` (2x `‎س`) becomes `‎سّ`
- & `‎يي` (2x `‎ي`) becomes `‎يّ`
- Even `‎طّ`, `‎صّ`, `‎ضّ` & `‎خّ` can be written even though they aren't directly bound with any phonetic key on the keyboard

## 2. Islamic Keyword Shortcuts 💖
- `allah` becomes `اللَّه`
  - `wallah` or `welah` becomes `واللَّه`
- `bismillah` becomes `بِسمِ اللَّهِ`
- `/bismillah`  becomes `بِسمِ اللَّهِ الرَّحمٰنِ الرَّحِيم`
- `/swt` (`‏/سوت`) becomes `سُبْحَانَهُ وَتَعَالَىٰ`
- `/twt` (`‏/توت`) becomes `تَبَارَكَ وَتَعَالَىٰ`
- `/azwj` (`‏/أزوج`/`‏/َزوج`) / `3zwj` (`‏/عزوج`) becomes `عَزَّ وَجَلَّ`
- `/jj` (`‏/جج`) becomes `جَلَّ جَلَالُهُ`
- `/Saw` (`‏/صَو`) / `saw` (`‏/سَو`) becomes `صَلَّى ٱللَّٰهُ عَلَيهِۦ وَسَلَّمَ`

**Companion related:**
- `/ra` (`‏/رَ`) becomes `رَضِيَ ٱللَّٰهُ عَنهُ` (add `aa` for a female companion 😊)
- Hint: Before the shortcut, `\` can be used instead of `/` & the output will be the same.

### Quranic Symbol Handling
Special symbols used in Quranic text are intelligently managed, they include: `‎ ۚ ` ‎, `‎ۖ `, `‎ۗ `, `‎ۙ `, `‎ۛ `, `‎۞`, `‎۝`, `‎۩`, & others
- Their trigger key is: `*`
- You can cycle through them with either `*` or  `/`

## 3. Advanced Diacritic-related Transformations
### Single-level Transformations
- `‎ء` + `‎ء` (2x `‎ء`) becomes `‎ئ`
- Hamza (`‎ء`) after a fatha (`‎ َ`) is automatically set to `‎أ`
- Hamza (`‎ء`) after a damma (`‎ ُ`) is automatically set to `‎ؤ`
- Hamza (`‎ء`) after a kasra (`‎ ِ`) is automatically set to `‎ئ`
  - Write `ae` or `ea` after `‎ئ` to turn it into `‎أ`, ex: `bi2aen`/`bi2ean` becomes `بِأن`
  - Write `ie` or `ei` after `‎ئ` to turn it into `‎إ`, ex: `bi2iedhhn`/`bi2iedhhn` becomes `بِإذن`
- Type `e` after an alif (`‎أ`) to easily get `‎آ`, ex: `aleaedaab` becomes `الآداب`
- alif is set to its variant when the corresponding diacritic is typed, ex: `‎ا` + `‎ ِ` becomes `‎إ`
- & so on, many similar rules might not be documented as they are too obvious.

### Multi-level Vowel Transformations
You can move through these characters with ` َ`:
- `‎ا` `‎أ` `‎ى` `‎ ٰ` `‎آ`

Also, & as we mentioned in [the 1st heading](#0-phonetic-nature):
- With ` ُ`: `‎ ُ` `‎و` `‎ؤ`
- With ` ِ`: `‎ ِ` `‎ي` `‎إ`
- With ` ْ`: `‎ ْ` `‎ ّ` `‎ ٓ` `‎ـ`

## 4. Consonant Variant Switching
Transformation of certain consonants:
- `‎تّ` + `‎ت` (3x `‎ت`) becomes `‎ط`
- `‎سّ` + `‎س` (3x `‎س`) becomes `‎ص`
- `‎دّ` + `‎د` (3x `‎د`) becomes `‎ض`
  - `‎ضّ` + `‎ض` (3x `‎ض`) becomes `‎ظ`
- `‎كّ` + `‎ك` (3x `‎ك`) becomes `‎خ`

Ones that usually involve `h` in their transliterations:
- `‎د‎` + `‎هه‎` (`‎دهّ`) becomes `‎ذ`
- `‎ت‎` + `‎هه‎` (`‎تهّ`) becomes `‎ث`
- `‎س‎` + `‎هه‎` (`‎سهّ`) becomes `‎ش`

These rules are avoided with tashkeel between thier components.

## 5. Word Beginning Shortcuts
### Writing "الا" In Different Ways
In new words getting written:
- Shortcut for `الأ` is `alea`, ex: `aleadhhaan` = `الأذان`
- Shortcut for `الإ` is `alei`, ex: `aleinsaan` = `الإنسان`
- Shortcut for `الأُ` is `aleo`, ex: `aleomniyah` = `الأُمنِيَه`

Also, `‎الأ`, `‎الأُ` & `‎الإ` can be written with `l2a`, `l2o` & `l2i`
- Even if `لِ` or `لَ` comes before this shortcut, it is considered & will be handled smartly in this case, ex: `lil2ommah` = `لِلأُمَّه` (& not `لِْالأُمَّه` (logically))

### Lunar & solar lam (لام)
#### Lunar:
Initial `al` + letter becomes `ال` + that letter
- ex: `al9amar` becomes `القَمَر` 

Shortcut for `بِال` is `bile`, (works for "لام القَمَرِيَّه") 
- ex: `bile9amar` becomes `بِالقَمَر`

#### Solar: 
Initial `e` + consonant becomes `ال` + that consonant with a shadda on it
- ex: `eshhams` becomes `الشَّمس` 

Shortcut for `بِال` is `bie`, (works for "لام الشَمسِيَّه")
- ex: `bieshhams` = `بِالشَّمس`
- Note: this shortcut only gets applied when a consonant is written after it.

After these letters: `ب` (b), `ف` (f), `و` (w), `ك` (k) and `أ` (a), (with or without diacritics), write `ee` (` ّ`) followed by a letter to add an `ا` (madd) before that letter
- ex: `bieesti3jaal` = `بِاستِعجال` (with haste).

### Diacritic Placement Rules
Semi-Intelligent handling of diacritics at word beginnings:
- Initial `a` (` َ`) becomes `أ` 
- Initial `o` (` ُ`) becomes `أُ` 
- Initial `i` (` ِ`) becomes `إ` 

- Initial `ee` (2x ` ْ`) becomes `ا` 

## 6. Word Ending shortcuts
### Tanween (Nunation) Rules
After a letter:
- `one` (`‎ُنّْ`) becomes `‎ ٌ` 
- `ine` (`‎ِنّْ`) becomes `‎ ٍ` 
- `ane` (`‎َنّْ`) becomes `‎ ً` 
- Hint: Type `n` twice (`nn`, eg: `anne`) when adding a tanween to a ta' to convert it to ta' marbouta.

### Ta' Marbouta Rules
- Ta' (`ت`) (with or without a diacritic) followed by a sukun (` ْ`) & a space converts into `ة` + the diacritic if it was written before
- Ha' (`ه`) followed by sukun (` ْ`) & a space converts into `ة`.

### Miscellaneous Transformations
- Alif (`ا`) is added when you write a fatha tanween ` ً` on a letter
- `‎لا` & `‎في` & `‎ما` are adjusted in all cases where they're not typed correctly
- After a word that ends with a `‎و` (waw), add a `‎ ْ` (sukun(with `e`)) to directly get `‎ا` (alif) after that `‎و` (waw)
  - ex: `koonooe` becomes `كونوا`

**Punctuation transformations:**
- `;` becomes `؛` (Arabic semicolon)
- `?` becomes `؟` (Arabic question mark)
- `,` becomes `،` (Arabic comma)

## 7. Rules For Typing Pronouns
### Relative Pronouns
- Type `allaty` to get `الَّتي`
- Type `alladhhy` to get `الَّذي`

- Type `alladhhaan` to get `اللَّذان`
- Type `alladhhayn` to get `اللَّذَين`
- Type `allataan` to get `اللَّتان`
- Type `allatayn` to get `اللَّتَين`

- Type `allaaty` to get `اللّاتي`
- Type `allaa2y` to get `اللّائي`

- Note: (`y` or `ii` at the end of these rules produce the same result)

### demonstrative Pronouns
- Type `haa2oolaa2` to get `هَـٰؤُلاء` (these/those)
- Type `olaa2ik` to get `أولَـٰئِك`  (those)

## 8. Letter Rotation Mechanism
You can cycle through related letters using `/`, the list of rotations is:
- Alif/a-letter rotations: `‎ َ`, `‎ا`, `‎آ`, `‎أ`, `‎ ٰ`, `‎ى`, `‎ع`
- d-letter rotations: `‎د`, `‎ذ`, `‎ض`, `‎ظ`
- h-letter rotations: `‎ه`, `‎ح`, `‎خ`
- t-letter rotations: `‎س`, `‎ص`, `‎ش`

## 9. Diacritic overriding rule
Any diacritic written overrides the previous diactrict
![Preview-Tashkeel](/Visuals/preview-tashkeel-overriding.gif)

# Usage Advice
- You can bypass the previously mentioned rules/shortcuts by adding tashkeel between their components.

### Attribution Advice  
Using and sharing this tool helps promote the language of the Quran, contributing indirectly to spreading Islam. The Prophet (peace be upon him) said:  

<div align="center">
  <h4>Whoever guides someone to virtue will be rewarded equivalent to him who practices that good action.</h4>
</div>
<div align="center">Source: <a href="https://sunnah.com/riyadussalihin:173">(Sahih Muslim)</a>.</div>

---
Therefore, we appreciate mentioning/attributing the tool when using or straight-up sharing it with people.

**Example of mentions/referrals**:
- This page was created using the 'Arabiyy' tool.