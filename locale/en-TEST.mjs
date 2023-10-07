/**
 * Test English locale - Add [Z] to the end of each string, for demo/debugging.
 *
 * @file Javascript module (ES6)
 */

export const code = 'en';
export const file = 'en-Test';
export const locale = {
  // Attribution - Leaflet, OpenStreetMap, ...
  'A JavaScript library for interactive maps': 'A JavaScript library for interactive maps [Z]',
  '© OpenStreetMap': '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> [Z]',
  '© {a}OpenStreetMap{/a} contributors': '© {a}OpenStreetMap{/a} contributors [Z]',
  // Controls.
  'Close popup': 'Close popup [Z]', // Popup close button.
  map: 'map [Z]', // mapContainerElem.ariaLabel, mapContainerElem.ariaRoleDescription.
  Marker: 'Marker [Z]', // Default ALT text.
  'Marker: {name}': 'Marker: {name} [Z]',
  'Zoom in': 'Zoom in [Z]', // Zoom control.
  'Zoom out': 'Zoom out [Z]',

  // Keyboard.
  'Keyboard shortcuts': 'Keyboard shortcuts [Z]',
  'Left arrow': 'Left arrow [Z]',
  'Move left': 'Move left [Z]',

  /** Third-party plugins.
   * @see https://github.com/brunob/leaflet.fullscreen
   * @see https://github.com/Leaflet/Leaflet.fullscreen
   * @see https://github.com/domoritz/leaflet-locatecontrol
   */
  'Full Screen': 'Full Screen [Z]',
  'Exit Full Screen': 'Exit Full Screen [Z]',
  'View Fullscreen': 'View Fullscreen [Z]',
  'Exit Fullscreen': 'Exit Fullscreen [Z]',
  'Show me where I am': 'Show me where I am [Z]',
  'Locate Me': 'Locate Me [Z]',

  /** Example strings for Leafletjs.com, etc.
   * @see https://leafletjs.com/
   */
  'Hello world!': 'Hello world! [Z]',
  'Hello! I’m a translation test.': 'Hello! I’m a translation test. [Z]',
  'Hello! I’m an accessibility and translation demo.': 'Hello! I’m an accessibility and translation demo. [Z]',
  'I am a standalone popup.': 'I am a standalone popup. [Z]'
};
