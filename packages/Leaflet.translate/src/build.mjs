/**
 * Custom pre-build step for `Leaflet.translate`.
 *
 * While its small, put ALL locale-data directly in the plugin JS file!
 *
 * @see Locale.mjs
 * @see https://github.com/Leaflet/Leaflet/blob/master/PLUGIN-GUIDE.md
 */

import LOCALES from '../locale/index.mjs';

export default function customPreBuildStep () {
  // For now, just return all the translation data.
  return LOCALES;
}
