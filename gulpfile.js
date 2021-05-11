let gulp = require('gulp'),
		pug = require('gulp-pug'),
		scss = require('gulp-sass');

gulp.task('pug', function() {
	return gulp.src('app/*.pug')
		.pipe(pug({
			pretty: true
		}))
		.pipe(gulp.dest('theatre'))
});

gulp.task('scss', function() {
	return gulp.src('app/scss/*.scss')
		.pipe(scss({
			outputStyle: 'expanded'
		}))
		.pipe(gulp.dest('theatre/css'))
});

gulp.task('watch', function() {
	gulp.watch('app/*.pug', gulp.parallel('pug'));
	gulp.watch('app/scss/*.scss', gulp.parallel('scss'));
});

gulp.task('default', gulp.parallel('watch'));
