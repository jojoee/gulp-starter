var globalConfig  = require('./config');

var gulp          = require('gulp');
var sass          = require('gulp-sass');

var jade          = require('gulp-jade');
var less          = require('gulp-less');
var coffee        = require('gulp-coffee');
var concat        = require('gulp-concat');
var uglify        = require('gulp-uglify');
var imagemin      = require('gulp-imagemin');
var sourcemaps    = require('gulp-sourcemaps');
// var sequence      = require('gulp-sequence');
var jshint        = require('gulp-jshint');
var autoprefixer  = require('gulp-autoprefixer');
var gzip          = require('gulp-gzip');
var notify        = require('gulp-notify');
var browserSync   = require('browser-sync').create();

// var path          = require('path');
var _             = require('lodash');
var del           = require('del');
var changed       = require('gulp-changed');

/*================================================================
 # HELPER
 ================================================================*/

function handleError(err) {
  var msg = 'Error: ' + err.message;

  console.error('Error', err.message);
  browserSync.notify('Error: ' + err.message);

  var args = Array.prototype.slice.call(arguments);
  notify.onError({
    title: 'Compile Error',
    message: '<%= error.message %>'
  }).apply(this, args);

  // keep gulp from hanging on this task
  if (typeof this.emit === 'function') this.emit('end')
}

/*================================================================
 # TEST
 ================================================================*/

// unfinished
gulp.task('test', function() {

});

/*================================================================
 # TASK
 ================================================================*/

// unused
gulp.task('clean', function(cb) {
  var config = globalConfig.tasks.clean;

  return del([config.dest], cb);
});

// unused
gulp.task('js', function() {
  var config = globalConfig.tasks.js;

  return gulp.src(config.src)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(concat(config.buildFile))
    .pipe(uglify(config.uglifyOpt))
    .pipe(gzip())
    .pipe(gulp.dest(config.dest));
});

// unused
gulp.task('coffee', function() {
  var config = globalConfig.tasks.coffee;

  return gulp.src(config.src)
    .pipe(sourcemaps.init())
    .pipe(coffee()).on('error', handleError)
    .pipe(concat(config.buildFile))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.dest));
});

// unused
gulp.task('img', ['clean'], function() {
  var config = globalConfig.tasks.img;

  return gulp.src(config.src)
    .pipe(changed(config.dest)) // ignore unchanged files
    .pipe(imagemin(config.opt))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.stream(config.browserSyncOpt));
});

gulp.task('less', function () {
  var config = globalConfig.tasks.less;

  return gulp.src(config.src)
    .pipe(sourcemaps.init())
    .pipe(less()).on('error', handleError)
    .pipe(autoprefixer('last 2 versions', '> 1%', 'ie 8'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.stream(config.browserSyncOpt));
});

gulp.task('sass', function() {
  var config = globalConfig.tasks.sass;

  return gulp.src(config.src)
    .pipe(sourcemaps.init())
    .pipe(sass(config.opt)).on('error', handleError)
    .pipe(autoprefixer('last 2 versions', '> 1%', 'ie 8'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.stream(config.browserSyncOpt));
});

// unused
gulp.task('jade', function () {
  var config = globalConfig.tasks.jade;

  return gulp.src(config.src)
    .pipe(jade()).on('error', handleError)
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.stream(config.browserSyncOpt));
});

gulp.task('serve', ['sass'], function() {
  var config = globalConfig.tasks.serve;

  browserSync.init(config.browserSyncInit);
  gulp.watch(config.watch.html).on('change', browserSync.reload);
  gulp.watch(config.watch.js).on('change', browserSync.reload);
  
  // gulp.watch(config.watch.jade, ['jade']);
  // gulp.watch(config.watch.less, ['less']);
  gulp.watch(config.watch.sass, ['sass']);  
});

var allTasks = [
  'clean',
  'js',
  'coffee',
  'img',
  'less',
  'sass',
  'jade',
  'serve'
];
gulp.task('all', allTasks);
gulp.task('default', ['serve']);
