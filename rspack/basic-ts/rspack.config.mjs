// @ts-check
import path from "path";
import { rspack } from "@rspack/core";
import { defineConfig } from "@rspack/cli";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  entry: "./src/index.ts",
  resolve: {
    tsConfig: {
      configFile: path.resolve(__dirname, "tsconfig.json"),
    },
    extensions: ["...", ".ts"],
  },
  plugins: [
    new rspack.HtmlRspackPlugin({
      template: "./index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: "builtin:swc-loader",
            /**
             * @type {import('@rspack/core').SwcLoaderOptions}
             */
            options: {
              jsc: {
                parser: {
                  syntax: "typescript",
                },
              },
            },
          },
        ],
      },
    ],
  },
});
