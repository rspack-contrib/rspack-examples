import { appTools, defineConfig } from '@modern-js/app-tools';
import { RsdoctorRspackPlugin } from '@rsdoctor/rspack-plugin';

const pluginName = 'Rsdoctor';

export default defineConfig<'rspack'>({
  runtime: {
    router: true,
    state: true,
    intl: {
      clientOptions: {
        apiKey: 'foo',
        namespace: 'ns-a',
      },
      intlOptions: {
        fallbackLng: 'zh',
        ns: ['ns-a'],
        defaultNS: 'ns-a',
      },
    },
  },
  plugins: [
    appTools({
      bundler: 'experimental-rspack',
    }),
  ],
  tools: {
    rspack: (config, { appendPlugins }) => {
      if (process.env.RSDOCTOR === 'true') {
        appendPlugins([new RsdoctorRspackPlugin()]);
      }
    },
  },
});
