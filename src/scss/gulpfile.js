const { src, dest, watch, series } = require ('gulp')
const sass = require('gulp-sass')(require('sass'))

function builtStyles() {
    return src('index.scss')
        .pipe(sass())
        .pipe(dest('css'))
}

function watchTask() {
    watch(['index.scss', builtStyles])
}

exports.defaults = series(builtStyles, watchTask)