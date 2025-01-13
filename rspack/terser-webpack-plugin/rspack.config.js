const { defineConfig } = require('@rspack/cli');
const TerserPlugin = require('terser-webpack-plugin');
const { StatsWriterPlugin } = require('webpack-stats-plugin');
const { rspack } = require('@rspack/core');

module.exports = defineConfig({
  plugins: [new StatsWriterPlugin()],
  optimization: {
    minimizer: [new TerserPlugin(), new rspack.LightningCssMinimizerRspackPlugin()],
  },
});
