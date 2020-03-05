const { task, src, dest, series, parallel } = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

const less = require('gulp-less');
const cssClean = require('gulp-clean-css');

task('js', function () {
  return src('src/js/**/*.js')
    .pipe(concat('build.js'))
    .pipe(dest('dist/js/'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest('dist/js/'))
});

task('less', function () {
  return src('src/less/**/*.less')
    .pipe(less())
    .pipe(dest('src/css/'))
})

task('css', function () {
  return src('src/css/**/*.css')
    .pipe(concat('build.css'))
    .pipe(dest('dist/css/'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cssClean({ compatibility: 'ie8' }))
    .pipe(dest('dist/css/'))
})

// v4.0,taskFn是设置任务的函数名
function defaultTask() {
  return series('js', 'less', 'css');  // series让任务按顺序执行
}

exports.default = defaultTask();