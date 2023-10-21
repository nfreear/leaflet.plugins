/**
 * CLI: Copy Javascript & CSS files to example directory.
 */

import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getPackages, projectPath } from './buildUtils.mjs';

const destinationDir = projectPath('example/lib/');

try {
  const PR = getPackages().map(async (PKG, idx) => {
    const destMainPath = path.resolve(destinationDir, PKG.main);
    await fs.copyFile(PKG.mainPath, destMainPath);

    console.warn('✅ Copying:', idx, PKG.main);

    if (PKG.style) {
      const destStylePath = path.resolve(destinationDir, PKG.style);
      await fs.copyFile(PKG.stylePath, destStylePath);

      console.warn('✅ Copying:', idx, PKG.style);
    }
  });

  await Promise.all(PR);
} catch (err) {
  console.error('❌ Copy Error:', err);
  process.exit(1);
}
