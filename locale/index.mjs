/**
 * Dynamically import a locale, register and set on Leaflet.
 */

export default class Locale {
  constructor (L, location) {
    console.assert(L && L.registerLocale && L.setLocale, "'L.i18n' plugin");
    this._L = L;
    this._location = location;

    L._locale = this;
  }

  get locales () { return ['en-TEST', 'fr']; }
  get regex () { return /\?lang=(fr|en-TEST)/; }

  async importLocale (file) {
    return await import(`./${file}.js`);
  }

  fromUrl () {
    const MATCH = this._location.search.match(this.regex);
    return MATCH ? MATCH[1] : null;
  }

  async load (FILE) {
    if (FILE) {
      const { LOCALE, CODE } = await this.importLocale(FILE);

      this._L.registerLocale(CODE, LOCALE);
      this._L.setLocale(CODE);
      console.debug('Locale.load:', CODE, FILE, LOCALE);
    }
  }
}
