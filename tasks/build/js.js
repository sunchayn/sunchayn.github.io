const
  gulp        = require('gulp'),
  console     = require('better-console'),
  plumber     = require('gulp-plumber'),
  notify      = require('gulp-notify'),
  concat      = require('gulp-concat'),
  rename      = require('gulp-rename'),
  print       = require('gulp-print').default,
  browserify  = require('browserify'),
  babelify    = require('babelify'),
  buffer      = require('vinyl-buffer'),
  source      = require('vinyl-source-stream'),
  mergeStreams      = require('merge-stream')
;

const 
  log         = require('../helpers/log')
;

const config = require('../config/build.js').js;

function bundle (bundler, filename) {
    return bundler
      .bundle()
      .pipe(plumber({ errorHandler: function(err) {
        notify.onError({
          title: "Gulp error in " + err.plugin,
          message:  err.toString()
        })(err);
      }}))
      .pipe(source( config.src ))
      .pipe(buffer())
      .pipe(rename(filename))
      .pipe(gulp.dest(config.outputDir))
      .pipe(print(log.created))
    ;
}

module.exports = function(callback) {
  
  console.log('Building JS files...');

  // gulp.src(config.vendor.src)
  // .pipe(concat(config.vendor.filename))
  // .pipe(gulp.dest(config.vendor.outputDir));

  const notFound = browserify(config.notFoundSrc)
                    .transform(babelify, { 
                      presets : [ '@babel/preset-env' ] 
                    });

  const stream1 = bundle(notFound, config.notFoundFilename);

  const bundler = browserify(config.src)
                    .transform(babelify, { 
                      presets : [ '@babel/preset-env' ] 
                    });

  const stream2 = bundle(bundler, config.filename);

  // return stream2;
  return mergeStreams(stream1, stream2);
}
