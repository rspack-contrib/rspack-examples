const rspack = require('@rspack/core');
/** @type {import('@rspack/cli').Configuration} */
const config = {
  entry: {
    main: './src/index.jsx',
  },
  resolve: {
    extensions: ['...', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: [
          {
            loader: 'builtin:swc-loader',
            options: {
              sourceMap: true,
              jsc: {
                parser: {
                  syntax: 'ecmascript',
                  jsx: true,
                },
                externalHelpers: true,
                preserveAllComments: false,
                transform: {
                  react: {
                    runtime: 'automatic',
                    throwIfNamespace: true,
                    useBuiltins: false,
                  },
                },
              },
            },
          },
          {
            loader: 'babel-loader',
            options: {
              plugins: ['babel-plugin-react-compiler', '@babel/plugin-syntax-jsx'],
            },
          },
        ],
        type: 'javascript/auto',
      },
      {
        test: /\.(png|svg|jpg)$/,
        type: 'asset/resource',
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
