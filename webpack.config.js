const path = require('path')
const config = require('./config')

const webpackConfig = {
  entry: {
    main: path.join(config.SRC, 'main'),
  },
  output: {
    filename: '[name].js',
    path: config.DEST,
  },
  module: {
    loaders: [
      {
        include: config.SRC,
        loader: 'babel-loader',
        test: /\.js$/,
      },
    ],
  },
}

exports.default = webpackConfig
