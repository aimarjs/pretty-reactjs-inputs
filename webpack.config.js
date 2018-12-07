const webpack = require('webpack')
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const Autoprefixer = require('autoprefixer')
const devMode = process.env.NODE_ENV !== 'production'

const miniCssExtractPlugin = new MiniCssExtractPlugin({
    filename: path.join(__dirname, 'examples/dist/[name].css'),
    // chunkFilename: "[id].css"
})

const autoprefixer = new webpack.LoaderOptionsPlugin({
    options: {
        postcss: [
            Autoprefixer()
        ]
    }
})

const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, 'examples/src/index.html'),
    filename: "./index.html"
});

const friendlyErrorsWebpackPlugin = new FriendlyErrorsWebpackPlugin()

module.exports = {
    entry: [
        path.join(__dirname, "examples/src/index.js"),
        path.join(__dirname, "src/main.scss"),
    ],
    output: {
        path: path.join(__dirname, "examples/dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    devMode ? "style-loader" : miniCssExtractPlugin.loader, 
                    "css-loader", 
                    "sass-loader", 
                    "postcss-loader"
                ]
            }
        ]
    },
    plugins: [
        htmlWebpackPlugin,
        friendlyErrorsWebpackPlugin,
        miniCssExtractPlugin,
        autoprefixer
    ],
    resolve: {
        extensions: [".js", ".jsx"]
    },
    devServer: {
        port: 3001,
        quiet: true
    }
};