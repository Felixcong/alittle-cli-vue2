var path = require('path');
var webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('../config');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.dll.base');

module.exports = merge(baseWebpackConfig, {
  output: {
    path: path.join(__dirname, '../static'), // 打包后文件输出的位置
    filename: '[name].dll.js',
    library: '[name]_library'
    // vendor.dll.js中暴露出的全局变量名。
    // 主要是给DllPlugin中的name使用，
    // 故这里需要和webpack.DllPlugin中的`name: '[name]_library',`保持一致。
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, '../', '[name]-manifest-build.json'),
      name: '[name]_library',
      context: __dirname
    }),
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false
        }
      },
      parallel: true
    })
  ]
});
