import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import { pluginEslint } from '@rsbuild/plugin-eslint';

export default defineConfig({
  plugins: [
    pluginVue(),
    pluginEslint({
      eslintPluginOptions: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
        fix: true,
      },
    }),
  ],
});
