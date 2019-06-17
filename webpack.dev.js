const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  watch: true,
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ],
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new MiniCssExtractPlugin({
      filename: "bedrock.css",
      chunkFilename: "[id].css"
    })
  ],
  output: {
    path: path.resolve(__dirname, 'docs/themes/bedrock/source/css')
  }
}