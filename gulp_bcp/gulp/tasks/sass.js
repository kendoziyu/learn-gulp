const { paths } = require('~/gulp.config.js');

module.exports = function (gulp, plugins) {
    plugins.sass.compiler = require('node-sass');
    return () => 
        gulp.src(paths.input.sass)
            .pipe(plugins.sass().on('error', plugins.sass.logError))
            .pipe(gulp.dest(paths.output.sass))
}