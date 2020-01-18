const path = require('path');

const jsLoader = {
    test: /\.(js|ts)$/,
    // exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: [
                '@babel/preset-typescript',
                '@babel/preset-env'
            ]
        }
    }
}

const esLintLoader = {
    test: /\.js$/,
    enforce: 'pre',
    exclude: /node_modules/,
    use: {
        loader: 'eslint-loader',
        options: {
            configFile: path.resolve(__dirname + '/.eslintrc')
        }

    }
}

module.exports = {
    jsLoader,
    esLintLoader
};