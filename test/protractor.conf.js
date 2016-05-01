exports.config = {
  specs: ['e2e/*.js'],
  baseUrl: 'http://localhost:8080',

 onPrepare: function() {
  var SpecReporter = require('jasmine-spec-reporter');
  jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));
  },

  jasmineNodeOpts: {
   print: function() {}
  }
};
