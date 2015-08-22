var gulp = require( 'gulp' ),
		connect = require( 'gulp-connect' ),
		less = require('gulp-less'),
		sass = require('gulp-sass');
		// compass = require('gulp-compass')

gulp.task( 'webserver', function() {
	connect.server({
		livereload: true,
		port: 8081,
		// host: 'gulp.dev'
	})
});

gulp.task('less', function() {
	gulp.src('less/*.less')
		.pipe(less())
		.pipe(gulp.dest('css'))
		.pipe(connect.reload());
});

gulp.task('sass', function() {
	gulp.src('scss/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('css'))
		.pipe(connect.reload());
});

gulp.task('html', function() {
	gulp.src('index.html')
		.pipe(connect.reload());
});

gulp.task('js', function() {
	gulp.src('js/script.js')
		.pipe(connect.reload());
});

gulp.task('watch', function() {
	gulp.watch('less/*.less', ['less']);
	gulp.watch('scss/*.scss', ['sass']);
	gulp.watch('index.html', ['html']);
	gulp.watch('js/*.js', ['js']);
})

gulp.task('default', ['less', 'sass', 'js', 'webserver', 'watch']);
