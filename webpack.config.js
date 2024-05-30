const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: [
        './src/index.js',
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "[name].js"
    },
    devServer: {
        hot: true,
    },
    plugins: [
        new MiniCssExtractPlugin( {
            filename: 'build/styles.css'
        }),
        new HtmlWebPackPlugin({
            template: "./src/index.html", 
            filename: "./index.html"
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                exclude: /\.module\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: { esModule: true }
                    },
                    {
                        loader: "css-loader"
                    }
                ],
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: { esModule: true }
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader"
                    }
                ],
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: { esModule: true }
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "less-loader"
                    }
                ],
            },
            {
                test: /\.module\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: { esModule: true }
                    },
                    {
                        loader: "css-loader",
                        options: { modules: true }
                    }
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ]
    }
};