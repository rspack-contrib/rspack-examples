const { rspack } = require('@rspack/core');
const { sentryWebpackPlugin } = require('@sentry/webpack-plugin');
/** @type {import('@rspack/cli').Configuration} */
const config = {
  entry: './src/index.js',
  plugins: [
    new rspack.HtmlRspackPlugin({
      template: './index.html',
    }),
    sentryWebpackPlugin({}),
  ],
};
module.exports = config;
