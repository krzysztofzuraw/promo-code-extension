const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: { popup: './src/index.tsx' },
  module: {
    rules: [
      { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ },
      { test: /\.css?$/, use: ['style-loader', 'css-loader'] },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({ template: 'src/index.html' }),
    new CopyWebpackPlugin({
      patterns: [{ from: './src/manifest.json' }],
    }),
  ],
  output: { filename: '[name].js', path: path.resolve(__dirname, 'dist') },
};
