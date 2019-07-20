var webpack = require('webpack');
const path = require('path')

const rootPath = p => path.resolve(__dirname, `../../${p}`)

module.exports = {
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
    noParse: [ /socket.io-client/ ],
  },
  resolve: {
    alias: {
      '@': rootPath('src'),
      'socket.io-client': rootPath(
        'node_modules/socket.io-client/dist/socket.io.js' //MEHHH
      ),
    },
    plugins: [
      new (require('directory-named-webpack-plugin'))(true),
    ],
  },
}
