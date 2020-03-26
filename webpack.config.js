const webpack = require('webpack');
const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');


module.exports = (env, options) => {
  const isProduction = options.mode === 'production';
  const config = {
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? 'none' : 'source-map',
    watch: !isProduction,
    entry: './src/index.js',
    output: {
      filename: 'script.js',
      path: path.join(__dirname, '/dist'),
    },

    plugins : [
      new CleanWebpackPlugin()
    ]
  }
  return config;
};

