
const ROOT_PATH = process.cwd();
require('best-require')(ROOT_PATH, {
    gulptasks: ROOT_PATH + '/gulp/tasks'
});
const srcDir = 'app'; // 源代码
const tmpDir = '.tmp'; // 未压缩文件
const destDir = 'dist'; // 压缩后的文件

const merge = require('merge');

const paths = {
    input: {
        less: [srcDir + '/**/*.less'],
        sass: [
            srcDir + '/**/*.{scss,sass}'
        ],
        css: [srcDir + '/**/*.css']
    },
    output: {
        less: tmpDir + '/css/',
        sass: tmpDir + '/css/',
        css: tmpDir + '/css/'
    }
}


module.exports = {
    paths: paths
}