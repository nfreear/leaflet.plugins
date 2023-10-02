/**
 * CLI: Build a UMD-pattern Leaflet plugin, based on the ESM class.
 *
 * @see Locale.mjs
 * @see https://github.com/Leaflet/Leaflet/blob/master/PLUGIN-GUIDE.md
 */

import { readFile, writeFile } from 'node:fs/promises';
import LOCALES from '../locale/index.mjs';
import pluginFunction from './Locale.mjs';

try {
  const INDEX = './locale/index.json';
  const PKG = JSON.parse(await readFile('./package.json'));

  const localeData = JSON.stringify(LOCALES, null, 2);
  const indexData = JSON.stringify({ LOCALES }, null, 2);
  const localeCodes = LOCALES.map(loc => loc.code);

  // const modulePath = PKG.module.replace('src/', '');
  // const { default: pluginKlass } = await import(modulePath);

  const pluginCode = getPluginTemplate(pluginFunction.toString(), localeData);

  await writeFile(PKG.main, pluginCode, 'utf8');
  await writeFile(INDEX, indexData, 'utf8');

  console.warn('Locales:', localeCodes);
  console.warn('Build:', PKG.module, '>', PKG.main, '&', INDEX);
} catch (err) {
  console.error('Build Error:', err);
}

function getPluginTemplate (pluginFunc, localeData) {
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

const LOCALES = ${localeData};

(${pluginFunc})(L, window.location);

}, window));
`;
}
