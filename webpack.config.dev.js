/* eslint-disable @typescript-eslint/no-var-requires */

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
let DIST_DIR = 'build';

console.log(`process.env.BUILD_ENV: ${process.env.BUILD_ENV}`);

if (process.env.BUILD_ENV) {
  DIST_DIR = `${DIST_DIR}/${DIST_DIR}-${process.env.BUILD_ENV}`;

  console.log(DIST_DIR);
}

module.exports = {
  entry: './src/index.tsx',
  devServer: {
    contentBase: [DIST_DIR],
    port: 3004,
  },
  output: {
    filename: 'js/[name].[hash].js',
    path: path.resolve(__dirname, DIST_DIR),
  },
  mode: 'development',
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new WriteFilePlugin(),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
    }),
    new CopyWebpackPlugin([
      // {
      //   from: './src/config/config.js',
      //   to: 'config',
      //   transform(content) {
      //     const str = content.toString('utf8');
      //     return content;
      //   },
      // },
      {
        from: 'src/assets/img',
        to: 'img',
      },
    ]),
    new webpack.DefinePlugin({
      'process.env': {
        BUILD_ENV: JSON.stringify(process.env.BUILD_ENV),
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'awesome-typescript-loader',
          },
        ],
      },
      // Move all fonts into their own dir
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
      // Handle the importing of static images
      {
        test: /\.(gif|png|jpe?g|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[hash].[ext]',
              outputPath: 'img/',
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
};
