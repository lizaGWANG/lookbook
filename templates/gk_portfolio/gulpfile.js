var gulp        = require('gulp');
var less        = require('gulp-less');
var path 		= require('path');

// Static Server + watching scss/html files
gulp.task('serve', ['less'], function() {

    /*browserSync.init({
        proxy: "localhost/gk-portfolio"
    });*/

    gulp.watch("less/*.less", ['less']);//.on('change', browserSync.reload);
    //gulp.watch("*.php").on('change', browserSync.reload);
    //gulp.watch("**/*.php").on('change', browserSync.reload);
});

// Compile LESS
gulp.task('less', function () {
  return gulp.src(['less/template.less', 'less/mailto.less', 'less/error.less', 'less/print.less'])
    .pipe(less())
    .pipe(gulp.dest('css'));
});

gulp.task('default', ['serve']);