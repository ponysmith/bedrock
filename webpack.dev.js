const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  // devServer: {
  //   publicPath: '/',
  //   contentBase: './',
  //   hot: true
  // },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          // 'style-loader',
          'css-loader',
          'sass-loader'
        ],
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    // new HtmlWebPackPlugin({
    //   template: "./src/index.html",
    //   filename: "./index.html"
    // })
    new MiniCssExtractPlugin({
      filename: "bedrock.css",
      chunkFilename: "[id].css"
    })
  ]
}