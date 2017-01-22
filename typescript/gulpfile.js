var gulp          = require('gulp');
var notify        = require('gulp-notify');
var browserSync   = require('browser-sync').create();
var sourcemaps    = require('gulp-sourcemaps');
var typescript    = require('gulp-typescript');

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

  if (typeof this.emit === 'function') this.emit('end')
}

/*================================================================
 # TASK
 ================================================================*/

gulp.task('typescript', function() {
  return gulp.src('ts/**/*.ts')
    .pipe(sourcemaps.init())
    .pipe(typescript({
      noImplicitAny: false,
      noEmitOnError: true,
      removeComments: false,
      sourceMap: true,
      out: 'bundle.js',
      target: 'es5'
    })).on('error', handleError)
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./js/'))
    .pipe(browserSync.stream({
      'once': true
    }));
});

gulp.task('serve', function() {
  browserSync.init({
    'server': './',
    'open': true
  });

  gulp.watch('./ts/*.ts', ['typescript']);
  gulp.watch('./css/*.css', { interval: 500 }).on('change', browserSync.reload);
  gulp.watch('./index.html', { interval: 500 }).on('change', browserSync.reload);
});

gulp.task('build', ['typescript']);
gulp.task('watch', ['serve']);
gulp.task('default', ['build']);
