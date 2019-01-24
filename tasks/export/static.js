const
  gulp        = require('gulp'),
  console     = require('better-console'),
  plumber     = require('gulp-plumber'),
  notify      = require('gulp-notify'),
  concat      = require('gulp-concat'),
  rename      = require('gulp-rename'),
  replace     = require('gulp-replace'),
  print       = require('gulp-print').default
;

const 
  log       = require('../helpers/log')
;

const config = require('../config/export.js');


module.exports = function(callback) {

  console.log('copying static files...');
  gulp.src(config.static.src)
    .pipe(gulp.dest(config.static.outputDir))
    .pipe(print(log.created))
  ;
}
