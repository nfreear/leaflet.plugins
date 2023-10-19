
import 'Leaflet';
import 'Leaflet.i18n';
import 'Leaflet.a11y';
import 'Leaflet.translate';

console.debug('App start:', window.L);

const { L } = window;

// Load language pack, based on URL parameter ('?lang=fr').
const LOC = await L.translate.fromUrl.load();
// Or: await L.translate.load('fr');

if (LOC) {
  console.debug('App:', LOC.code, LOC.locale);
} else {
  console.warn('App: no locale loaded!');
}

const MAP = L.map('map', { a11yPlugin: true }).setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: L._('© {OSM} contributors', { OSM: '<a href="https://osm.org/copyright">OpenStreenMap</a>' })
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
