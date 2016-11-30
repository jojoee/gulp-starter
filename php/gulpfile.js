var gulp          = require('gulp');
var browserSync   = require('browser-sync').create();

/*================================================================
 # TASK
 ================================================================*/

gulp.task('serve', function() {
  browserSync.init({
    proxy: 'jojoee.dev/gulp-starter/php',
    files: ['**/*.php', '*.php'],
    open: true
  });

  gulp.watch('./css/*.css', { interval: 500 }).on('change', browserSync.reload);
  gulp.watch('./js/*.js', { interval: 500 }).on('change', browserSync.reload);
  gulp.watch('./index.html', { interval: 500 }).on('change', browserSync.reload);
});

gulp.task('watch', ['serve']);
gulp.task('default', ['serve']);
