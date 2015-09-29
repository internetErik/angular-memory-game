var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	watch = require('gulp-watch');
	
/*
 * Create variables for our project paths so we can change in one place
 */
var paths = {
	'sass': './styles/**/*.scss',
	'css': './styles/'
	// enable for tests
	//'tests':['./test/*.js', './test/**/*.js']
};

gulp.task('sass', function() {
	gulp.src(paths.sass)
		.pipe(sass())
		.pipe(autoprefixer('last 2 versions', 'ie 8'))
		.pipe(gulp.dest(paths.css));
});
gulp.task('watch', function() {

	gulp.start('sass');
	gulp.watch(paths.sass, ['sass']);

});
