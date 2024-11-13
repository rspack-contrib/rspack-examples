
const rspack = require('@rspack/core')
const path = require('node:path');

/** @type {import('@rspack/cli').Configuration} */
const config = {
  entry: './index',
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['...', '.ts', '.tsx', '.js', '.jsx']
  },
  plugins: [
    new rspack.DllReferencePlugin({
      manifest: path.resolve(__dirname, '../dll/dist/alpha.manifest.json'),
      extensions: ['.js', '.ts'],
    }),
    new rspack.DllReferencePlugin({
      manifest: path.resolve(__dirname, '../dll/dist/beta.manifest.json'),
      scope: 'beta',
      extensions: [".js", ".jsx", '.ts', '.tsx']
    }),
  ],
  mode: 'development'
}

module.exports = config; 
