## 安装 gulp 并创建项目
如果以前全局安装过 gulp，先执行 `npm rm gulp -g`

1. 全局安装命令行工具
---
```
npm i gulp-cli -g
```

2. 创建项目目录并进入
---
```
mkdir 01_start
cd 01_start
```

3. 在项目目录下创建 package.json 文件
---
```
yarn init -y
```

4. 使用 yarn 安装 gulp,作为开发依赖
---
```
yarn add gulp -D
```

5. 检查 gulp 版本
---
```
gulp --version
```
以下是我的控制台输出：
> CLI version: 2.2.0
Local version: 4.0.2

6. 创建 gulpfile 文件
---
利用任何文本编辑器在项目大的根目录下创建一个名为 gulpfile.js 的文件，并在文件中输入以下内容：
```javascript
// gulpfile.js
function defaultTask(cb) { 
// place code for your default task here
	cb();
}

exports.default = defaultTask
```

7. 测试 gulp：
---
在项目根目录下执行 gulp 命令
```shell
gulp
```
默认任务（task）将执行，因为任务为空，因此没有实际动作。以下是控制台输出

> D:\gitcode\github\learn-gulp\01_start>gulp
[17:25:36] Using gulpfile D:\gitcode\github\learn-gulp\01_start\gulpfile.js
[17:25:36] Starting 'default'...
[17:25:36] Finished 'default' after 2.66 ms