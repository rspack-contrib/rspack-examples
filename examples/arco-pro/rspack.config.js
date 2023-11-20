const path = require("path");
const rspack = require("@rspack/core");
const { default: HtmlPlugin } = require("@rspack/plugin-html");

const prod = process.env.NODE_ENV === "production";

/** @type {import('@rspack/cli').Configuration} */
const config = {
	context: __dirname,
	entry: "./src/index.tsx",
	target: ["web", "es5"],
	devServer: {
		port: 5555,
		webSocketServer: "sockjs",
		historyApiFallback: true
	},
	module: {
		rules: [
			{
				test: /\.less$/,
				use: "less-loader",
				type: "css"
			},
			{
				test: /\.module\.less$/,
				use: "less-loader",
				type: "css/module"
			},
			{
				test: /\.svg$/,
				use: "@svgr/webpack"
			},
			{
				test: /\.png$/,
				type: "asset"
			}
		]
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
		}
	},
	output: {
		publicPath: "/",
		filename: "[name].[contenthash].js"
	},
	optimization: {
		realContentHash: true,
		splitChunks: {
			cacheGroups: {
				someVendor: {
					chunks: "all",
					minChunks: 2
				}
			}
		}
	},
	plugins: [
		new HtmlPlugin({
			title: "Arco Pro App",
			template: path.join(__dirname, "index.html"),
			favicon: path.join(__dirname, "public", "favicon.ico")
		}),
		//new rspack.ProgressPlugin({})
	],
	infrastructureLogging: {
		debug: false
	},
	builtins: {
		progress:true
	}
};
module.exports = config;
