/**
 * webpack configuration file
 */

var path = require('path');
module.exports = {
    entry: './src/typescript.ts',

    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist')
    },

    devtool: 'source-map',

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    }
}


