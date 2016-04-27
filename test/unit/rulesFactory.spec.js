describe ('RulesFactory', function(){

  beforeEach(module('japanesifyApp'));

  var rules;

  beforeEach(inject(function(RulesFactory){
    rules = new RulesFactory();
  }));

  it('initialised with two rules', function() {
    expect(rules.regex.constructor.name).toEqual("RegExp");
  });

  it('initialised with two rules', function() {
    expect(rules.matcher.constructor.name).toEqual("Object");
  });

});
