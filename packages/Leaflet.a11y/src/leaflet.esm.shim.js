/**
 * Shim to support 3rd-party Leaflet plugins.
 */

import * as Leaflet from 'leaflet.esm';

/**
 * L is modifiable, Leaflet is not!
 */
const L = window.L = { ...Leaflet };

export default L;

// End.
