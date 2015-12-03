
/* Prototype */

var gulp = require('gulp');
var watch = require('./semantic/tasks/watch');
var build = require('./semantic/tasks/build');
var browserSync = require('browser-sync').create();
var svgSprite = require('gulp-svg-sprite');

gulp.task('watch-ui', watch);
gulp.task('build-ui', build);

// Static server
gulp.task('serve', ['build-ui'], function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('**/*.html').on('change', browserSync.reload);
    gulp.watch('./dist/semantic.css').on('change', browserSync.reload);
});


gulp.task('hello',function(){

    console.log("hello nitish");
});
var config = {
    mode : {
        css : {     // Activate the «css» mode
            render : {
                css : true  // Activate CSS output (with default options)
            }
        }
    }
};

gulp.task('sprites', function () {
  gulp.src('./icon-sets/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./dist/'))
});
