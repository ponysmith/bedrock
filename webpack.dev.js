const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const path = require('path');

module.exports = merge(baseConfig, {
  mode: 'development',
  watch: true,
  output: {
    path: path.resolve(__dirname, 'docs/themes/bedrock/source/css')
  }
});