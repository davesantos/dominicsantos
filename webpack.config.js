const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports =  {
  context: path.join(__dirname, '_webpack'),
  mode: 'none',
  entry: './main.js',
  output: {
    path: path.join(__dirname, 'js', 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], { root: path.resolve(__dirname, 'js'), verbose: true }),
  ],
  module: {

    rules: [
    {
      test: /flickity/,
      use: [{
        loader: 'imports-loader?define=>false&this=>window'
      }]
    }
    ]
  }
};