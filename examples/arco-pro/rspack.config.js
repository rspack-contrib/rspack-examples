const path = require('path');
const rspack = require('@rspack/core');
const { default: HtmlPlugin } = require('@rspack/plugin-html');
const ReactRefreshPlugin = require('@rspack/plugin-react-refresh');
const prod = process.env.NODE_ENV === 'production';

/** @type {import('@rspack/cli').Configuration} */
const config = {
  context: __dirname,
  entry: './src/index.tsx',
  target: ['web', 'es5'],
  devServer: {
    port: 5555,
    webSocketServer: 'sockjs',
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: 'less-loader',
        type: 'css',
      },
      {
        test: /\.module\.less$/,
        use: 'less-loader',
        type: 'css/module',
      },
      {
        test: /\.svg$/,
        use: '@svgr/webpack',
      },
      {
        test: /\.png$/,
        type: 'asset',
      },
      {
        test: /\.(j|t)s$/,
        exclude: [/[\\/]node_modules[\\/]/],
        loader: 'builtin:swc-loader',
        options: {
          sourceMap: false,
          jsc: {
            parser: {
              syntax: 'typescript',
            },
            externalHelpers: true,
            transform: {
              react: {
                runtime: 'automatic',
                development: !prod,
                refresh: !prod,
              },
            },
          },
          env: {
            targets: 'Chrome >= 48',
          },
        },
      },
      {
        test: /\.(j|t)sx$/,
        loader: 'builtin:swc-loader',
        exclude: [/[\\/]node_modules[\\/]/],
        options: {
          sourceMap: false,
          jsc: {
            parser: {
              syntax: 'typescript',
              tsx: true,
            },
            transform: {
              react: {
                runtime: 'automatic',
                development: !prod,
                refresh: !prod,
              },
            },
            externalHelpers: true,
          },
          env: {
            targets: 'Chrome >= 48',
          },
        },
      },
    ],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  output: {
    publicPath: '/',
    filename: '[name].[contenthash].js',
  },
  optimization: {
    realContentHash: true,
    splitChunks: {
      cacheGroups: {
        someVendor: {
          chunks: 'all',
          minChunks: 2,
        },
      },
    },
  },
  plugins: [
    new HtmlPlugin({
      title: 'Arco Pro App',
      template: path.join(__dirname, 'index.html'),
      favicon: path.join(__dirname, 'public', 'favicon.ico'),
    }),
    new rspack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    !prod && new ReactRefreshPlugin(),
    new rspack.ProgressPlugin({}),
  ],
  infrastructureLogging: {
    debug: false,
  },
};
module.exports = config;
