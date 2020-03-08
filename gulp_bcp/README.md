# require 引用本地文件
1. 使用 ~ 表示根目录
```
// 例如在内层文件夹中引用配置文件
require('~/gulp.config.js')
```

2. 在 gulp.config.js 中配置 :xxx 表示指定文件夹
```
// 例如引用项目根目录下 gulp/tasks/less.js 文件
require(':gulptasks/less.js')
```