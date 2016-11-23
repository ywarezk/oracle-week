/**
 * webpack configuration file
 */

var path = require('path');
module.exports = {

    entry: './react-demo.js',

    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }

}
