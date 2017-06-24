const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry:'./example/index.js',
  output:{
    path: path.join(__dirname ,'./example/'),
    filename: 'bundle.js'
  },
  module:{
    rules: [
      {
        test:/\.jsx?/i,
        loader:'babel-loader',
        options: {
          presets:['env','es2015','stage-0'],
          plugins:[
            ['transform-react-jsx',{ pragma:'h' }]
          ]
        }
      }
    ]
  },

  //devtools:
  devtool:'source-map',
  devServer:{
    contentBase: path.join(__dirname,'..'),
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
      node_modules: path.join(__dirname, '../node_modules')
    }
  }
};
