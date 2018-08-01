var path = require('path');
module.exports =  {
  entry: path.join(__dirname, 'js', 'all.js'),
  output: {
    path: path.join(__dirname, 'js', 'dist'),
    filename: 'bundle.js'
  }
};