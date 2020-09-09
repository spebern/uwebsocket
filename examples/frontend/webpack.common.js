const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const config = {
  entry: {
    app: ["./app.tsx"],
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx", ".less", ".css"],
  },
  module: {
    rules: [
      { test: /\.(ts|tsx)$/, loader: "ts-loader" },
      { test: /\.js$/, enforce: "pre", loader: "source-map-loader" },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      meta: {
        viewport:
          "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no",
        "apple-mobile-web-app-capable": "yes",
      },
      title: "uwebsocket test",
    }),
    new CleanWebpackPlugin(),
  ],
};

module.exports = config;
