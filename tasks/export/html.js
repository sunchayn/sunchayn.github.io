const
  gulp        = require('gulp'),
  console     = require('better-console'),
  plumber     = require('gulp-plumber'),
  notify      = require('gulp-notify'),
  concat      = require('gulp-concat'),
  rename      = require('gulp-rename'),
  replace     = require('gulp-replace'),
  print       = require('gulp-print').default,
  del         = require('del')
;

const
  log       = require('../helpers/log')
;

const config = require('../config/export.js');

module.exports = function(callback) {
  console.log('copying html files...');
  gulp.src(config.html.src)
    .pipe(replace(/(<link.*href=")(?!https:\/\/)(.*)(".*>)/gi, '$1public/$2$3'))
    .pipe(replace(/(<script.*src=")(?!https:\/\/)(.*)(".*>)/gi, '$1public/$2$3'))
    .pipe(replace(/(<img.*src=")(.*)(".*>)/gi, '$1public/$2$3'))
    .pipe(replace(/(<object.*data=")(.*)(".*>)/gi, '$1public/$2$3'))
    .pipe(replace(/"\.\/css\/app\.min\.css"/gi, '"./public/css/app.min.css"'))
    // .pipe(replace(/(<meta.*content=")(\/static\/.*)(".*>)/gi, '$1public$2$3'))
    .pipe(gulp.dest(config.html.outputDir))
    .pipe(print(log.created))
  ;

}
