const rspack = require('@rspack/core');
const { GenerateSW } = require('workbox-webpack-plugin');

/** @type {import('@rspack/cli').Configuration} */
const config = {
  entry: './src/index.js',
  plugins: [
    new rspack.HtmlRspackPlugin({
      template: './index.html',
    }),
    new GenerateSW({}),
  ],
};
module.exports = config;
