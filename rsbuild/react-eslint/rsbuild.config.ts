import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import ESLintPlugin from "eslint-webpack-plugin";

export default defineConfig({
  plugins: [pluginReact()],
  tools: {
    rspack: {
      plugins: [
        new ESLintPlugin({
          extensions: ["js", "jsx", "ts", "tsx"],
        }),
      ],
    },
  },
});
