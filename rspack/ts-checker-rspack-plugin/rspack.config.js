const { defineConfig } = require('@rspack/cli');
const { TsCheckerRspackPlugin } = require('ts-checker-rspack-plugin');

module.exports = defineConfig({
  plugins: [new TsCheckerRspackPlugin()],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'builtin:swc-loader',
            options: {
              jsc: {
                parser: {
                  syntax: 'typescript',
                },
              },
            },
          },
        ],
      },
    ],
  },
});
