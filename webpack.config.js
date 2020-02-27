// const path = require("path");
// const webpack = require("webpack");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

// const Path = {
//   disPath: path.join(__dirname, "/dist"),
//   srcPath: path.join(__dirname, "/src")
// };

// module.exports = {
//   entry: "./src/app/index.tsx",
//   output: {
//     path: Path.disPath,
//     filename: "bundle.min.js"
//   },
//   resolve: {
//     extensions: [".js", ".jsx", ".json", ".ts", ".tsx"]
//   },
  
//   module: {
//     rules: [
//       {
//         test: /\.(ts|tsx)$/,
//         use: ['babel-loader','ts-loader']
//       },
//       { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
//       {
//         test: /\.scss$/,
//         use: [
//           {
//             loader: "style-loader" // creates style nodes from JS strings
//           },
//           {
//             loader: "css-loader" // translates CSS into CommonJS
//           },
//           {
//             loader: "sass-loader" // compiles Sass to CSS
//           }
//         ]
//       }
//     ]
//   },
//   devServer: {
//     host: '0.0.0.0',
//     port: 8080,
//     useLocalIp: true,
//     disableHostCheck: true,
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: path.join(Path.srcPath, '/app/index.html'),
//       filename: 'index.html'
//     }),
//     new webpack.HotModuleReplacementPlugin()
//   ]
// };

module.exports = require('./webpack/webpack.dev');
