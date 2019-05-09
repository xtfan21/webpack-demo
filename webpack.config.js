const HtmlWbpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    // {
                    //     loader: 'style-loader'   // css打包到js中
                    // },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /\.(png|jpg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 100000,
                            name: '/img/[name].[hash:7].[ext]',
                            publicPath: '/dist'
                        }
                    }
                ]
            }
        ]
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
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),

        new HtmlWbpackPlugin({
            title: 'webpack-demo',
            template: './src/index.html',
            filename: 'index.html'
            // inject: true
        })
    ]
};
