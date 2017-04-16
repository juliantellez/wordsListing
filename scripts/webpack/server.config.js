const path = require('path')
const fs = require('fs')

const config = require('../../appConfig')

const nodeModules = fs.readdirSync("node_modules")
.reduce(function(modules, module) {
  if (module === '.bin') {
    return modules
  }

  modules[module] = "commonjs " + module
  return modules
}, {})

const webpackConfig = {
  target: 'node',
  entry: {
    server: path.join(config.SRC, 'scripts/server/main'),
    'static/client': path.join(config.SRC, 'scripts/client/main'),
  },
  output: {
    filename: '[name].js',
    path: config.DEST,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: config.SRC,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
            ['es2015', {modules: false}],
            'stage-0',
            'react',
            ],
          }
        }
      },
    ],
  },
  externals: nodeModules,
}

exports.default = webpackConfig
