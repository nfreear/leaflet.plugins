/**
 * Build a UMD-pattern Leaflet plugin, based on the ESM class.
 *
 * @see AccessibilityPlugin.mjs
 * @see https://github.com/Leaflet/Leaflet/blob/master/PLUGIN-GUIDE.md
 */

import * as fs from 'node:fs/promises';
import { getPluginTemplate, getPackages } from './buildUtils.mjs';
// import info from '../package.json' with { type: 'json' };

try {
  await getPackages().map(async (PKG, idx) => {
    // .
    const { default: pluginFunction } = await import(PKG.modulePath);

    const CODE = getPluginTemplate(pluginFunction.toString());

    await fs.writeFile(PKG.mainPath, CODE, 'utf8');

    console.warn('Build:', idx, `${PKG.name}@${PKG.version}\t`, PKG.module, PKG.main);
  });
} catch (err) {
  console.error('Build Error:', err);
}
