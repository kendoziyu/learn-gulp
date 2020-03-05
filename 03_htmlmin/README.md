## html 文件处理任务

### 安装插件包

 

```
yarn add gulp-htmlmin -D
```

- [gulp-htmlmin](https://www.npmjs.com/package/gulp-htmlmin) 压缩 html 文件

### 新增 html 压缩任务

 

```
// gulpfile.js
task('html', function () {
  return src('index.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('dist/'))
})

function defaultTask() {
  return series('js', 'less', 'css', 'html');
}

exports.default = defaultTask();
```

### 修改 html 中的引用

 

```
<head>
    <link rel="stylesheet" href="css/build.min.css">
</head>
<body>
    <script src="js/build.min.js"></script>
</body>
```

- 打开`dist/index.html`是可以正常引用到 `css` 和 `js` 文件的。但是打开根目录下的 `index.html` 无法正常引用到 `css` 和 `js`
- 可以去关注一下 [gulp-inject](https://www.npmjs.com/package/gulp-inject) 和 [wiredep](https://www.npmjs.com/package/wiredep)