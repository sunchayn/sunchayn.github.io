const
  gulp      = require('gulp'),
  console   = require('better-console'),
  print     = require('gulp-print').default
;

const 
  log       = require('../helpers/log')
;

const config = require('../config/build.js').static;

module.exports = function(callback) {
  
  console.log('Building Static files...');

  return gulp.src(config.src)
  .pipe(gulp.dest(config.outputDir))
  .pipe(print(log.created))
  ;
  
}
