const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const CopyWebpackPlugin = require( 'copy-webpack-plugin' );
const path = require('path');

module.exports = {
    entry: [
        './src/index.js',
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "[name].js"
    },
    plugins: [
        new MiniCssExtractPlugin( {
            filename: 'build/styles.css'
        }),
        new HtmlWebPackPlugin({
            template: "./src/index.html", 
            filename: "./index.html"
        }),
        new CopyWebpackPlugin( {
            patterns: [
                {
                    from: path.resolve( __dirname, 'src/images' ),
                    to: path.resolve( __dirname, 'dist/images' )
                }
            ]
        } ),
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
                use: [ MiniCssExtractPlugin.loader, 'css-loader' ]
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