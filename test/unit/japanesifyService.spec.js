describe('japenesifyService', function (){
  beforeEach(module('japanesifyApp'));

  var japanesifyService;
  var string = 'Caspar';
  var ruleJP = {regex: /([b-df-hj-np-tv-z][aeiou]r|[b-df-hj-np-tv-z][aeiou]|[b-df-hj-np-tv-z])/i, matcher: { "Ca": "カ", 's': 'ス', 'par': 'パー' }};

  beforeEach(inject(function(_japanesifyService_){
    japanesifyService = _japanesifyService_;
  }));

  describe('#splitIntoSyllables', function (){
    it ('split string based on regex', function() {
      expect(japanesifyService.splitIntoSyllables(string, ruleJP)).toEqual(["Ca","s","par"]);
    });
  });

  describe('#convertToJapanese', function(){
    it ('convert an array of syllables to a japanese string', function() {
      var array = ["Ca","s","par"];
      expect(japanesifyService.convertToJapanese(array, ruleJP)).toEqual('カスパー');
    });
  });

  fdescribe('#translateWord', function(){
    it ('returns translated string', function() {
      expect(japanesifyService.translateWord(string, ruleJP)).toEqual('カスパー');
    });
  });
});
