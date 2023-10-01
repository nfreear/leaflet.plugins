/**
 * Build a UMD-pattern Leaflet plugin, based on the ESM class.
 *
 * @see AccessibilityPlugin.mjs
 * @see https://github.com/Leaflet/Leaflet/blob/master/PLUGIN-GUIDE.md
 */

import { readFile, writeFile } from 'node:fs/promises';
// import info from '../package.json' with { type: 'json' };

try {
  const PKG = JSON.parse(await readFile('./package.json'));

  const modulePath = PKG.module.replace('src/', '');

  const { default: pluginFunction } = await import(modulePath);

  const CODE = getPluginTemplate(pluginFunction.toString());

  await writeFile(PKG.main, CODE, 'utf8');

  console.warn('Build:', modulePath, PKG.main);
} catch (err) {
  console.error('Build Error:', err)
}

function getPluginTemplate (pluginFunction) {
  return `/* Built: ${new Date().toISOString()} */

(function (factory, window) {
  // define an AMD module that relies on 'leaflet'
  if (typeof define === 'function' && define.amd) { // eslint-disable-line no-undef
    define(['leaflet'], factory); // eslint-disable-line no-undef

    // define a Common JS module that relies on 'leaflet'
  } else if (typeof exports === 'object') {
    module.exports = factory(require('leaflet'));
  }

  // attach your plugin to the global 'L' variable
  if (typeof window !== 'undefined' && window.L) {
    // Was: window.L.a11y = factory(L); // eslint-disable-line no-undef
    factory(L);
  }
}(function (L) {

(${pluginFunction})(L);

}, window));
`;
}
