const rspack = require('@rspack/core');
/** @type {import('@rspack/cli').Configuration} */
const config = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /answer\.css$/,
        use: [
          {
            loader: 'builtin:lightningcss-loader',
            /** @type {import('@rspack/core').LightningcssLoaderOptions} */
            options: {
              targets: 'ie 10',
            },
          },
        ],
        type: 'css',
      },
      {
        test: /.css$/,
        use: [
          rspack.CssExtractRspackPlugin.loader,
          'css-loader',
          {
            loader: 'builtin:lightningcss-loader',
            /** @type {import('@rspack/core').LightningcssLoaderOptions} */
            options: {
              targets: 'ie 10',
            },
          },
        ],
        type: 'javascript/auto',
      },
    ],
  },
  plugins: [
    new rspack.HtmlRspackPlugin({
      template: './index.html',
    }),
    new rspack.CssExtractRspackPlugin(),
  ],
  experiments: {
    css: true,
  },
};
module.exports = config;
