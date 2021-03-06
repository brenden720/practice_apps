const path = require('path');
const Dotenv = require('dotenv-webpack');
// const dotenv = require('dotenv').config({ path: __dirname + '/.env' });

module.exports = {
  entry: path.join(__dirname, './client/src/index.jsx'),
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },

        resolve: {
          extensions: ['.js', '.jsx'],
        },
      }
    ]
  },
  output: {
    path: path.join(__dirname, './client/public'),
    filename: 'bundle.js'
  }
};