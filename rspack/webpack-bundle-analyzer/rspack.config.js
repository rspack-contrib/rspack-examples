const { defineConfig } = require('@rspack/cli');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = defineConfig({
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'json',
    }),
  ],
});
