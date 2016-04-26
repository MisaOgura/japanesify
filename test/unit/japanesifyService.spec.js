describe('japenesifyService', function (){
  beforeEach(module('japanesifyApp'));

  var japenesifyService;

  beforeEach(inject(function(_japanesifyService_){
    japenesifyService = _japanesifyService_
    rule = {split: {"/^a/": true, "/^B": false}, matcher: {"/a/":"あ"}}
    string = "abc"
  }));

  it ('split string based on regex', function() {
    expect(japenesifyService.splitIntoSyllables(string, rule.split)).toEqual(["a","bc"])
  })

});