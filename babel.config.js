const { generateScopedName, localIdentName } = require('./config/configHelpers')

const presets = [
  '@babel/preset-env',
  '@babel/preset-typescript',
  [
    '@babel/preset-react', {
      runtime: 'automatic'
    }
  ]
]

const plugins = [
  '@babel/plugin-proposal-class-properties',
  'transform-react-jsx',
  // [
  //   'react-css-modules',
  //   {
  //     generateScopedName: generateScopedName(localIdentName),
  //     exclude: 'node_modules',
  //     handleMissingStyleName: 'ignore',
  //     filetypes: {
  //       '.styl': { syntax: 'postcss-styl' }
  //     }
  //   }
  // ]
]

module.exports = {
  presets,
  plugins
}