/* eslint-disable no-var, vars-on-top, prefer-template, object-shorthand */
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

var paths = require('./paths.js');

var publicPath = '/';

module.exports = {
  entry: [
    // special entry point for HMR
    'webpack/hot/dev-server',

    // bundle for the dev server,
    // and connect to the required endpoint
    'webpack-dev-server/client?' + paths.devServerAddr,

    // entry point for the app
    paths.appIndexJs,
  ],

  devtool: 'eval',

  output: {
    // where to output bundled files
    path: paths.buildDir,

    // output bundle name
    filename: 'bundle.js',

    // where webpack will serve files on our server.
    // necessary for HMR to know where to find the bundled chunks.
    publicPath: publicPath,
  },

  devServer: {
    // enable hot module replacement within dev server
    hot: true,

    // match the output path
    contentBase: paths.buildDir,

    // this should match the output publicPath
    publicPath: publicPath,

    port: paths.devServerPort,
  },


  module: {

    // Run the linter.
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'eslint',
        include: paths.sourceDir,
      },
    ],

    loaders: [
      // Babel compilation
      {
        test: /\.(js|jsx)$/,
        include: paths.sourceDir,
        loader: 'babel',
      },

      // sass compilation - see also the plugin further below
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap'],
      },
    ],
  },

  plugins: [
    // necessary for hot reloading
    new webpack.HotModuleReplacementPlugin(),

    // creates index.html from template specified,
    // including script and style tags.
    new HtmlWebpackPlugin({
      template: paths.appIndexHtmlTemplate,
      inject: 'body',
    }),
  ],
};
