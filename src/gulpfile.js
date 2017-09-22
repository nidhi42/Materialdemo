// Gulp default variable
var gulp = require('gulp');
// Gulp sass variable
var sass = require('gulp-sass');


// Gulp sass syntax
gulp.task('sass', function () {
    return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
})
// Gulp watch syntax
gulp.watch('files-to-watch', ['tasks', 'to', 'run']); 
// Gulp watch syntax
gulp.watch('app/scss/**/*.scss', ['sass']); 

gulp.task('watch', function () {
    gulp.watch('app/scss/**/*.scss', ['sass']);
    // Other watchers
})

gulp.task('watch', ['array', 'of', 'tasks', 'to', 'complete', 'before', 'watch'], function () {
    // ...
})
gulp.task('watch', ['browserSync', 'sass'], function () {
    gulp.watch('app/scss/**/*.scss', ['sass']);
    // Reloads the browser whenever HTML or JS files change
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});
