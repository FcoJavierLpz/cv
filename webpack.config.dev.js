const path = require('path'),
  MiniCssExtractPlugin = require('mini-css-extract-plugin'),
  HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/js/index.ts',
  output: {
    filename: './js/bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [{
            // Creates `style` nodes from JS strings
            // fallback to style-loader in development
            loader: 'style-loader'
          },
          {
            // Translates CSS into CommonJS
            loader: 'css-loader'
          },
          {
            // Compiles Sass to CSS
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
            loader: 'file-loader',
            },
        ],
      },
      {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
              'file-loader',
          ],
      },
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".css", ".scss"]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: './css/style.css'
    }),
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  devServer: {
    compress: true,
    port: 8888,
    inline: true
  },
  // Default mode for Webpack is production.
  // Depending on mode Webpack will apply different things
  // on final bundle. For now we don't need production's JavaScript
  // minifying and other thing so let's set mode to development
  // mode: 'development'
};