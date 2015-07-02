'use strict';

import del from 'del';
import gulp from 'gulp';
import gutil from 'gulp-util';
import gulpLoadPlugins from 'gulp-load-plugins';

const plugins = gulpLoadPlugins();
const sassRoot = 'public/scss';
const cssRoot = 'public/css';

function handleError(err) {
  console.log(err.toString());
}

// ############################################################################################
// ############################################################################################

gulp.task('clean:styles', (cb) => {
  del([
    '**/.sass-cache/**',
  ], cb);
});

gulp.task('build-sass', () => {
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

gulp.task('watch-sass', () => {
  plugins.notify('Sass Stream is Active...');
  gulp.watch(sassRoot+'/**/*.scss', ['build-sass']);
});

// ############################################################################################
// ############################################################################################

gulp.task('default', ['build-sass'], () => {
  gutil.log('Transposing Sass...');
});

gulp.task('clean', ['clean:styles']);
gulp.task('watch', ['watch-sass']);
