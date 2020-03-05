const { task, src, dest, series, watch } = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

const less = require('gulp-less');
const cssClean = require('gulp-clean-css');

const htmlmin = require('gulp-htmlmin');

const livereload = require('gulp-livereload');
const connect = require('gulp-connect');

task('js', function () {
  return src('src/js/**/*.js')
    .pipe(concat('build.js'))
    .pipe(dest('dist/js/'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest('dist/js/'))
    .pipe(livereload())
    .pipe(connect.reload())
});

task('less', function () {
  return src('src/less/**/*.less')
    .pipe(less())
    .pipe(dest('src/css/'))
    .pipe(livereload())
    .pipe(connect.reload())
})

task('css', function () {
  return src('src/css/**/*.css')
    .pipe(concat('build.css'))
    .pipe(dest('dist/css/'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cssClean({ compatibility: 'ie8' }))
    .pipe(dest('dist/css/'))
    .pipe(livereload())
    .pipe(connect.reload())
})

task('html', function () {
  return src('index.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('dist/'))
})


task('default',  series('js', 'less', 'css', 'html'));

//exports.default = defaultTask();

task('watch', function () {
  livereload.listen();
  watch('src/js/*.js', series('js'));
  watch('src/css/*.css', series('css'));
  watch('src/less/*.less', series('less', 'css'));
})

task('connect:dist', function(cb) {
	connect.server({
		root: 'dist/',
		livereload: true,
		port: 3000
  });

  cb();//执行回调，表示这个异步任务已经完成，启动作用,这样会执行下个任务
})

task('server', series('default', 'connect:dist', 'watch'))