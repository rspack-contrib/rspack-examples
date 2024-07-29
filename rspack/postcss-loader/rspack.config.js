const rspack = require('@rspack/core');
/** @type {import('@rspack/cli').Configuration} */
const config = {
  context: __dirname,
  entry: {
    main: './src/index.js',
  },
  experiments: {
    css: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  ['autoprefixer'],
                  [
                    'postcss-plugin-px2rem',
                    {
                      rootValue: 100,
                      unitPrecision: 5,
                      propWhiteList: [],
                      propBlackList: [],
                      exclude: false,
                      selectorBlackList: [],
                      ignoreIdentifier: false,
                      replace: true,
                      mediaQuery: false,
                      minPixelValue: 0,
                    },
                  ],
                ],
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new rspack.HtmlRspackPlugin({
      template: './index.html',
    }),
  ],
};
module.exports = config;
