describe('japenesifyService', function (){
  beforeEach(module('japanesifyApp'));

  var japenesifyService, string;
  var ruleJP = {regex: /(ll[aeiou])|([b-df-hj-np-tv-z][aeiou]r|w)\b|(phoe)|([b-df-hj-np-tv-z][aeiou]{2})|([b-df-hj-np-tv-z]h[aeiou])|(nn[aeiou])|(ch(?![aeiou]))|(ch[aeiou])|([b-df-hj-np-tv-z][aeiou])|(ck)|([b-df-hj-npqstv-z])|([aeiou])/i,
                matcher: {'e'   : 'エ',
                                'ri'  : 'リ',
                                'ka'  : 'カ',
                                'mi'  : 'ミ',
                                'sa'  : 'サ',
                                'mu'  : 'ム',
                                'lo'  : 'ロ',
                                're'  : 'レ',
                                'n'   : 'ン',
                                'zo'  : 'ツォ',
                                'to'  : 'ト',
                                'be'  : 'ベ',
                                'nna' : 'ナ',
                                'ke'  : 'ケ',
                                'vi'  : 'ヴィ',
                                'ca'  : 'カ',
                                's'   : 'ス',
                                'par' : 'パー',
                                'a'   : 'ア',
                                'nne' : 'ン',
                                'pe'  : 'ピー',
                                'te'  : 'ト',
                                'ch'  : 'ク',
                                'jo'  : 'ジョー',
                                'j'   : 'ジ',
                                'di'  : 'ディ',
                                'l'   : 'ル',
                                'ya'  : 'ヤ',
                                'ja'  : 'ジャ',
                                'na'  : 'ナ',
                                'si'  : 'サイ',
                                'mo'  : 'モ',
                                'ha'  : 'ハ',
                                'ni'  : 'ニ',
                                'f'   : 'フ',
                                'pau' : 'ポー',
                                'o'   : 'オ',
                                'li'  : 'リ',
                                'ver' : 'バー',
                                'chi' : 'チ',
                                'sha' : 'シェー',
                                'ne'  : 'ン',
                                'phoe': 'フィー',
                                'rhi': 'リ',
                                'nno': 'ノ',
                                'ck': 'ック',
                                'c': 'ク',
                                'le': 'レ',
                                'me': 'メ',
                                'ce': 'ス'
                                }};

  beforeEach(inject(function(_japanesifyService_){
    japenesifyService = _japanesifyService_;
  }));

  it ('split string based on regex', function() {
    var string = "caspar";
    expect(japenesifyService.splitIntoSyllables(string, ruleJP)).toEqual(["ca","s","par"]);
  });

  it ('convert an array of syllables to a japanese string', function() {
    var array = ["ca","s","par"];
    expect(japenesifyService.convertToJapanese(array, ruleJP)).toEqual('カスパー');
  });

  it ("recognise double 'nn's followed by a vowel", function() {
    var string = "tobenna";
    expect(japenesifyService.splitIntoSyllables(string, ruleJP)).toEqual(["to","be","nna"]);
  });

  it ("recognise and split 'ch' followed by a consonant", function() {
    var string = "chris";
    expect(japenesifyService.splitIntoSyllables(string, ruleJP)).toEqual(["ch","ri","s"]);
  });

  it ("recognise and split 'ch' followed by a consonant", function() {
    var string = "phoebe";
    expect(japenesifyService.splitIntoSyllables(string, ruleJP)).toEqual(["phoe","be"]);
  });
});
