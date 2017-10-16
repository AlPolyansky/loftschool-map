let webpack = require('webpack');
let HtmlPlugin = require('html-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let loaders = require('./webpack.config.loaders')();
let path = require('path');

loaders.push({
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract({
      use: ['css-loader', 'autoprefixer-loader?browsers=last 2 versions', 'sass-loader?sourceMap'],
      fallbackLoader: 'style-loader'
    })
  }
);

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: path.resolve('dist')
  },
  devtool: 'source-map',
  module: {
    loaders
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //     sourceMap: true,
    //     compress: {
    //         drop_debugger: false
    //     }
    // }),
    new ExtractTextPlugin('styles.css'),
    new HtmlPlugin({
      title: 'Loft School sample project',
      template: './src/templates/index.hbs'
    }),
    new CleanWebpackPlugin(['dist'])
  ]
};