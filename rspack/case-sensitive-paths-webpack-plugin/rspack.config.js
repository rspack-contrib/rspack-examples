const { defineConfig } = require('@rspack/cli');
const CaseSensitivePlugin = require('case-sensitive-paths-webpack-plugin');

module.exports = defineConfig({
  plugins: [new CaseSensitivePlugin()],
});
