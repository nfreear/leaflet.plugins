
import 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
import 'https://unpkg.com/leaflet-i18n@0.3.3/Leaflet.i18n.js';

import '../Leaflet.a11y.js';

import LOCALE_EN from '../locale/en-TEST.js';
import LOCALE_FR from '../locale/fr.js';

console.debug('App start:', window.L);

const { L } = window;

L.registerLocale('en-TEST', LOCALE_EN);
L.registerLocale('fr', LOCALE_FR);

// L.setLocale('en-TEST');
L.setLocale('fr');

const MAP = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: L._('© OpenStreetMap')
}).addTo(MAP);

const MARKER = L.marker([51.5, -0.09], {
  alt: L._('Marker: {name}', { name: 'Sterry Street, London, SE1 4NE' }),
  title: L._('Marker: {name}', { name: 'Sterry Street, London, SE1 4NE' })
})
.addTo(MAP)
.bindPopup(L._('Hello! I’m a translation test.'));

// Initialize the accessibility plugin - after adding the 'tileLayer' to the map.

L.a11y.initialize(MAP);

console.debug('App end:', MAP, L);

// End.
