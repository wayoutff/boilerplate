const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { getLocalIdent, localIdentName } = require('./configHelpers')

const isDev = process.env.NODE_ENV === 'development'
const isProd = process.env.NODE_ENV === 'production'

const getStyleLoaders = extra => {
  let loader = [
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        modules: {
          localIdentName,
          getLocalIdent
        }
      }
    }
  ]

  if (extra) {
    if (Array.isArray(extra)) loader = loader.concat(extra)
    if (typeof extra === 'string') loader.push(extra)
  }

  return loader
}

const getScriptLoaders = preset => {
  const options = {
    presets: ['@babel/env', '@babel/react'],
    plugins: [
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-transform-react-jsx'
    ]
  }
  if (preset) {
    options.presets.push(preset)
  }
  const babelLoader = {
    loader: 'babel-loader',
    options
  }
  return [babelLoader]
}

const getPath = d => path.resolve(__dirname, d)

module.exports = {
  isDev,
  isProd,
  getStyleLoaders,
  getScriptLoaders,
  getPath
}
