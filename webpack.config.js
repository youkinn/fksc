const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const map = require('./map');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

const projectRoot = path.resolve(__dirname, '../');
const ROOT = path.resolve(__dirname);
const ENV = process.env.ENV;
const CDN = process.env.CDN;

const entry = {
  vendor: [
    'jquery',
  ],
};

const plugins = [];

for (chunk in map) {
  entry[chunk] = map[chunk].src;
  plugins.push(new HtmlWebpackPlugin({
    alwaysWriteToDisk: true,
    filename: `${ROOT}/pages/html/${map[chunk].tpl}`,
    template: `${ROOT}/pages/tpl/${map[chunk].tpl}`,
    chunks: ['vendor', chunk],
  }));
}

if (ENV === 'DEV') {
  plugins.push(new HtmlWebpackHarddiskPlugin());
} else {
  plugins.push(new webpack.optimize.UglifyJsPlugin({ minimize: true }));
}

module.exports = {
  devtool: ENV === 'DEV' ? 'cheap-eval-source-map' : 'source-map',
  entry,
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: CDN || '/dist',
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'),
      pages: path.resolve(__dirname, 'pages'),
    },
  },
  externals: {
    d3: 'window.d3',
  },
  module: {
    preLoaders: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        // enforce: 'pre',
        // include: [
        //   path.join(projectRoot, 'src'),
        // ],
        exclude: /node_modules/,
      },
    ],
    loaders: [{
      test: /\.css/,
      loader: ExtractTextPlugin.extract('style', 'css'),
    },
    {
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
    },
    {
      test: /(\.html|\.php)$/,
      loader: 'raw-loader',
    },
    ],
  },
  eslint: {
    configFile: '.eslintrc.js',
    emitWarnings: true,
    formatter: require('eslint-friendly-formatter'),
  },
  plugins: plugins.concat([
    new webpack.DefinePlugin({
      ENV: JSON.stringify(process.env.ENV),
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
    new ExtractTextPlugin('[name].css'),
    new webpack.ProvidePlugin({
      $: 'jquery',
    }),
    new FriendlyErrorsPlugin(),
  ]),
};
