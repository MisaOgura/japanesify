describe('japenesifyService', function (){
  beforeEach(module('japanesifyApp'));

  var japenesifyService, string;
  var ruleJP = {regex: /([b-df-hj-np-tv-z][aeiou]r|[b-df-hj-np-tv-z][aeiou]|[b-df-hj-np-tv-z])/i, matcher: { "Ca": "カ", 's': 'ス', 'par': 'パー' }};

  beforeEach(inject(function(_japanesifyService_){
    japenesifyService = _japanesifyService_;
  }));

  it ('split string based on regex', function() {
    var string = "Caspar";
    expect(japenesifyService.splitIntoSyllables(string, ruleJP)).toEqual(["Ca","s","par"]);
  });

  it ('convert an array of syllables to a japanese string', function() {
    var array = ["Ca","s","par"];
    expect(japenesifyService.convertToJapanese(array, ruleJP)).toEqual('カスパー');
  });
});
