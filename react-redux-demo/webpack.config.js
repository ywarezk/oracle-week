/**
 * webpack configuration file
 */

var path = require('path');
module.exports = {
    entry: './src/app.js',

    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist')
    },

    devtool: 'source-map',

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['transform-decorators-legacy']
                }
            }
        ]
    }
}


