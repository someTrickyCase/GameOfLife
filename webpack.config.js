const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: "./src/modules/controller.js",
  module: {
    rules: [
      { test: /\.(css)$/, use: ["style-loader", "css-loader"] },
      { test: /\.(js)$/, use: ["babel-loader"] },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  plugins: [new HtmlWebpackPlugin()],
  mode: "production",
};
