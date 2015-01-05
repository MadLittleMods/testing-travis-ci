// Include gulp
var gulp = require('gulp');

var marked = require('gulp-marked');

gulp.task('compile-markdown', function() {
	return gulp.src('./somedoc.md')
		.pipe(marked({
			gfm: true
		}))
		.pipe(gulp.dest('./dist/'));
});

// Default Task
gulp.task('default', ['compile-markdown']);

// Travis CI task
gulp.task('ci', ['compile-markdown']);