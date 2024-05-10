const rspack = require("@rspack/core");
const path = require("path");
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

module.exports = {
    entry: {
        app: "./index.js"
    },
    output: {
        globalObject: "self",
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.ttf$/,
                type: "asset/resource"
            }
        ]
    },
    plugins: [
        new rspack.HtmlRspackPlugin({
            template: "./index.html"
        }),
        new MomentLocalesPlugin({
            localesToKeep: ['es-us', 'ru'],
        }),
    ]
};
