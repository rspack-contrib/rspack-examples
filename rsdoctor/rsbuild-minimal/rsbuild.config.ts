import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { RsdoctorRspackPlugin } from '@rsdoctor/rspack-plugin';

export default defineConfig({
  plugins: [pluginReact()],
  tools: {
    bundlerChain: (chain) => {
      process.env.RSDOCTOR === 'true' && chain.plugin('Rsdoctor').use(RsdoctorRspackPlugin, [{}]);
    }
  },
});
