const { defineConfig } = require('@rspack/cli');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = defineConfig({
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
});
