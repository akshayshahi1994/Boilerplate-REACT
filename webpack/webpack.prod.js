const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const commonConfig = require("./webpack.common");
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const helpers = require('./helper');

module.exports = webpackMerge(commonConfig, {
  output: {
    path: helpers.root('dist'),
    filename: "app.min.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/app/index.html",
      inject: true,
      filename: "index.html"
    }),
    new CleanWebpackPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
});
