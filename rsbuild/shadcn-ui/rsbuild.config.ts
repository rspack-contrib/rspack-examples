import path from 'path';
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  source: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [pluginReact()],
});
