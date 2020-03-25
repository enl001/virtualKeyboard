const webpack = require('webpack');
const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');


module.exports = (env, options) => {
  const isProduction = options.mode === 'production';
  const config = {
    entry: './src/index.js',
    output: {
      filename: 'script.js',
      path: path.resolve(__dirname, 'dist'),
    },

    plugins : [
      new CleanWebpackPlugin()
    ]
  };
  return config;
};

