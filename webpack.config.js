const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const BUILD_DIR = path.resolve(__dirname, './build');
const SRC_DIR = path.resolve(__dirname, './src');
const NODE_MODULES_DIR = path.resolve(__dirname, '.', 'node_modules');

const config = {
  mode: 'development',
  entry: {
    root: SRC_DIR + '/root.js',
    render: SRC_DIR + '/render.js',
  },
  output: {
    path: BUILD_DIR
  },
  plugins: [
    new MiniCssExtractPlugin(),    
  ],
  module : {
    rules : [
      {
        test : /\.js?$/,
        include: SRC_DIR,
        use: ['babel-loader']
      },
      {
        test : /\.css?$/,
        use: [
          MiniCssExtractPlugin.loader, 
          {
            loader: 'css-loader',
            options: {
              modules: true,
              camelCase: true
            }
          }
        ],
        include: SRC_DIR,
      }
    ]
  },
};

module.exports = config;
