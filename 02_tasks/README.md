
## js 文件处理任务

安装插件包
---
```
yarn add gulp-concat gulp-uglify gulp-rename -D
```

+ [gulp-concat](https://www.npmjs.com/package/gulp-concat "gulp-concat") 合并文件
+ [gulp-uglify](https://www.npmjs.com/package/gulp-uglify "gulp-uglify") 压缩文件
+ [gulp-rename](https://www.npmjs.com/package/gulp-rena "gulp-rename") 重命名文件

编辑文件
---

```javascript
// gulpfile.js
const { task, src, dest } = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

task('js', function () {
  return src('src/js/**/*.js')
  .pipe(concat('build.js'))
  .pipe(dest('dist/js/'))
  .pipe(uglify())
  .pipe(rename({suffix: '.min'}))
  .pipe(dest('dist/js/'))
});
```

执行 `js` 任务
---
```
gulp js
```
注意：`gulp-uglify` 压缩 js 文件时，会删除没有引用的代码。尽可能简化代码。

## css 文件合并压缩
安装插件包
---
```
yarn add gulp-less gulp-clean-css -D
```

+ [gulp-less](https://www.npmjs.com/package/gulp-less "gulp-less")
+ [gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css)

```javascript
task('less', function () {
  return src('src/less/**/*.less')
    .pipe(less())
    .pipe(dest('src/css/'))
})

task('css', function () {
  return src('src/css/**/*.css')
    .pipe(concat('build.css'))
    .pipe(dest('dist/css/'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cssClean({ compatibility: 'ie8' }))
    .pipe(dest('dist/css/'))
})
```

4.0新增了 series和parallel
```javascript
// v4.0,taskFn是设置任务的函数名
function defaultTask() {
  return series('js', 'less', 'css');  // series让任务按顺序执行
}

exports.default = defaultTask();
```

## 参考博客：
[gulp4.0升级小记](https://segmentfault.com/a/1190000019517598)