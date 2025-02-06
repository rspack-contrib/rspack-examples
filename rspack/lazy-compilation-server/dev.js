const rspack = require('@rspack/core');
const { RspackDevServer } = require('@rspack/dev-server');
const Html = require('html-webpack-plugin');

const compiler = rspack({
  entry: './src/index.js',
  context: __dirname,
  plugins: [new Html()],
  experiments: {
    lazyCompilation: {
      backend: {
        server() {
          return devServer.server;
        },
      },
    },
  },
});

const devServer = new RspackDevServer({}, compiler);

devServer.start();
