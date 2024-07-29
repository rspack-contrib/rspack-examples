const rspack = require('@rspack/core');

/** @type {import('@rspack/cli').Configuration} */
const config = {
  entry: {
    main: {
      import: ['./index.js'],
    },
  },
  module: {
    rules: [],
    parser: {
      asset: {
        dataUrlCondition: {
          maxSize: 1,
        },
      },
    },
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'all',
          name: 'vendor',
          test: /common/,
        },
      },
    },
  },
  plugins: [new rspack.HtmlRspackPlugin()],
};

module.exports = config;
