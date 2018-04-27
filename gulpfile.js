'use strict';

var gulp = require('gulp');
var ravencoreTasks = require('ravencore-build');

ravencoreTasks('message');

gulp.task('default', ['lint', 'coverage']);
