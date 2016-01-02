module.exports = function(config){
  config.set({
    files         : [
      'src/js/*.js'
    ],
    basePath      : './',
    autoWatch     : true,
    frameworks    : ['jasmine'],
    browsers      : ['PhantomJS'],
    plugins       : [
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-jasmine'
    ]
  });
};
