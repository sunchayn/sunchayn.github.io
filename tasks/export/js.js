const
  gulp        = require('gulp'),
  console     = require('better-console'),
  plumber     = require('gulp-plumber'),
  notify      = require('gulp-notify'),
  concat      = require('gulp-concat'),
  rename      = require('gulp-rename'),
  replace     = require('gulp-replace'),
  print       = require('gulp-print').default,
  uglify      = require('gulp-uglify')
;

const
  log       = require('../helpers/log')
;

const config = require('../config/export.js');

module.exports = function(callback) {
  console.log('copying JavaScript files...');
  let stream = gulp.src(config.js.src)
  ;

  if (config.js.uglify === true ) {
    stream = stream.pipe(uglify());
  }

  stream
  .pipe(gulp.dest(config.js.outputDir))
  .pipe(print(log.created))
  ;

}
