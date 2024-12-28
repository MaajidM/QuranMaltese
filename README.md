# Quran Translation in Maltese - Il-Qoran Imqaddes

This repository contains the Quranic translation into Maltese, as found in the **Il-Qoran Imqaddes** edition. The translation was first published in 2008 by a joint effort between Martin R. Zammit, a scholar of Arabic studies, and local imam Muhammad el-Sadi, with support from the World Islamic Call Society (WICS). The translation is a key resource for the Muslim community in Malta and a significant step for the development of the modern Maltese language.

## Background

- **Date of Publication**: 2008
- **Project Partners**:
  - Martin R. Zammit (Arabic studies scholar)
  - Imam Muhammad el-Sadi
  - World Islamic Call Society (WICS), Tripoli, Libya
- **Target Language**: Maltese
- **Number of Speakers of Maltese**: Approximately 500,000 speakers (primarily in Malta)
- **Muslim Community in Malta**: Approximately 30,000 people (2020 estimate)

### Translation Features:

- The translation uses a **page-to-page** format alongside the original Arabic text (in the Ḥafṣ reading).
- The translators maintained a balance between preserving the Qur'anic meaning and adapting it to the Maltese language.
- They used **Arabic loan words** in Maltese (e.g., "Sid" for Sayyid, "ħolqien" for khalāīʾīq, "Sultan" for Sulṭān) while ensuring these words fit within the Qur'anic context.
- **Explanatory translation** method: Words and phrases are often explained in brackets.
- **Divine Names** are listed in both Arabic and Maltese, with similar-sounding terms like "al-Quddūs" becoming "il-Qaddis."
- A **General Dictionary** explains many Arabic terms at the end of the volume.

### Unique Aspects:

- The translation attempts to **preserve Arabic words** where they are used in the Maltese language, adapting them to maintain the Qur’anic meaning.
- A notable feature is the use of **more commonly used words** derived from Arabic in Maltese to translate Qur’anic vocabulary, making the text both accessible and respectful of linguistic traditions.
- The translation is **less theologically-oriented** compared to others, focusing more on a simple, clear rendering of the text with some scholarly explanation.

### Structure of the JSON File

This repository contains a JSON file that holds the translated Quranic text in Maltese. The JSON format includes:

- Surah (Chapter)
- Verse number
- Arabic text
- Maltese translation

Example of the JSON format:

```json
{
  "1": {
    "1": "Inna alhamda lillahi rabbil 'alameen",
    "2": "Al-Rahman al-Rahim",
    "3": "Maliki yawmid-din",
    ...
  },
  "2": {
    "1": "Alif Lam Meem",
    "2": "Zalik al-Kitab la rayba fihi",
    ...
  }
}
