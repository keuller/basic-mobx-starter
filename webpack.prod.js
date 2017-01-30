var path = require('path')
  , webpack = require('webpack')
  , ExtractTextPlugin = require('extract-text-webpack-plugin')
  , BrowserSyncPlugin = require('browser-sync-webpack-plugin')

var extractAPP = new ExtractTextPlugin('app.css')

module.exports = {
    entry: {
        bundler: path.join(__dirname, 'src/index.jsx'),
        vendor: ['react', 'react-dom']
    },

    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },

    resolve: {
        extensions: ['.js', '.jsx'],
        modules: ['src', 'node_modules']
    },

    node: {
        fs: 'empty'
    },

    target: 'web', // node, electron

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react', 'stage-1', 'react-optimize'],
                    plugins: ['transform-decorators-legacy']
                }
            }, {
                test: /\.css/,
                loader: extractAPP.extract(['css-loader']),
                exclude: /node_modules/
            }
        ]
    },

    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        extractAPP,
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.ProvidePlugin({
            'React': 'react'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        new webpack.optimize.UglifyJsPlugin({
          compress: {
              warnings: false
          }
        })
    ]
}
