const HtmlWbpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const webpackCommon = require('./webpack-common.config.js');

const development = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js'
    },

    plugins: [
        // 清理dist文件
        // new CleanWebpackPlugin(),

        new HtmlWbpackPlugin({
            title: 'webpack-demo',
            template: './src/index.html',
            filename: 'index.html'
            // inject: true
        })
    ]
};
module.exports = merge(development, webpackCommon(true));
