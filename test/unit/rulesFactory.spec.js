describe ('RulesFactory', function(){

  beforeEach(module('japanesifyApp'));

  var rules;

  beforeEach(inject(function(RulesFactory){
    rules = new RulesFactory();
  }));

  it('initialised with two rules', function() {
    expect(rules.regex).toEqual({});
  });

  it('initialised with two rules', function() {
    expect(rules.matcher).toEqual([]);
  });

});
