const { defineConfig } = require('@rspack/cli');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AutoImport = require('unplugin-auto-import/rspack').default;

module.exports = defineConfig({
  plugins: [
    AutoImport({
      imports: ['vue'],
    }),
    new VueLoaderPlugin(),
    // the aims of `HtmlWebpackPlugin` is ensure
    // `unplugin-auto-import` will not includes `index.html`
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
  experiments: {
    css: true,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          experimentalInlineMatchResource: true,
        },
      },
    ],
  },
});
