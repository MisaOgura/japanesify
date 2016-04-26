describe ('RulesFactory', function(){

  beforeEach(module('japanesifyApp'));

  var factory;

  beforeEach(inject(function(RulesFactory){

    Rule = new RulesFactory();

  }));

});
