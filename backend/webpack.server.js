const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './dist/app.js',

  target: 'node',

  externals: [nodeExternals()],

  output: {
    path: path.resolve('server-build'),
    filename: 'app.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  }
};