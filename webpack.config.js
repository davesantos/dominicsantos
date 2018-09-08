const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports =  {
  context: path.join(__dirname, '_webpack'),
  mode: 'none',
  entry: './main.js',
  output: {
    path: path.join(__dirname, 'js', 'dist'),
    filename: '[name].bundle.js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], { root: path.resolve(__dirname, 'js'), verbose: true }),
    new CopyWebpackPlugin([{
      from: path.resolve('_uploads'),
      to: '../../uploads/',
    }]),
    new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i })
  ],
  module: {
    rules: [

    ]
  }
};