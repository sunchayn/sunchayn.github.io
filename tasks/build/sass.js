const
  gulp      = require('gulp'),
  sass      = require('gulp-sass'),
  plumber   = require('gulp-plumber'),
  notify    = require('gulp-notify'),
  console   = require('better-console'),
  rename    = require('gulp-rename'),
  print     = require('gulp-print').default,
  mergeStreams      = require('merge-stream')
;

const 
  log       = require('../helpers/log')
;

const config = require('../config/build.js').css;


module.exports = function(callback) {
  
  console.log('Building CSS file...');

  const stream1 = gulp.src(config.criticalSrc)
  .pipe(plumber({ errorHandler: function(err) {
    notify.onError({
        title: "Gulp error in " + err.plugin,
        message:  err.toString()
    })(err);
  }}))
  .pipe(sass({
      includePaths: config.importedFilesSrc,
      outputStyle: 'compressed'
  }))
  .pipe(rename(config.criticalFilename))
  .pipe(gulp.dest(config.outputDir))
  .pipe(print(log.created))
  ;

  const stream2 = gulp.src(config.src)
  .pipe(plumber({ errorHandler: function(err) {
    notify.onError({
        title: "Gulp error in " + err.plugin,
        message:  err.toString()
    })(err);
  }}))
  .pipe(sass({
      includePaths: config.importedFilesSrc,
      outputStyle: 'compressed'
  }))
  .pipe(rename(config.filename))
  .pipe(gulp.dest(config.outputDir))
  .pipe(print(log.created));


  // return stream2;
  return mergeStreams(stream1, stream2);
}
