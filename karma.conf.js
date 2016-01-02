module.exports = function(config){
  config.set({
    files: [
      'src/components/lodash/lodash.min.js',
      'src/js/*.js'
    ],
    basePath: './',
    autoWatch: true,
    reporters: ['progress', 'junit'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    captureTimeout: 60000,
    frameworks: ['mocha', 'sinon-chai'],
    // frameworks: ['jasmine'],
    browsers: ['PhantomJS'],
    // browsers: ['Chrome'],
    plugins: [
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-mocha',
      'karma-sinon-chai'
      // 'karma-jasmine'
    ],
    junitReporter: {
      outputDir: 'test',
      outputFile: 'unit.xml',
      suite: '',
      useBrowserName: true
    },
    singleRun: false
  });
};
