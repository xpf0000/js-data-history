const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  mode: 'production',
  entry: {
    app: ['./src/index.js']
  },
  externals: {
    Vue: 'vue',
    vue: 'Vue'
  },
  output: {
    path: resolve('dist'),
    filename: 'JsDataHistory.js',
    library: 'JsDataHistory',
    libraryTarget: "umd",
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src')]
      },
      {
        test: /\.js$/,
        include: [resolve('src')],
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}
