const webpack = require('webpack')
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Autoprefixer = require('autoprefixer')

// const friendlyErrorsWebpackPlugin = new FriendlyErrorsWebpackPlugin()

module.exports = {
    entry: [
        path.join(__dirname, "examples/src/index.js"),
    ],
    output: {      
        path: path.join(__dirname, 'examples/dist'),      
        filename: 'pretty-reactjs-inputs.js',      
        library: 'pretty-reactjs-inputs',      
        libraryTarget: 'umd',      
        publicPath: '/',      
        umdNamedDefine: true  
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                          loader: "css-loader"
                        },
                        {
                          loader: "sass-loader"
                        }
                    ]

                })
              }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'examples/src/index.html'),
            // filename: "index.html"
        }),
        new ExtractTextPlugin({
            filename: "pretty-reactjs-inputs.css",
            disable: false,
            allChunks: true
        }),
        new FriendlyErrorsWebpackPlugin(),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    Autoprefixer()
                ]
            }
        })
        // new BundleAnalyzerPlugin()
    ],
    resolve: {
        extensions: [".js", ".jsx"]
    },
    devServer: {
        port: 3001,
        quiet: false
    }
};