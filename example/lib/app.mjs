
import 'Leaflet';
import 'Leaflet.i18n';
import 'Leaflet.locale';

console.debug('App start:', window.L);

const { L } = window;

// Load language pack, based on URL parameter ('?lang=fr').
await L.l10n.load(L.l10n.fromUrl());

const MAP = L.map('map', {}).setView([51.505, -0.09], 13);

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

L.popup()
  .setLatLng([51.513, -0.09])
  .setContent(L._('I am a standalone popup.'))
  .openOn(MAP);

// End.
