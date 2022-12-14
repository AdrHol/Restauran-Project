const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    onLoad:'./src/onLoadPage.js',
    about:'./src/about.js',
    contact: './src/contact.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Restaurant Page',
    },)
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
      rules: [
          {
              test:/\.css$/i,
              use:['style-loader', 'css-loader'],
          },
      ],
  }
};