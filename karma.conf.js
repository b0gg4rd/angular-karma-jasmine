module.exports = function(config) {
  config.set({
    basePath      : '',
    frameworks    : ['jasmine'],
    files         : [
      'bower_components/angular/angular.js',
      'bower_components/angular-ui-router/release/angular-ui-router.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'dist/**/*.js'
    ],
    exclude       : [
    ],
    preprocessors : {
    },
    reporters     : ['spec'],
    port          : 9876,
    colors        : true,
    logLevel      : config.LOG_INFO,
    autoWatch     : true,
    browsers      : ['PhantomJS'],
    plugings      : [
      'karma-jasmine',
      'karma-phantomjs-launcher'
    ],
    singleRun     : false,
    concurrency   : Infinity
  })
}
