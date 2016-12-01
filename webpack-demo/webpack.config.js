/**
 * webpack configuration file
 */

var path = require('path');
module.exports = {
    entry: {
        app: './src/app.js',
        typescript: './src/typescript.ts'
    },

    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
    },

    devtool: 'source-map',

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    }
}


