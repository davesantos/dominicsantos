var path = require('path');
module.exports =  {
  mode: 'none',
  entry: path.join(__dirname, 'js', 'src', 'all.js'),
  output: {
    path: path.join(__dirname, 'js'),
    filename: 'bundle.js'
  }
};