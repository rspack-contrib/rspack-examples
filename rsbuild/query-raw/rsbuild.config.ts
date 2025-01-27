import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  tools: {
    rspack: (config, { rspack }) => {
      config.module?.rules?.push({
        resourceQuery: /raw/,
        type: 'asset/source',
      });
      config.plugins?.push(
        new rspack.NormalModuleReplacementPlugin(/\?raw$/, (resource) => {
          resource.request = '!' + resource.request;
        }),
      );
    },
  },
});
