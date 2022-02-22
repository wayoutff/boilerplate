const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')

const { getStyleLoaders } = require('./webpack.helpers')

function resolve (dir) {
  return path.resolve(__dirname, '../',  dir)
}

const entries = {
  main: resolve('src/index.tsx'),
  // testApp: resolve('testApp/index.tsx')
}

let plugins = []

module.exports = { 
  mode: 'production',
  devtool: 'source-map',
  entry: { ...entries },
  output: {
    path: resolve('dist'),
    filename: '[name].bundle.[contenthash].js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      components: resolve('src/components/'),
      src: resolve('src')
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new HtmlWebpackPlugin({
      template: resolve('public/index.html'),
      publicPath: '../'
    }),
    new webpack.optimize.MinChunkSizePlugin({
      minChunkSize: 10000,
    }),
  ].concat(plugins).filter(Boolean),
  module: {
    rules: [
      {
        test: /\.(j|t)sx$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: getStyleLoaders()
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ['file-loader']
      },
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
}