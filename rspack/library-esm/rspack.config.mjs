import { defineConfig } from "@rspack/cli";

export default defineConfig({
  mode: "production",
  entry: {
    index: "./src/index.js",
  },
  externalsType: "module-import",
  output: {
    module: true,
    chunkFormat: "module",
    library: {
      type: "modern-module",
    },
  },
  module: {
    parser: {
      javascript: {
        importMeta: false, // keep import.meta for runtime
      },
    },
  },
  optimization: {
    concatenateModules: true, // scope hoisting for better output and better treeshaking
    minimize: false, // no need to minify for library
  },
  experiments: {
    outputModule: true,
    rspackFuture: { // remove this when https://github.com/web-infra-dev/rspack/issues/7563 is fixed
      bundlerInfo: {
        force: false,
      },
    },
  },
});
