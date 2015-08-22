var gulp = require( 'gulp' ),
		connect = require( 'gulp-connect' ),
		less = require('gulp-less'),
		sass = require('gulp-ruby-sass'),
		compass = require('gulp-compass');

gulp.task( 'webserver', function() {
	connect.server({
		livereload: true,
		port: 8081, // default is localhost:8080
		// host: 'gulp.dev'
	})
});

gulp.task('less', function() {
	gulp.src('less/style.less')
		.pipe(less())
		.pipe(gulp.dest('build/css'))
		.pipe(connect.reload());
});

gulp.task('sass', function() {
	gulp.src('scss/style.scss')
	// gulp.src('scss/**/*.scss')
		.pipe(sass({ style: 'expanded' }))
		.pipe(gulp.dest('build/css'))
		.pipe(connect.reload());
});

gulp.task('html', function() {
	gulp.src('index.html')
		.pipe(connect.reload());
});

gulp.task('watch', function() {
	gulp.watch('less/*.less', ['less']);
	// gulp.watch('scss/*.scss', ['sass']);
	gulp.watch('*.html', ['html'])
})
 
gulp.task('default', ['less', 'webserver', 'watch']);
// gulp.task('default', ['sass', 'webserver', 'watch']);
