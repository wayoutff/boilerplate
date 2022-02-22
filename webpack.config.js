const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const { getStyleLoaders } = require('./config/webpack.helpers')

const resolve = (dir) => path.resolve(__dirname, dir)

module.exports = { 
  mode: 'development',
  devtool:'eval-source-map',
  context: __dirname,
  entry: resolve('src/index.tsx'),
  output: {
    path: resolve('dist'),
    filename: '[name].bundle.[contenthash].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      components: resolve('src/components/'),
      src: resolve('src')
      // main: resolve('src/main'),
      // root: resolve('src/root'),
      // admin: resolve('src/admin'),
      // store: resolve('src/store'),
      // public: resolve('public')
    }
  },
  devServer: {
    static: resolve('dist'),
    port: 3001,
    historyApiFallback: true,
    hot: true
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    })
  ].filter(Boolean),
  module: {
    rules: [
      {
        test: /\.(j|t)s(x)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              require.resolve('react-refresh/babel')
            ].filter(Boolean)
          }
        }
      },
      {
        test: /\.css$/,
        use: getStyleLoaders()
      },
      {
        test: /\.styl$/,
        use: getStyleLoaders(['postcss-loader', 'stylus-loader'])
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ['file-loader']
      },
    ]
  }
}