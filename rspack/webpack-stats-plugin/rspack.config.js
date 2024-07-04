const { defineConfig } = require('@rspack/cli');
const { StatsWriterPlugin } = require('webpack-stats-plugin');

module.exports = defineConfig({
  plugins: [new StatsWriterPlugin()],
});
