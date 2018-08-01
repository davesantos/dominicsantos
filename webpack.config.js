var path = require('path');
module.exports =  {
  context: path.join(__dirname, 'js'),
  mode: 'none',
  entry: './main.js',
  output: {
    path: path.join(__dirname, 'js'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /flickity/,
      use: [{
        loader: 'imports-loader?define=>false&this=>window'
      }]
    }]
  }
};