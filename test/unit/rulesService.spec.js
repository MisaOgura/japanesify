describe ('rulesService', function(){

  beforeEach(module('japanesifyApp'));

  var rulesService;

  function _returnMatch(name, matcher){
    return name.match(matcher)[0];
  }

  beforeEach(inject(function(_rulesService_){
    rulesService = _rulesService_;
  }));

  it('initialised with a matcher', function() {
    expect(rulesService.matcher().constructor.name).toEqual("Object");
  });

  describe('#twoCharSyllables', function(){
    it('returns the pair when the name matches the rule', function(){
      var rule = rulesService.twoCharSyllables();
      expect(_returnMatch('caspar', rule)).toEqual("ca");
      expect(_returnMatch('misa', rule)).toEqual("mi");
      expect(_returnMatch('chrch', rule)).toEqual("ch");
      expect(_returnMatch('ch', rule)).toEqual("ch");
    });
  });

  describe('#threeCharSyllables', function() {
    it('returns the trio when the name matches the rule', function(){
      var rule = rulesService.threeCharSyllables();
      expect(_returnMatch('rhiannon', rule)).toEqual("rhi");
      expect(_returnMatch('shane', rule)).toEqual("sha");
      expect(_returnMatch('paul', rule)).toEqual("pau");
      expect(_returnMatch('par', rule)).toEqual("par");
      expect(_returnMatch('nna', rule)).toEqual("nna");
    });
  });
});
