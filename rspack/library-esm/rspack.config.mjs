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
    minimize: false, // no need to minify for library
  },
  experiments: {
    outputModule: true
  },
});
