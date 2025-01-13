const { rspack } = require('@rspack/core');
const path = require('node:path');

/** @type {import('@rspack/cli').Configuration} */
const config = {
  resolve: {
    extensions: ['...', '.ts', '.tsx', '.js', '.jsx'],
  },
  entry: {
    alpha: ['./alpha', './a', 'lodash'],
    beta: ['./beta', './b', './c'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].dll.js',
    library: '[name]_dll_lib',
  },
  plugins: [
    new rspack.DllPlugin({
      path: path.join(__dirname, 'dist', '[name].manifest.json'),
      name: '[name]_dll_lib',
    }),
  ],
};

module.exports = config;
