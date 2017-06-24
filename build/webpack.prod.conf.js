const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry:[
    './src/weui-button/index.js',
    './src/weui-actionsheet/index.js',
  ],
  output:{
    path: path.join(__dirname ,'../dist/'),
    filename: 'preact-weui.js'
  },
  externals:{
    'preact': 'preact',
    'noop':'noop'
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
      }
    ]
  }
};
