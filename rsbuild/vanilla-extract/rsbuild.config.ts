import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { VanillaExtractPlugin } from '@vanilla-extract/webpack-plugin';

export default defineConfig({
  plugins: [
    pluginReact({
      reactRefreshOptions: {
        exclude: [/node_modules/, /\.css\.ts$/],
      },
    }),
  ],
  tools: {
    rspack: {
      plugins: [new VanillaExtractPlugin()],
    },
  },
});
