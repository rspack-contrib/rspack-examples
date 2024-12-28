import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { UnoCSSRspackPlugin } from '@unocss/webpack/rspack';
import { presetAttributify } from '@unocss/preset-attributify';
import { presetUno } from '@unocss/preset-uno';

export default defineConfig({
  plugins: [pluginReact()],
  tools: {
    rspack: {
      plugins: [
        UnoCSSRspackPlugin({
          presets: [presetUno(), presetAttributify()],
        }),
      ],
    },
  },
});
