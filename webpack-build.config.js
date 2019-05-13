const HtmlWbpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const merge = require('webpack-merge');
const webpackCommon = require('./webpack-common.config.js');

const production = env => ({
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
    },

    optimization: {
        minimizer: [
            // // 压缩css
            new OptimizeCssAssetsPlugin({
                assetNameRegExp: /\.css$/g,
                cssProcessor: require('cssnano'),
                cssProcessorOptions: {
                    discardComments: {removeAll: true},
                    minifyGradients: true
                },
                canPrint: true
            })
        ]
    },

    plugins: [
        // 清理dist文件
        new CleanWebpackPlugin(),

        // css单独打包
        new MiniCssExtractPlugin({
            filename: '[hash:20].css',
            chunkFilename: '[id].css'
        }),

        new HtmlWbpackPlugin({
            title: 'webpack-demo',
            template: './src/index.html',
            filename: 'index.html'
            // inject: true
        })
    ]
});

module.exports = merge(production, webpackCommon(false));
