var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',

  entry: [
    './src/entry'
  ],

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    })
  ],

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      { test: /\.jsx?$/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          plugins: ['transform-runtime'],
          presets: ['es2015', 'react', 'stage-0']
        },
        include: path.join(__dirname, 'src') },
      { test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          plugins: ['transform-runtime'],
          presets: ['es2015', 'react', 'stage-0']
        }, },
      { test: /\.scss?$/,
        loader: 'style!css!sass',
        include: path.join(__dirname, 'css') },
    ]
  }
}
