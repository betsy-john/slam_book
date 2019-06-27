const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/default/main.js',
  output: {
    path: path.join(__dirname, './bundle'),
    filename: 'index_bundle.js'
  },
  devServer: {
    inline: true,
    port: 8080
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextWebpackPlugin.extract({
          use: "css-loader",
        }),
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
      manifest: './public/manifest.json'
    }),
    new ExtractCssChunks(),
    new ExtractTextWebpackPlugin("./src/default/main.css")
  ]
}