/*const webpack = require('webpack');
const path = require('path');*/

var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

var BUILD_DIR = path.join(__dirname, 'dist');
var APP_DIR = path.join(__dirname, 'public');

var config = {
  entry: APP_DIR + '/code.js',
  output: { path: BUILD_DIR, filename: './bundle.js' },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: BUILD_DIR,
    open: true
  },
  plugins: [
    new htmlWebpackPlugin({
      template: 'public/index.html'
    })
  ]
};

module.exports = config;

/*
module.exports = {
  // debug: true,
  watch: true,
  devtool: 'cheap-module-eval-source-map',
  target: 'web',

  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.resolve(__dirname, 'public/index')
  ],

  devServer: {
    contentBase: './src',
    port: 3000,
    historyApiFallback: true
  },

  output: {
    path: __dirname + '/dist',
    publicPath: 'http://localhost:3000/',
    filename: 'bundle.js'
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],

  module: {
    loaders: [
      {
        test: /(\.css|\.scss)$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
};*/
