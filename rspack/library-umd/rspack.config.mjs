import { defineConfig } from "@rspack/cli";

export default defineConfig({
  mode: "production",
  entry: {
    index: "./src/index.js",
  },
  externalsType: "umd",
  output: {
    iife: false,
    library: {
      type: "umd",
      name: 'rspack_library'
    },
  },
  optimization: {
    concatenateModules: false, // scope hoisting for better output and better treeshaking
    minimize: false, // no need to minify for library
  },
  experiments: {
    rspackFuture: {
      // remove this when https://github.com/web-infra-dev/rspack/issues/7563 is fixed
      bundlerInfo: {
        force: false,
      },
    },
  },
});
