const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

require('./gulp.config.js');

function getTask(task) {
    return require(':gulptasks/' + task)(gulp, plugins);
}

gulp.task('less', getTask('less'));
gulp.task('sass', getTask('sass'));
gulp.task('css', getTask('css'));