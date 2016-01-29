// doc about config: https://webpack.github.io/docs/configuration.html

module.exports = {
  entry: './src/newindex.js',
  output: {
    path: './dist',
    publicPath: '/dist/',  // bundle 的 url 地址
    filename: 'bundle.js'
  },

  //  source-map url 放到 js 后面
  devtool: 'inline-source-map',

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      { test: /\.css$/,exclude: /node_modules/, loader: 'style!css' },

      // sassLoader: https://github.com/jtangelder/sass-loader
      { test: /\.sass$/, loaders: ["style", "css?sourceMap", "sass?sourceMap"] }
    ]
  },

  // support indent syntax of sass. ref: https://github.com/sass/node-sass#indentedsyntax
  sassLoader: {
    indentedSyntax: true
    /*indentType: 'tab'*/
  }
};
