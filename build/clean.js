(function() {

  'use strict';
  var gulp = require('gulp');
  var config = require('./config');
  var argv = require('yargs').argv;
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });
  
  //clean
  gulp.task('clean', function() {
    return $.del('dist');
  });

}());
