var path = require('path')
  , webpack = require('webpack')
  , ExtractTextPlugin = require('extract-text-webpack-plugin')
  , BrowserSyncPlugin = require('browser-sync-webpack-plugin')

var extractAPP = new ExtractTextPlugin('app.css')

module.exports = {
    entry: {
        bundler: path.join(__dirname, 'src/index.jsx'),
        vendor: ['react', 'react-dom', 'mobx', 'mobx-react']
    },

    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },

    resolve: {
        extensions: ['', '.js', '.jsx'],
        modulesDirectories: ['src', 'node_modules']
    },

    node: {
        fs: 'empty'
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react', 'stage-1'],
                    plugins: ["transform-decorators-legacy"]
                }
            }, {
                test: /\.css/,
                loader: extractAPP.extract(['css']),
                exclude: /node_modules/
            }
        ]
    },

    plugins: [
        extractAPP,
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.ProvidePlugin({
            'React': 'react'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            server: { baseDir: [__dirname] }
        }, { reload: true }),
        new webpack.NoErrorsPlugin()
    ]
}
