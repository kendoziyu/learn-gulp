const { paths } = require('~/gulp.config.js');

module.exports = function (gulp, plugins) {
    return () =>
        gulp.src(paths.input.less)
            .pipe(plugins.less())
            .pipe(gulp.dest(paths.output.less))
}