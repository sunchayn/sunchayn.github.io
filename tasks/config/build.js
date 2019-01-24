const srcDir = global.srcDir;
const destDir = global.destDir;

module.exports = {
  js: {
    src: srcDir + '/js/main.js',
    notFoundSrc: srcDir + '/js/404.js',
    outputDir: destDir + '/js/',
    filename: 'bundle.min.js',
    notFoundFilename: '404.min.js',
    vendor: {
      src: './src/js/vendor/*.js',
      outputDir: destDir + '/js/',
      filename: 'vendor.min.js',
    }
  },
  css: {
    src : srcDir + '/scss/main.scss',
    criticalSrc : srcDir + '/scss/critical.scss',
    outputDir: destDir + '/css/',
    filename: 'app.min.css',
    criticalFilename: 'critical.min.css',
    importedFilesSrc: './src/scss/**/*'
  },
  static: {
    src : srcDir + '/static/**/*',
    outputDir: destDir + '/static/',
  },
  html: {
    src : srcDir + '/html/**/*.html',
    outputDir: destDir + '/',
  }
}
