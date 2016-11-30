'use strict';

var gulp = require('gulp'),
  browserSync = require('browser-sync').create(),
  notify = require('gulp-notify'),
  less = require('gulp-less'),
  sourcemaps = require('gulp-sourcemaps'),
  uglify = require('gulp-uglify'),
  clean = require('gulp-clean'),
  autoprefixer = require('gulp-autoprefixer'),
  browserify = require('browserify'),
  watchify = require('watchify'),
  gulpUtil = require('gulp-util'),
  lodashAssign = require('lodash.assign'),
  vinylBuffer = require('vinyl-buffer'),
  vinylSourceStream = require('vinyl-source-stream');

// TODO: implement these below (currently it's unused)
var gulpIf = require('gulp-if'),
  imagemin = require('gulp-imagemin'),
  obfuscate = require('gulp-obfuscate'),
  rename = require('gulp-rename'),
  sass = require('gulp-sass'),
  babel = require('gulp-babel'),
  header = require('gulp-header'),
  del = require('del');

var sourceDir = './src',
  distDir = './dist';

/*================================================================ Helper
 */

function handleError(err) {
  gulpUtil.log(err);
  console.error('Error', err.message);
  browserSync.notify('Error: ' + err.message);

  var args = Array.prototype.slice.call(arguments);
  notify.onError({
    title: 'Compile Error',
    message: '<%= error.message %>'
  }).apply(this, args);

  if (typeof this.emit === 'function') this.emit('end')
}

/*================================================================ Js task
 */

var browserifyCustomOpt = {
  entries: [sourceDir + '/js/main.js'],
  debug: false
};
var browserifyOpt = lodashAssign({}, watchify.args, browserifyCustomOpt);
var watchifyJs = watchify(browserify(browserifyOpt));

watchifyJs.on('update', bundle);
watchifyJs.on('log', gulpUtil.log);

function bundle() {
  return watchifyJs.bundle()
    .on('error', gulpUtil.log.bind(gulpUtil, 'Browserify Error'))
    .pipe(vinylSourceStream('bundle.js'))
    .pipe(vinylBuffer())
    .pipe(sourcemaps.init({
      loadMaps: true
    }))
    .pipe(uglify()).on('error', handleError)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(distDir + '/js'))
    .pipe(browserSync.stream({
      'once': true
    }));
}

gulp.task('js', bundle);

/*================================================================ Other tasks
 */

gulp.task('clean', function() {
  var cleanOpt = {
    read: false
  };

  return gulp.src(distDir, cleanOpt)
    .pipe(clean());
});

gulp.task('less', function() {
  return gulp.src(sourceDir + '/less/main.less')
    .pipe(sourcemaps.init())
    .pipe(less({
      compress: true
    })).on('error', handleError)
    .pipe(autoprefixer('last 2 versions', '> 1%', 'ie 8'))
    .pipe(rename({
      suffix: '.min',
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(distDir + '/css'))
    .pipe(browserSync.stream({
      'once': true
    }));
});

gulp.task('serve', function() {
  browserSync.init({
    'server': './',
    'open': true
  });

  var watchOpt = {
    interval: 500
  };

  gulp.watch('./index.html', watchOpt).on('change', browserSync.reload);
  gulp.watch(sourceDir + '/less/**/*.less', ['less']);
  gulp.watch(sourceDir + '/js/main.js', ['js']);
});

gulp.task('build', ['less', 'js'], function() {
  watchifyJs.close();
});
gulp.task('watch', ['serve']);
gulp.task('default', ['build']);
