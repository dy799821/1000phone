const gulp = require('gulp'),
    sass = require('gulp-sass'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    babel = require('gulp-babel');
function fnCopyIndex(){
    return gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist'))
}
function fnCSS(){
    return gulp.src('./src/sass/*.scss')
    .pipe(sass({outputStyle:'expended'}))
    .pipe(cssnano())
    .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest('./dist/css'))
}
function fnIMG(){
    return gulp.src('./src/imgs/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/imgs'))
}
function fnJS(){
    return gulp.src('./src/js/*.js')
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest('./dist/js'))
}
function fnWatch(){
    gulp.watch('./src/index.html',fnCopyIndex);
    gulp.watch('./src/sass/*.scss',fnCSS);
    gulp.watch('./src/js/*.js',fnJS);
    gulp.watch('./src/images/*',fnIMG);
}
exports.copyIndex = fnCopyIndex;
exports.img = fnIMG;
exports.css = fnCSS;
exports.js = fnJS;
exports.default = fnWatch;
