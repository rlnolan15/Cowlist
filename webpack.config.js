const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "client/src/index.js"),
  output: {
    path: path.resolve(__dirname, "client/public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node.modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      }
    ]
  }
};
