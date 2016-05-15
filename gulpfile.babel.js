'use strict';

// commonjs format
// let gulp = require('gulp');

// es2015 format
import gulp from 'gulp';
import browserify from 'browserify';
import source from 'vinyl-source-stream';

gulp.task('transpile', () => {
  console.log('Gulp Transpile');

  return browserify('src/app.js')
    .transform('babelify')
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist'));
});

// watch for changes 
gulp.task('watch', () => {
  gulp.watch('src/**/*.js', ['transpile']);
});

gulp.task('default', ['transpile']);
