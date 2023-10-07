/**
 * Import a locale, register and set on Leaflet.
 */

import LOCALES from '../locale/index.mjs';

export default function createLocale (L, location, addToL = true) {
  // Handle dynamic imports better.
  function delayedAssert () {
    console.assert(L && L.registerLocale && L.setLocale, "'L.i18n' plugin needed");
  }

  class Locale {
    constructor (L, location, localeArray) {
      this._L = L;
      this._location = location;
      this._localeArray = localeArray;
    }

    get L () { return this._L; }
    get locales () { return this._localeArray; }

    get codes () { return this.locales.map((loc) => loc.code); }
    get fileIds () { return this.locales.map((loc) => loc.file); }

    /** Case-insensitive Regular Expression.
     */
    get regex () {
      return new RegExp(`[?&]lang=(${this.fileIds.join('|')})`, 'i');
      // Was: return /[?&]lang=(fr|en-TEST)/;
    }

    findLocale (fileId) {
      return this.locales.find((loc) => loc.file === fileId);
    }

    /* async importLocale (file) {
      return await import(`./${file}.js`);
    } */

    get fromUrl () {
      this._fileId = this.getFromUrl();

      return this; // Allow chaining.
    }

    getFromUrl () {
      const MATCH = this._location.search.match(this.regex);
      return MATCH ? MATCH[1] : null;
    }

    async load (fileId = null) {
      delayedAssert();
      this._fileId = fileId || this._fileId;
      if (this._fileId) {
        const LOC = this.findLocale(this._fileId);
        // Was: const { LOCALE, CODE } = await this.importLocale(FILE);
        console.assert(LOC && LOC.code && LOC.locale, `Locale not found: ${this._fileId}`);

        this.L.registerLocale(LOC.code, LOC.locale);
        this.L.setLocale(LOC.code);

        console.debug('Locale.load:', LOC.code, this._fileId, this.regex, LOC.locale);
      }
    }
  }

  // Singleton instance.
  const INST = new Locale(L, location, LOCALES);

  if (addToL) {
    L.translate = INST;
    // L._locale = INST;
    L.l10n = INST; // Deprecated. // "localisation" numeronym.
  }

  return INST;
}
