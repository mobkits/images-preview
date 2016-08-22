var cssnext = require('postcss-cssnext')

module.exports = {
  entry: './example/index.js',
  output: {
    path: 'example',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.svg/, loader: 'svg-url-loader'},
      {test: /\.jsx?$/, exclude: /(node_modules|dist)/, loader: 'babel', query: { presets: ['es2015']}},
      {test: /\.css$/, loader: 'style!css!postcss'},
      {test: /\.png$/, loader: 'url-loader?mimetype=image/png'},
      {test: /\.json$/, loader: 'json' },
      {test: /\.html$/, loader: 'html'}
    ]
  },
  postcss: [cssnext()],
  plugins: []
}
