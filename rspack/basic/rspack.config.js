const rspack = require("@rspack/core");
/** @type {import('@rspack/cli').Configuration} */
const config = {
  context: __dirname,
  entry: "./src/index.js",
  plugins: [
    new rspack.HtmlRspackPlugin({
      template: "./index.html",
    }),
  ],
};
module.exports = config;
