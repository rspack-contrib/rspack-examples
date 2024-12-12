import { defineConfig } from '@rsbuild/core';
import { releaseMainPath, rootPath, srcMainPath } from '../common/paths';
import { join } from 'path';
import CommonConfig from '../common/rsbuild.common';

const Config = defineConfig({
  tools: {
    rspack: {
      target: 'electron-main',
    },
  },
  source: {
    entry: {
      index: join(srcMainPath, './index.ts'),
      preload: join(srcMainPath, './preload.ts'),
    },
  },
  output: {
    target: 'node',
    distPath: {
      root: join(releaseMainPath),
    },
    cleanDistPath: true,
  },
});

module.exports = Object.assign(CommonConfig, Config);
