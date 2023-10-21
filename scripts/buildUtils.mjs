/**
 *
 * @see https://github.com/jestjs/jest/blob/main/scripts/buildUtils.mjs
 */

import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

export const PACKAGES = [
  'L.keyboard-help',
  'Leaflet.a11y',
  'Leaflet.translate'
];

export const PACKAGES_DIR = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../packages'
);

export const require = createRequire(import.meta.url);

export function getPackages () {
  return PACKAGES.map((dir) => {
    const pkgPath = packagePath(dir, 'package.json');

    const isTranslate = dir === 'Leaflet.translate';

    const { name, main, module, style, version } = require(pkgPath);
    // const PKG = JSON.parse(await readFile(pkgPath));

    const modulePath = packagePath(dir, module);
    const mainPath = packagePath(dir, main);
    const stylePath = style ? packagePath(dir, style) : null;

    return { name, version, dir, isTranslate, main, module, modulePath, mainPath, style, stylePath };
  });
}

export function readPkg (pkgName) {
  const pkgPath = packagePath(pkgName, 'package.json');
  return require(pkgPath);
}

export function packagePath (pkgName, fileName) {
  return path.resolve(PACKAGES_DIR, pkgName, fileName);
}

export function projectPath (dir) {
  return path.resolve(PACKAGES_DIR, '..', dir);
}

export function getPluginTemplate (pluginFunction, externalData) {
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

const externalData = ${JSON.stringify(externalData)};

(${pluginFunction})(L, externalData);

}, window));
`;
}
