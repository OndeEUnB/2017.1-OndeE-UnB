const { environment } = require('@rails/webpacker')
const webpack = require('webpack')

environment.plugins.set(
  'Provide',
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    jquery: 'jquery',
    'window.jQuery': 'jquery',
    'window.Tether': 'tether',
    Tether: 'tether',
    Popper: 'popper.js'
  })
)

module.exports = environment
