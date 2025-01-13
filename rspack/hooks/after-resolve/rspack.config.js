const { rspack } = require('@rspack/core');
/** @type {import('@rspack/cli').Configuration} */
const config = {
  entry: './src/index.js',
  plugins: [
    new rspack.HtmlRspackPlugin({
      template: './index.html',
    }),
    {
      /**
       *
       * @param {import('@rspack/core').Compiler} compiler
       */
      apply(compiler) {
        compiler.hooks.normalModuleFactory.tap('nmf', (nmf) => {
          nmf.hooks.afterResolve.tap('afterResolver', (data) => {
            console.log('data:', data.createData?.resource);
          });
        });
      },
    },
  ],
};
module.exports = config;
