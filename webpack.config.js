'use strict'

const path = require('path')
const webpack = require('webpack')

const HtmlPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  devtool: 'source-map',

  mode: 'development',

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    path.join(__dirname, 'src', 'index')
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]-[hash].js',
    publicPath: ''
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlPlugin({
      title: 'GitHub App',
      template: path.join(__dirname, 'src', 'html', 'template.html')
    }),
    new MiniCssExtractPlugin({
      filename: '[name]-[hash].css',
      chunkFilename: '[id].css'
    })
  ],

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: /src/,
      use: {
        loader: 'babel-loader'
      }
    }, {
      test: /\.css$/,
      exclude: /node_modules/,
      include: /src/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader'
      ]
    }]
  }
}
