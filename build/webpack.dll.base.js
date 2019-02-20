var path = require('path');
var webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('../config');

module.exports = {
  // 你想要打包的模块的数组,这里往往是一些第三方的包，我们不会去修改这些包的内容
  //path.resolve(__dirname, '../src/lib/v-hqtable'),
  entry: {
    vendor: [
      'vue/dist/vue.runtime.esm.js',
      'axios',
      'vue-router'
      // path.resolve(__dirname, '../src/lib/searchBox')
      // path.resolve(__dirname, '../src/lib/iwencai.js')
    ]
  }
  // output: {
  //   path: path.join(__dirname, "../static/js-dev"), // 打包后文件输出的位置
  //   filename: "[name].dll.js",
  //   library: "[name]_library"
  //   // vendor.dll.js中暴露出的全局变量名。
  //   // 主要是给DllPlugin中的name使用，
  //   // 故这里需要和webpack.DllPlugin中的`name: '[name]_library',`保持一致。
  // },
};
