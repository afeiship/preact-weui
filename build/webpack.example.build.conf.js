const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry:'./example/index.js',
  output:{
    path: path.join(__dirname ,'../example/dist'),
    filename: 'bundle.js'
  },
  module:{
    rules: [
      {
        test:/\.jsx?/i,
        loader:'babel-loader',
        exclude: /node_modules/,
        options: {
          plugins:[
            ['transform-react-jsx',{ pragma:'h' }]
          ]
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test:/\.scss$/i,
        use: [
          {
            loader: 'css-loader' // translates CSS into CommonJS
          },
          {
            loader: 'sass-loader' // compiles Sass to CSS
          }
        ]
      },
      {
        test: /\.(gif|jpg|png)\??.*$/,
        loader: 'url-loader?limit=8096&name=images/[name].[ext]'
      }
    ]
  },
  resolve: {
    extensions: [ '.js', '.scss'],
    alias: {
      node_modules: path.join(__dirname, '../node_modules'),
      src: path.join(__dirname, '../src'),
      example: path.join(__dirname, '../example')
    }
  }
};
