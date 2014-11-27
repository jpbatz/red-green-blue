var gulp = require('gulp');
var sass = require('gulp-sass');

// keeps gulp from crashing for scss errors
gulp.task('styles', function () {
  return gulp.src('./sass/*.scss')
      .pipe(sass({
         errLogToConsole: true
      }))
      .pipe(gulp.dest('./css'));
});

gulp.task('watch_styles', function () {
  gulp.watch('./sass/**/*.scss', ['styles']);
});

gulp.task('default', ['watch_styles']);
