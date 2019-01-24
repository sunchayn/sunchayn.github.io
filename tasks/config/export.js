const destBaseDir = global.destDir;
const outputDirBase = './public/';

module.exports = {
  js: {
    src : destBaseDir + '/js/**/*',
    outputDir: outputDirBase + '/js/',
    uglify: true
  },
  css: {
    src : destBaseDir + '/css/**/*',
    outputDir: outputDirBase + '/css/',
  },
  static: {
    src : destBaseDir + '/static/**/*',
    outputDir: outputDirBase + '/static/',
  },
  html: {
    src : destBaseDir + '/*.html',
    outputDir: outputDirBase + '/../',
  }
}
