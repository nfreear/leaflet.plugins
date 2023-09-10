/**
 * @file Javascript module (ES6)
 * @summary Test English locale - Add [Z] to the end of each string, for demo/debugging.
 */

export const CODE = 'en';
export const LOCALE = {
  // Attribution - Leaflet, OpenStreetMap, ...
  'A JavaScript library for interactive maps': 'A JavaScript library for interactive maps [Z]',
  '© OpenStreetMap': '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> [Z]',
  // Controls.
  'Close popup': 'Close popup [Z]', // Popup close button.
  map: 'map [Z]', // mapContainerElem.ariaLabel, mapContainerElem.ariaRoleDescription.
  Marker: 'Marker [Z]', // Default ALT text.
  'Marker: {name}': 'Marker: {name} [Z]',
  'Zoom in': 'Zoom in [Z]', // Zoom control.
  'Zoom out': 'Zoom out [Z]',
  // Example strings.
  'Hello world!': 'Hello world! [Z]',
  'Hello! I’m a translation test.': 'Hello! I’m a translation test. [Z]',
  'I am a standalone popup.': 'I am a standalone popup. [Z]'
};

export default LOCALE;
