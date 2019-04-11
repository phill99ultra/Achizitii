const gulp = require('gulp');
const stylus = require('gulp-stylus');
const sourcemaps = require('gulp-sourcemaps');
const watch = require('gulp-watch');
const rupture = require('rupture');
const cleanCss = require('gulp-clean-css');
const rename = require('gulp-rename');


gulp.task('styl', function () {
    return gulp
      .src('./src/*.styl')
      .pipe(sourcemaps.init())
      .pipe(watch('./src/*.styl'))      
      .pipe(stylus({
        use: rupture()
      }))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('./dist/css'))
      .pipe(cleanCss())
      .pipe(rename('main.min.css'))
      .pipe(gulp.dest('./dist/css'))
      ;
  });