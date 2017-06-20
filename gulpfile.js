(function() {

  'use strict';

  var path = require('path');
  var gulp = require('gulp');
  var argv = require('yargs').argv;
  var fs = require('fs');
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });

  //import
  fs.readdirSync('./build').map(function(file) {
    require('./build/' + file);
  });


  gulp.task('default',['build']);

}());
