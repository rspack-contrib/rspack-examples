import rspack from "@rspack/core";
import path from 'path';
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('@rspack/cli').Configuration} */
const config = {
	context: __dirname,
	entry: "./src/index.js",
	plugins: [
		new rspack.HtmlRspackPlugin({
			template: "./index.html"
		})
	]
};
export default config;
