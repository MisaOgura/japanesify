describe ('rulesService', function(){

  beforeEach(module('japanesifyApp'));

  var rulesService;

  beforeEach(inject(function(_rulesService_){
    rulesService = _rulesService_;
  }));

  it('initialised with two rules', function() {
    expect(rulesService.regex.constructor.name).toEqual("RegExp");
  });

  it('initialised with two rules', function() {
    expect(rulesService.matcher.constructor.name).toEqual("Object");
  });

});
