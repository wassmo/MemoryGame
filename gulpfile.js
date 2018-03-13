var gulp = require("gulp");



// var jshint = require("gulp-jshint");
// gulp.task("task-name", function () {
// return gulp.src("js/*.js")
//     .pipe(jshint())
//     .pipe(jshint.reporter("default"))
// });


var sourcemaps = require('gulp-sourcemaps');

var sass = require('gulp-sass');
gulp.task('sass', function() {
    return gulp.src('scss/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole: true,
            outputStyle: 'nested',
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css'))
});



gulp.task('watch', function(){
    gulp.watch('scss/**/*.scss', ['sass']);
})
