import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginLightningcss } from '@rsbuild/plugin-lightningcss';

export default defineConfig({
  plugins: [pluginReact(), pluginLightningcss()],
});
