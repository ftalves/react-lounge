const path = require('path')

const rootPath = p => path.resolve(__dirname, `../${p}`)

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: rootPath('public/dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
    ],
  },
  resolve: {
    alias: {
      '@': rootPath('src'),
    },
    plugins: [
      new (require('directory-named-webpack-plugin'))(true),
    ],
  },
}
