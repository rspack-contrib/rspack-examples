import { defineConfig } from '@rsbuild/core';
import { join } from 'path';
import { rootPath, srcPath } from './paths';

const CommonConfig = defineConfig({
  source: {
    alias: {
      '@/src': join(rootPath, './src/'),
      '@/main': join(srcPath, './main/'),
      '@/render': join(srcPath, './render/'),
    },
  },
});

export default CommonConfig;
