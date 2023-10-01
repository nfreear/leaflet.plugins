/**
 * Import Leaflet and our plugins; dynamically import locale.
 * Then create a map and add some pins and popups.
 *
 * @file Javascript module (ES6)
 */

import L from 'leaflet.esm.shim';
import 'Leaflet.i18n';
// import 'Leaflet.a11y';
import accessibilityPlugin from 'Leaflet.a11y.esm';
import Locale from 'Leaflet.locale';

// import createMarker from './lib/InputMarker.mjs';
// import createMarker from './lib/BtnMarker.mjs';

console.debug('App start:', window.L);

accessibilityPlugin(L);
// createMarker(L);

const LOCALE = new Locale(L, window.location);
await LOCALE.load(LOCALE.fromUrl());

const MAP = L.map('map', {
  a11yPlugin: true
})
  .setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: L._('© OpenStreetMap')
}).addTo(MAP);

const MARKER = new L.a11y.Marker([51.5, -0.09], {
// L.marker([51.5, -0.09], {
  alt: L._('Marker: {name}', { name: 'Sterry Street, London, SE1 4NE' }),
  title: L._('Marker: {name}', { name: 'Sterry Street, London, SE1 4NE' })
})
  .addTo(MAP)
  .bindPopup(L._('Hello! I’m a translation test.'));

console.debug('A11y marker', MARKER);

L.marker([51.5055, -0.098888], { interactive: false }).addTo(MAP);

L.marker([51.5044, -0.08555], { icon: L.divIcon(), title: 'PIN' }).addTo(MAP);

L.popup()
  .setLatLng([51.513, -0.09])
  .setContent(L._('I am a standalone popup.'))
  .openOn(MAP);

console.debug('App end:', L.version, MAP, L);

// End.
