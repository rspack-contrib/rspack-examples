import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import stylexPlugin from 'unplugin-stylex/rspack';

export default defineConfig({
  plugins: [pluginReact()],
  tools: {
    rspack: {
      plugins: [stylexPlugin()],
    },
  },
});
