var path = require('path');
var VueLoaderPlugin = require('./node_modules/vue-loader/lib/plugin')
module.exports = {
  //エントリポイントのJavaScript
  entry: {
    build: ['app/app.js', './app/zipcode_search.vue']
  },
  output: {
    //出力先のフォルダ
    path: path.resolve(__dirname, 'build'),
    //出力先のファイル名
    filename: 'bundle.js'
  },
  module: {
    rules: [
    {
      test: /\.vue$/,
      loader: 'vue-loader',
    }
  ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};
