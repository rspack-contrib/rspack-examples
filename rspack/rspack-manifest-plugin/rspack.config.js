const { defineConfig } = require('@rspack/cli');
const { WebpackManifestPlugin: RspackManifestPlugin } = require('rspack-manifest-plugin');

module.exports = defineConfig({
  plugins: [
    new RspackManifestPlugin({
      fileName: 'rspack-manifest.json',
      generate: (seed, files, entries) => {
        const manifestFiles = files.reduce((manifest, file) => {
          manifest[file.name] = file.path;
          return manifest;
        }, seed);
        const entrypointFiles = Object.keys(entries).reduce(
          (previous, name) =>
            previous.concat(entries[name].filter((fileName) => !fileName.endsWith('.map'))),
          [],
        );
        return {
          files: manifestFiles,
          entrypoints: entrypointFiles,
        };
      },
    }),
  ],
});
