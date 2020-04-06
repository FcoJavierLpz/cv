const path = require("path"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/js/index.ts",
  output: {
    filename: "./js/bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            // Creates `style` nodes from JS strings
            loader: MiniCssExtractPlugin.loader,
          },
          {
            // Translates CSS into CommonJS
            loader: "css-loader",
          },
          {
            // Compiles Sass to CSS
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]?[hash]",
          publicPath: "src/images",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".css", ".scss"],
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "./css/style.css",
    }),
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new CleanWebpackPlugin(),
  ],
  // Default mode for Webpack is production.
  // Depending on mode Webpack will apply different things
  // on final bundle. For now we don't need production's JavaScript
  // minifying and other thing so let's set mode to development
  // mode: 'development'
};
