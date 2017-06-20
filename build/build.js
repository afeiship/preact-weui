(function() {

  'use strict';

  var gulp = require('gulp');
  var config = require('./config');
  var argv = require('yargs').argv;
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });

  gulp.task('build', ['clean'], function() {
    console.log('Your task goes here!');
    //gulp.start(['scripts']);
  });



}());
