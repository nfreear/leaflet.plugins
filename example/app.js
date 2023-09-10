/**
 * Import Leaflet and our plugins; dynamically import locale.
 * Then create a map and add some pins and popups.
 *
 * @file Javascript module (ES6)
 */

import 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
import 'https://unpkg.com/leaflet-i18n@0.3.3/Leaflet.i18n.js';

import './Leaflet.a11y.js';

console.debug('App start:', window.L);

const { L, location } = window;
const REGEX_LOCALE = /\?lang=(fr|en-TEST)/;

await importAndSetLocale(location, L);

const MAP = L.map('map')
  // Initialize the accessibility plugin, before 'setView'.
  .whenReady(ev => L.a11y.onLoad(ev))
  // Or: .on('load', ev => L.a11y.onLoad(ev))
  .setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: L._('© OpenStreetMap')
}).addTo(MAP);

L.marker([51.5, -0.09], {
  alt: L._('Marker: {name}', { name: 'Sterry Street, London, SE1 4NE' }),
  title: L._('Marker: {name}', { name: 'Sterry Street, London, SE1 4NE' })
})
  .addTo(MAP)
  .bindPopup(L._('Hello! I’m a translation test.'));

L.marker([51.5055, -0.098888], { interactive: false }).addTo(MAP);

L.popup()
  .setLatLng([51.513, -0.09])
  .setContent(L._('I am a standalone popup.'))
  .openOn(MAP);

console.debug('App end:', L.a11y, MAP, L);

async function importAndSetLocale (location, L) {
  const MATCH = location.search.match(REGEX_LOCALE);
  const FILE = MATCH ? MATCH[1] : null;

  if (FILE) {
    const { LOCALE, CODE } = await import(`./locale/${FILE}.js`);

    L.registerLocale(CODE, LOCALE);
    L.setLocale(CODE);
    console.debug('Set locale:', CODE, FILE, LOCALE);
  }
}

// End.
