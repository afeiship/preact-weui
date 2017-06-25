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
      }
    ]
  }
};
