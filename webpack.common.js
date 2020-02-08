'use strict'

const path = require('path')

const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, '..', 'src', 'index'),

  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: '[name]-[hash].js'
  },

  plugins: [
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
      test: /\.css$/,
      exclude: /node_modules/,
      include: /src/,
      use: [
        'style-loader',
        'css-loader?modules'
      ]
    }]
  },

  resolve: {
    alias: {
      src: path.join(__dirname, '..', 'src'),
      components: path.join(__dirname, '..', 'src', 'components')
    }
  }
}
