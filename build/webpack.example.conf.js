const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry:'./example/index.js',
  output:{
    path: path.join(__dirname ,'./'),
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
        test: /\.(gif|jpg|png)\??.*$/,
        loader: 'url-loader?limit=8096&name=images/[name].[ext]'
      }
    ]
  },

  //devtools:
  devtool:'source-map',
  devServer:{
    contentBase: path.join(__dirname,'../example/'),
    compress:true,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Power-by":"Fei-WEBPACK"
    }
  },
  resolve: {
    extensions: [ '.js', '.scss'],
    alias: {
      node_modules: path.join(__dirname, '../node_modules'),
      src: path.join(__dirname, '../src')
    }
  }
};
