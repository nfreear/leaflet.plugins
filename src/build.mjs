/**
 * Build a UMD-pattern Leaflet plugin, based on an ESM class.
 *
 * @see https://github.com/Leaflet/Leaflet/blob/master/PLUGIN-GUIDE.md
 */

// import AccessibilityPlugin from 'src/AccessibilityPlugin.esm.js';

import { readFile } from 'fs/promises';
// import info from '../package.json' with { type: 'json' };

// const json = await readFile('./package.json', 'utf8')
const PKG = JSON.parse(await readFile('./package.json'));

const modulePath = PKG.module.replace('src/', '');

// console.error('PKG:', moduleName, PKG);

// const PLUGIN_SRC = './src/AccessibilityPlugin.esm.js';
// const PLUGIN_DEST = './Leaflet.a11y._BAK.b.js';

const { default: MyPlugin } = await import(modulePath);

// console.error(Object.getOwnPropertyNames(MyPlugin.prototype));

const NAME = MyPlugin.prototype.constructor.name;
// Was: const KLASS = await getPluginKlass(PKG.module);
const CODE = getPluginTemplate('a11y', NAME, MyPlugin.toString());

console.log(CODE);

// Deprecated.
export async function getPluginKlass (pluginFilePath) {
  const DATA = await readFile(pluginFilePath, 'utf8');
  const MATCH = DATA.match(/class (\w+) \{/);
  const name = MATCH ? MATCH[1] : null;
  // console.log('Name:', KLASS_NAME);
  const decl = DATA.replace(/(export default \w*;)/, '');

  // console.assert(name && decl);
  if (!name || !decl) {
    throw new Error('(build) No class name or declaration found.');
  }

  return { name, decl };
}

function getPluginTemplate (NAME, klassName, pluginCode) {
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
    // window.L.a11y = factory(L); // eslint-disable-line no-undef
    factory(L);
  }
}(function (L) {

(${pluginCode})(L);

}, window));
`;
}
