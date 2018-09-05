const path = require('path');
module.exports =  {
  context: path.join(__dirname, '_webpack'),
  mode: 'none',
  entry: './main.js',
  output: {
    path: path.join(__dirname, 'js', 'dist'),
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