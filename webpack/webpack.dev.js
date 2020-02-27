const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const commonConfig = require("./webpack.common");
const helpers = require("./helper");

module.exports = webpackMerge(commonConfig, {
  devtool: "source-map",
  output: {
    path: helpers.root("dist"),
    filename: "app.min.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/app/index.html",
      inject: true,
      filename: "index.html"
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    host: "0.0.0.0",
    port: 8080,
    useLocalIp: true,
    disableHostCheck: true,
    historyApiFallback: true
  }
});
