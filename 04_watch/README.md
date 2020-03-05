
## 保存文件后立即编译

### 安装插件包

```
yarn add gulp-livereload -D
```

+ [gulp-livereload](https://www.npmjs.com/package/gulp-livereload) 实时编译

### 创建任务
```javascript
// gulpfile.js
const { task, watch } = require('gulp');
const livereload = require('gulp-livereload');

task('watch', function () {
  livereload.listen();
  watch('src/js/*.js', series('js'));
  watch('src/css/*.css', series('css'));
  watch('src/less/*.less', series('less', 'css'));
})
```

在之前的`js`任务,`css`任务,`less`任务结尾增加
```javascript
.pipe(livereload())
```

### 执行命令
```
gulp watch
```

## 热加载（实时加载）
### 下载插件
```
yarn add gulp-connect -D
```
+ [gulp-connect](https://www.npmjs.com/package/gulp-connect) 服务
### 创建任务
```javascript
// gulpfile.js
const { task } = require('gulp');
const connect = require('gulp-connect');

task('server', function() {
  connect.server({
    root: 'dist/',
    livereload: true,
    port: 3000
  });
  watch('src/js/*.js', series('js'));
  watch('src/css/*.css', series('css'));
  watch('src/less/*.less', series('less', 'css'));
})
```
在之前的`js`任务,`css`任务,`less`任务结尾增加
```javascript
.pipe(connect.reload())
```


## 扩展
[gulp4.0基本配置，超简单！](https://www.cnblogs.com/TBNICE/p/10463702.html)