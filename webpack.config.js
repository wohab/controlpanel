const path= require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractsPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports= {
    mode: 'development',
    entry: {
        'app':              './src/index.js',
        'assets/js/banner': './src/assets/js/banner.js',
    },
    output: {
        publicPath: '/',
        path: path.join(__dirname, '/app'),
        filename: '[name].js',
    },
    devServer: {
        static: path.join(__dirname, '/app'),
        port: 8081,
        devMiddleware: {
            writeToDisk: true,
        },
        open: true,
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    },
                ],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use : [
                    MiniCssExtractsPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(svg|eot|woff|woff2|ttf)$/,
                exclude: /images/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/fonts',
                        }
                    }
                ]
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false}),
        new OptimizeCssAssetsPlugin({}),
        new MiniCssExtractsPlugin({
            filename: "assets/css/styles.css",
        }),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
        }),
        new HtmlWebpackPlugin({
            filename: "components/button.html",
            template: "./src/components/button.html",
        }),
        new HtmlWebpackPlugin({
            filename: "components/textfild.html",
            template: "./src/components/textfild.html",
        }),
        new HtmlWebpackPlugin({
            filename: "components/card.html",
            template: "./src/components/card.html",
        }),
        new HtmlWebpackPlugin({
            filename: "components/banner.html",
            template: "./src/components/banner.html",
        }),
    ]
}