const path = require('path'),
  MiniCssExtractPlugin = require('mini-css-extract-plugin'),
  HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    filename: './js/bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/'
  },
  module: {
    rules: [{
      test: /\.s[ac]ss$/i,
      use: [{
          // Creates `style` nodes from JS strings
          // fallback to style-loader in development
          loader: process.env.NODE_ENV !== 'production' ?
            'style-loader' :
            MiniCssExtractPlugin.loader,
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
    }]
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
    port: 8080,
    inline: true
  },
  // Default mode for Webpack is production.
  // Depending on mode Webpack will apply different things
  // on final bundle. For now we don't need production's JavaScript
  // minifying and other thing so let's set mode to development
  // mode: 'development'
};