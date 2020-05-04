const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: './src/app/index.js',
    output: {
        path: __dirname + '/src/public',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
               test: /\.(js|jsx)$/,
               use: [ 'babel-loader'],
               exclude: /node_modules/
            },
            {
                test: /\.(css)$/, use: ['style-loader', 'css-loader']
            }
        ]
    }
   
}