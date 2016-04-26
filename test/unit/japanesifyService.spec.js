describe('japenesifyService', function (){
  beforeEach(module('japanesifyApp'));

  var japenesifyService, JPrule, string;

  beforeEach(inject(function(_japanesifyService_){
    japenesifyService = _japanesifyService_
    var JPrule = {regex: "/[b-df-hj-np-tv-z][eaiou]/i", matcher: {"/a/":"あ"}}
    var string = "Caspar"
  }));

  it ('split string based on regex', function() {
    expect(japenesifyService.splitIntoSyllables("Caspar", {regex: /([b-df-hj-np-tv-z][aeiou]r|[b-df-hj-np-tv-z][aeiou]|[b-df-hj-np-tv-z])/i, matcher: {"/a/":"あ"}})).toEqual(["Ca","s","par"])
  })

});