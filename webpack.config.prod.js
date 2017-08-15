import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');


const GLOBALS = {
     'process.env.NODE_ENV': JSON.stringify('production'),
       __DEV__: false
      };

export default {
    devtool: 'source-map',
    entry: {
      venueListing:  path.resolve(__dirname, 'src/index.js'),
      desktop : path.resolve(__dirname, 'src/styles/desktop.scss'),
      mobile : path.resolve(__dirname, 'src/styles/mobile.scss'),
      vendor: ["react", "react-dom", "react-redux", "redux", "redux-thunk", "react-router"]
    },
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js', }),
        // Generate an external css file with a hash in the filename
        new ExtractTextPlugin('venueListing.[name].css'),

        new OptimizeCssAssetsPlugin({
            cssProcessorOptions: { discardComments: { removeAll: true } }
          }),
        new webpack.DefinePlugin(GLOBALS),
        // Hash the src using MD5 so that their names change when the content changes.
        new WebpackMd5Hash(),

        // Create HTML file that includes reference to bundled JS.
        new HtmlWebpackPlugin({
            template: 'src/index.ejs',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            },
            inject: true,
            // Properties you define here are available in index.ejs
            // using htmlWebpackPlugin.options.varName
            trackJSToken: '43ad216f57d94259968435894490a5c7'
        }),

        // Eliminate duplicate packages when generating bundle
        new webpack.optimize.DedupePlugin(),

        // Minify JS
        new webpack.optimize.UglifyJsPlugin(),

      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
        noInfo: true, // set to false to see a list of every file being bundled.
        options: {
          sassLoader: {
            includePaths: [path.resolve(__dirname, 'src', 'scss')]
          },
          context: '/',
          postcss: () => [autoprefixer],
        }
      })
    ],
  module: {
    rules: [
      {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'url-loader?name=[name].[ext]'},
      {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=[name].[ext]'},
      {test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream&name=[name].[ext]'},
      {test: /\.svg(\?v=\d+.\d+.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml&name=[name].[ext]'},
      {test: /\.(jpe?g|png|gif)$/i, loader: 'file-loader?name=[name].[ext]'},
      {test: /\.ico$/, loader: 'file-loader?name=[name].[ext]'},
      {test: /(\.css|\.scss|\.sass)$/, loader: ExtractTextPlugin.extract('css-loader?sourceMap!postcss-loader!sass-loader?sourceMap')}
    ]
  }
};
