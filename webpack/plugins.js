const path = require('path');
const _StyleLintPlugin = require("stylelint-webpack-plugin");
const _HtmlWebpackPlugin = require("html-webpack-plugin");

const HtmlWebpackPlugin = new _HtmlWebpackPlugin({
    hash: true,
    filename: path.resolve(__dirname, '../dist/index.html'),
    template: path.resolve(__dirname, '../templates/index.html')
})
const StyleLintPlugin = new _StyleLintPlugin({
    configFile: path.resolve(__dirname, './stylelint.config.js'),
    context: path.resolve(__dirname, '../src'),
    files: '**/*.css',
    failOnError: false,
    quiet: false
})

module.exports = {
    HtmlWebpackPlugin,
    StyleLintPlugin
}