'use strict';
const path = require('path');

module.exports = {
  entry:  './lib/app.js',
  output: {
    path:     path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.json$/, loader: 'json'},
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
      { test: /\.js$/, include: [/immutable-model/, /blotter/], loader: 'babel' },
      { test: /\.styl/, loader: 'style!css!stylus' },
      // the url-loader uses DataUrls.
      // the file-loader emits files.
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ],
    noParse: /node_modules\/json-schema\/lib\/validate\.js/
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  devtool: 'cheap-source-map'
};
