const { defineConfig } = require('@rspack/cli');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = defineConfig({
  plugins: [
    new CopyPlugin([
      {
        from: 'public',
        dist: '.',
      },
    ]),
  ],
});
