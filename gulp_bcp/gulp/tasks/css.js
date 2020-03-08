const { paths } = require('~/gulp.config.js');

module.exports = function (gulp, plugins) {
    return () =>
        gulp.src(paths.input.css)
            .pipe(gulp.dest(paths.output.css))
}