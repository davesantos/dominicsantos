var path = require('path');
module.exports =  {
  context: path.join(__dirname, 'js'),
  mode: 'none',
  entry: ['./vendor/flickity.pkgd.min.js', './src/all.js'],
  output: {
    path: path.join(__dirname, 'js'),
    filename: 'bundle.js'
  }
};