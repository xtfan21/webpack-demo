module.exports = (idDev) => {
    return {
        module: {
            rules: [
                {
                    test: /\.(le|c)ss/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'style-loader'
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                url: true, // 启用/禁用 url() 处理
                                sourceMap: false // 启用/禁用 Sourcemaps
                            }
                        },
                        {
                            loader: 'resolve-url-loader'
                        },
                        {
                            loader: 'less-loader',
                            options: {
                                sourceMap: false // 启用/禁用 Sourcemaps
                            }
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
                                name: 'img/[name].[hash:7].[ext]'
                                // publicPath: '/dist'
                            }
                        }
                    ]
                }
            ]
        }
    }
};
