/**
 * Development Webpack Configuration
 */

const Dotenv = require('dotenv-webpack');
const { resolve } = require('path');

const webpack = require('webpack');
const DashboardPlugin = require('webpack-dashboard/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const NODE_HOST = 'localhost';
const NODE_PORT = 3000;

const paths = {
  BUILD: resolve(__dirname, 'build'),
  SRC: resolve(__dirname, 'src'),
  PUBLIC: resolve(__dirname, 'public'),
};

module.exports = {

  devtool: 'cheap-module-eval-source-map',

  context: paths.SRC,

  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://${NODE_HOST}:${NODE_PORT}`,
    './',
  ],

  output: {
    filename: 'app-[hash].js',
    path: paths.BUILD,
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx|json)$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: 'url-loader?limit=15000&name=[name]-[hash].[ext]',
      },
      {
        test: /\.eot(\?v=\d+.\d+.\d+)?$/,
        use: 'file-loader',
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
        use: 'url-loader?limit=10000&mimetype=application/octet-stream',
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader?limit=10000&mimetype=image/svg+xml',
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss'],
    alias: {
      public: resolve(__dirname, 'public'),
      shared: resolve(__dirname, 'src/shared'),
      src: resolve(__dirname, 'src'),
      variables: resolve(__dirname, 'src/scss/utils/variables'),
      mixins: resolve(__dirname, 'src/scss/utils/mixins'),
      respond: resolve(__dirname, 'src/scss/utils/respond'),
    },
  },

  devServer: {
    host: NODE_HOST,
    port: NODE_PORT,
    contentBase: paths.PUBLIC,
    publicPath: '/',
    historyApiFallback: true,
    hot: true,
    noInfo: false,
    stats: {
      assets: true,
      children: false,
      chunks: false,
      hash: false,
      modules: false,
      publicPath: true,
      timings: true,
      version: false,
      warnings: true,
      colors: true,
    },
  },

  plugins: [
    new Dotenv({
      path: './.env',
      safe: true,
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/index.html`,
      filename: 'index.html',
      inject: 'body',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new DashboardPlugin(),
  ],

};
