const path = require('path');
const rspack = require('@rspack/core');

/** @type {import('@rspack/cli').Configuration} */
const config = {
  entry: './src/index.ts',
  resolve: {
    tsConfig: {
      configFile: path.resolve(__dirname, 'tsconfig.json'),
    },
    extensions: ['...', '.ts'],
  },
  plugins: [
    new rspack.HtmlRspackPlugin({
      template: './index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'builtin:swc-loader',
            /**
             * @type {import('@rspack/core').SwcLoaderOptions}
             */
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
};
module.exports = config;
