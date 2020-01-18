const path = require("path");
const loaders = require("./loaders");
const webpack = require("webpack");
const plugins = require("./plugins");

module.exports = {
    entry: ["./src/app.ts"],
    module: {
        rules: [loaders.jsLoader]
    },
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "js/[name].bundle.js",
        publicPath: "/"
    },
    resolve: {
        extensions: [" ", ".js", ".ts"]
    },
    devServer: {
        contentBase: "./dist",
        port: 3004,
        hot: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};