
# v1
## 1.2.0

| <div align="center"><h3>🌟Features</h3></div> | <div align="center"><h3 dir="rtl">🌟‏الميزات</h3></div> |
| :--- | ---: |
| Added support for additional non-Arabic character transformations: (3x `ب` (`b`) → `پ`), (3x `ى` / 3x `ف` → `ڤ`), (3x `غ` / 3x `ج` → `ڠ`) | <div dir="rtl">تَمَّت إضافةُ دَعمٍ لِتَحويلاتِ أحرفٍ غَيرِ عَرَبِيّةٍ إضافِيّة‏:‏ ‏(‏٣× `ب` ← `پ`)، ‏(‏٣× ‏`‏ى` / ٣× ‏`‏ف` ← ‏`‏ڤ`)، ‏(‏٣× ‏`‏غ` / ٣× ‏`‏ج` ← ‏`‏ڠ`)</div> |
| Added numeral type preference toggle with `//رقم ` command to switch between Western (0-9) and Eastern Arabic numerals (٠-٩) (along with `%` -> `٪`) | <div dir="rtl">تَمَّت إضافةُ خاصِيّةِ تَفضيلِ نَوعِ الأرقامِ بِأمرِ `//رقم ` لِلتَّبديلِ بَينَ الأرقامِ العَرَبِيّةِ الغَربِيّةِ (0-9) والعَرَبِيّةِ الشَّرقِيّةِ (٠-٩) (مَعَ ‏`‏%` -> ‏`‏٪`)</div> |
| Added ability to type tanween anywhere using capital vowel + `ne`: `Ane` → `ً`, `One` → `ٌ`, `Ine` → `ٍ` | <div dir="rtl">تَمَّت إضافةُ إمكانِيّةِ كِتابةِ التَّنوينِ في أيِّ مَكانٍ باستِخدامِ حَرفِ العِلّةِ الكَبيرِ ‏+‏ ‏`‏ne‏`‏:‏ ‏`‏Ane` ‏←‏ ‏`ً`‏، ‏`‏One` ‏←‏ ‏`ٌ`‏، ‏`‏Ine` ‏←‏ ‏`ٍ`‏</div> |
| <div align="center"><h3>💪Fixes</h3></div> | <div align="center"><h3 dir="rtl">💪‏الإصلاحات</h3></div> |
| Made writing `يُسَهِّلُ` possible by commenting out a rule on line [`448`](https://github.com/O1Anas/Arabiyy-keyboard/blob/main/source/ArabiyyNumOnShift.kmn#L448) | <div dir="rtl">تَمَّ جَعلُ كِتابةِ `يُسَهِّلُ` مُمكِنةً عَن طَريقِ تَعطيلِ قاعِدةٍ في السَّطرِ [`448`](https://github.com/O1Anas/Arabiyy-keyboard/blob/main/source/ArabiyyNumOnShift.kmn#L448)</div> |
| <div align="center"><h3>🛠️Behind the scenes</h3></div> | <div align="center"><h3 dir="rtl">🛠️‏خَلفَ الكَواليس</h3></div> |
| Reverted the `٪` sign to not be the default output when pressing `%` | <div dir="rtl">أُرجِعَت إشارةُ `٪` كَي لا تَكونَ الإخراجَ الأصلِيَّ عِندَ الضَّغطِ على `%`</div> |

## 1.1.0

| <div align="center"><h3>🌟Features</h3></div> | <div align="center"><h3 dir="rtl">🌟‏الميزات</h3></div> |
| :--- | ---: |
| Added support of manually inserting tashkeel, with uppercase `A`, `O` & `I` | <div dir="rtl">تَمَّت إضافةُ دَعمٍ لِإدخالِ التَّشكيلِ يَدَوِيًّا، بِاستِخدامِ الأحرفِ الكَبيرةِ `A` و `O` و `I`</div> |
| Added new non-arabic letters like `ڠ` with `G`, `پ` with `P`, `ڤ` with `V` | <div dir="rtl">تَمَّت إضافةُ أحرفٍ غَيرِ عَرَبِيّةٍ جَديدةٍ مِثلَ `ڠ` بِواسطةِ `G`، و `پ` بِواسطةِ `P`، و `ڤ` بِواسطةِ `V`</div> |
| Added support of manually inserting shadda with `E` | <div dir="rtl">تَمَّت إضافةُ دَعمٍ لِإدخالِ الشَّدّةِ يَدَوِيًّا بِواسطةِ `E`</div> |
| Assigned a key for `ض` directly, with `p` | <div dir="rtl">تَمَّ تَخصيصُ مِفتاحٍ لِحَرفِ `ض` مُباشَرة، بِواسطةِ `p`</div> |
| Added `u` as another way to insert `ُ` (damma) | <div dir="rtl">تَمَّت إضافةُ `u` كَطَريقةٍ أُخرى لِإدخالِ `ُ` (الضَّمّة)</div> |
| <div align="center"><h3>🛠️Behind the scenes</h3></div> | <div align="center"><h3 dir="rtl">🛠️‏خَلفَ الكَواليس</h3></div> |
| Bumped the keyman version to v17, as the new standard for the `Arabiyy` tool | <div dir="rtl">تَمَّ تَحديثُ إصدارِ Keyman إلى v17، كالمِعيارِ الجَديدِ لأداةِ `Arabiyy`</div> |
| Temporary: Made `)` actually output `()` instead because there's currently no way to insert `)` | <div dir="rtl">مُؤقَّتًا: جُعِلَ `)` يُنتِجُ `()` بِدَلًا مِن ذَلِكَ لِأنَّهُ لا يوجَدُ حالِيًّا طَريقةٌ لإدخالِ `)`</div> |
| Made the `٪` sign the default output when pressing `%` | <div dir="rtl">جُعِلَت إشارةُ `٪` هي الإخراجَ الأصلِيَّ عِندَ الضَّغطِ على `%`</div> |
| Made the `*` sign the default output when pressing `µ` in `NumOnShift` keyboard (It was missing, needed for writing markdown) | <div dir="rtl">جُعِلَت إشارةُ `*` هي الإخراجَ الأصلِيَّ عِندَ الضَّغطِ على `µ` في لَوحةِ مَفاتيحِ `NumOnShift` (كانَت مَفقودة، ومَطلوبةً لِكِتابةِ Markdown)</div> |

## 1.0.0
- Initial release
- Basic functionality
- Support for Windows, macOS, and Linux
- Basic documentation
- Basic support for numbers on shift

# Template
## a.x.y

<div align="center"><h1>Changes - التَّغَيُّرات</h1></div>

| <div align="center"><h3>🌟Features</h3></div> | <div align="center"><h3 dir="rtl">🌟‏الميزات</h3></div> |
| :--- | ---: |
| - | <div dir="rtl">-</div> |
| <div align="center"><h3>💪Fixes</h3></div> | <div align="center"><h3 dir="rtl">💪‏الإصلاحات</h3></div> |
| - | <div dir="rtl">-</div> |
| <div align="center"><h3>🛠️Behind the scenes</h3></div> | <div align="center"><h3 dir="rtl">🛠️‏خَلفَ الكَواليس</h3></div> |
| - | <div dir="rtl">-</div> |