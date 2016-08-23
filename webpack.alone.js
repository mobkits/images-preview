var webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  debug: false,
  output: {
    path: '.',
    filename: 'preview.js',
    libraryTarget: 'umd',
    library: 'ImagesPreview'
  },
  module: {
    loaders: [
      {test: /\.jsx?$/, exclude: /(node_modules|dist)/, loader: 'babel', query: { presets: ['es2015']}},
    ]
  },
  plugins:[new webpack.optimize.UglifyJsPlugin({ })]
}
