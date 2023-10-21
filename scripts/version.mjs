/**
 * CLI: Check whether package versions match the root package version.
 */

import { getPackages, readPkg } from './buildUtils.mjs';

const ROOT = readPkg('..');

console.warn('Root version:', ROOT.version);

try {
  const PR = getPackages().map(async (PKG, idx) => {
    if (ROOT.version !== PKG.version) {
      console.error(`❌ Package version mis-match: ${PKG.name} is on ${PKG.version}`);
      process.exit(1);
    }
  });

  await Promise.all(PR);
} catch (err) {
  console.error('Version Error:', err);
  process.exit(1);
}

console.warn('✅ Package versions match.');
