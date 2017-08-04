const path = require('path');
const webpack = require('webpack');
const glob = require('glob');
const entries = glob.sync('./src/**/index.js');

module.exports = {
  entry:entries,
  output:{
    path: path.join(__dirname ,'../dist/'),
    filename: 'preact-weui.js'
  },
  externals:{
    'preact': 'preact',
    'noop':'noop',
    'object-assign':'object-assign',
    'classnames':'classnames',
  },
  module:{
    rules: [
      {
        test:/\.js/i,
        loader:'babel-loader',
        options: {
          presets:['env','es2015','stage-0'],
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
        test:/\.scss/i,
        use: [{
          loader: 'css-loader' // translates CSS into CommonJS
        }, {
          loader: 'sass-loader' // compiles Sass to CSS
        }]
      },
      {
        test: /\.(gif|jpg|png)\??.*$/,
        loader: 'url-loader?limit=8096&name=images/[name].[ext]'
      }
    ]
  }
};
