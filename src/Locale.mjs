/**
 * Import a locale, register and set on Leaflet.
 */

import LOCALES from '../locale/index.mjs';

export default function createLocale (L, location, addToL = true) {
  console.assert(L && L.registerLocale && L.setLocale, "'L.i18n' plugin needed");

  class Locale {
    constructor (L, location, localeArray) {
      this._L = L;
      this._location = location;
      this._localeArray = localeArray;
    }

    get L () { return this._L; }
    get locales () { return this._localeArray; }
    get codes () { return this.locales.map((loc) => loc.code); }
    get regex () { return /[?&]lang=(fr|en-TEST)/; }

    findLocale (file) {
      return this.locales.find((loc) => loc.file === file);
    }

    /* async importLocale (file) {
      return await import(`./${file}.js`);
    } */

    fromUrl () {
      const MATCH = this._location.search.match(this.regex);
      return MATCH ? MATCH[1] : null;
    }

    async load (FILE) {
      if (FILE) {
        const { code, locale } = this.findLocale(FILE);
        // Was: const { LOCALE, CODE } = await this.importLocale(FILE);

        this.L.registerLocale(code, locale);
        this.L.setLocale(code);

        console.debug('Locale.load:', code, FILE, locale);
      }
    }
  }

  // Singleton instance.
  const INST = new Locale(L, location, LOCALES);

  if (addToL) {
    L._locale = INST;
    L.l10n = INST; // "localisation" numeronym.
  }

  return INST;
}
