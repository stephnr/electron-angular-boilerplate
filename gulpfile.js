'use strict';

// Non Gulp npm modules
var del = require('del');

// Gulp Modules
var gulp = require('gulp');
var gutil = require('gulp-util');
var plugins = require('gulp-load-plugins')();

var sassRoot = 'public/scss';
var cssRoot = 'public/css';
var jsRoot = 'public/js';
var jsnextRoot = 'public/js-next';

function handleError(err) {
  console.log(err.toString());
}

// ############################################################################################
// ############################################################################################

gulp.task('clean:styles', function(cb) {
  del([
    '**/.sass-cache/**',
  ], cb);
});

gulp.task('build-sass', function() {
  return gulp.src(sassRoot+'/*.scss')
    .pipe(plugins.plumber())
    .pipe(plugins.notify('Compile Sass File: <%= file.relative %>...'))
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.autoprefixer('last 10 versions'))
    .pipe(plugins.sass({
      style: 'compressed'
    })).on('error', handleError)
    .pipe(plugins.sourcemaps.write())
    .pipe(gulp.dest(cssRoot));
});

// ############################################################################################
// ############################################################################################

gulp.task('watch-sass', function() {
  plugins.notify('Sass Stream is Active...');
  gulp.watch(sassRoot+'/**/*.scss', ['build-sass']);
});

// ############################################################################################
// ############################################################################################

gulp.task('default', ['build-sass'], function() {
  gutil.log('Transposing Sass...');
});

gulp.task('clean', ['clean:styles']);
gulp.task('watch', ['watch-sass']);
