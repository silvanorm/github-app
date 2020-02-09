'use strict'

// const merge = require('webpack-merge')
// const common = require('./webpack.common')
const path = require('path')
const webpack = require('webpack')

const HtmlPlugin = require('html-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')

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
    new DashboardPlugin(),
    new HtmlPlugin({
      title: 'GitHub App',
      template: path.join(__dirname, 'src', 'html', 'template.html')
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
      test: /\.css$/i,
      exclude: /node_modules/,
      include: /src/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }]
  },

  resolve: {
    alias: {
      src: path.join(__dirname, 'src'),
      components: path.join(__dirname, 'src', 'components'),
      utils: path.join(__dirname, 'src', 'utils')
    }
  }
}
