// @ts-check
import { defineConfig } from "@rspack/cli";
import { rspack } from "@rspack/core";
import path from "path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
const isProduction = process.env.NODE_ENV === "production";

export default defineConfig({
  entry: {
    main: "./src/index.jsx",
  },
  experiments: {
    css: true,
  },
  resolve: {
    extensions: ["...", ".jsx"],
    alias: {
      "@swc/helpers": path.dirname(
        require.resolve("@swc/helpers/package.json")
      ),
    },
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        use: {
          loader: "builtin:swc-loader",
          /**
           * @type {import('@rspack/core').SwcLoaderOptions}
           */
          options: {
            jsc: {
              parser: {
                syntax: "ecmascript",
                jsx: true,
              },
              transform: {
                react: {
                  runtime: "automatic",
                  development: !isProduction,
                },
              },
              experimental: {
                plugins: [
                  [
                    "@swc/plugin-remove-console", // need to use specific version to be compatible with rspack's internal swc version
                    {
                      exclude: ["error"],
                    },
                  ],
                  ["@swc/plugin-prefresh", {}],
                  ["@swc/plugin-emotion", {}],
                  ["@swc/plugin-loadable-components", {}],
                  [
                    "@swc/plugin-relay",
                    {
                      rootDir: __dirname,
                      artifactDirectory: "src/__generated__",
                      language: "typescript",
                    },
                  ],
                  ["@swc/plugin-styled-components", {}],
                  ["@swc/plugin-styled-jsx", {}],
                  ["@swc/plugin-transform-imports", {}],
                  // TODO: these plugins are not yet updated to `swc_core` v9
                  // ['@lingui/swc-plugin', {}],
                  // ['swc-plugin-css-modules', {}],
                  // ['swc-plugin-vue-jsx', {}],
                ],
              },
            },
          },
        },
        type: "javascript/auto",
      },
      {
        test: /\.(png|svg|jpg)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new rspack.HtmlRspackPlugin({
      template: "./index.html",
    }),
  ],
});
