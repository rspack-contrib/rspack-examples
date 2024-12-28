import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { RsdoctorRspackPlugin } from '@rsdoctor/rspack-plugin';

export default defineConfig({
  plugins: [pluginReact()],
  tools: {
    rspack: (config, { appendPlugins }) => {
      if (process.env.RSDOCTOR === 'true') {
        appendPlugins(
          new RsdoctorRspackPlugin({
            // options
          }),
        );
      }
    },
  },
});
