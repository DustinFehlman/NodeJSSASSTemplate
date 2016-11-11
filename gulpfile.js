var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    gulp.src('./assets/sass/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./public/css/'));
});

gulp.task('watch', function () {
    gulp.watch(['./assets/sass/*.scss'], ['sass']);
});
gulp.task('default', ['watch']);
console.log('[ASSETS BEING WATCHED]');