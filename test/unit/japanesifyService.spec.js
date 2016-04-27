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

  it ('combines a vowel with a preceding consonant', function() {
    var string = "misa";
    expect(japenesifyService.splitIntoSyllables(string, ruleJP)).toEqual(["mi","sa"]);
  });

  it ("slices an 'n' out if it precedes a consonant", function() {
    var string = "lorenzo";
    expect(japenesifyService.splitIntoSyllables(string, ruleJP)).toEqual(["lo","re","n", "zo"]);
  });

  it ("slices an 'n' out if it's the last letter", function() {
    var string = "kevin";
    expect(japenesifyService.splitIntoSyllables(string, ruleJP)).toEqual(["ke","vi","n"]);
  });

  it ("combines a double 'n' and a following vowel", function() {
    var string = "tobenna";
    expect(japenesifyService.splitIntoSyllables(string, ruleJP)).toEqual(["to","be","nna"]);
  });

  it ("slices an 's' out it precedes a consonant", function() {
    var string = "yasmin";
    expect(japenesifyService.splitIntoSyllables(string, ruleJP)).toEqual(["ya","s","mi", "n"]);
  });

  it ("combines the last 'r' with a preceding vowel or contonant/vowel pair", function() {
    var string = "caspar";
    expect(japenesifyService.splitIntoSyllables(string, ruleJP)).toEqual(["ca","s","par"]);
  });

  it ("recognises and split 'ch' followed by a consonant", function() {
    var string = "chris";
    expect(japenesifyService.splitIntoSyllables(string, ruleJP)).toEqual(["ch","ri","s"]);
  });

  it ("recognises 'sh' and combines it with a following vowel", function() {
    var string = "shane";
    expect(japenesifyService.splitIntoSyllables(string, ruleJP)).toEqual(["sha","ne"]);
  });

  it ("splits a consonant if it's the last letter, expecpt for 'r'", function() {
    var string = "adil";
    expect(japenesifyService.splitIntoSyllables(string, ruleJP)).toEqual(["a","di","l"]);
  });

  it ("recognise and split 'ph' followed by a double consonant", function() {
    var string = "phoebe";
    expect(japenesifyService.splitIntoSyllables(string, ruleJP)).toEqual(["phoe","be"]);
  });

  it ('combines double consonants at the end of name', function() {
    var string = "nick";
    expect(japenesifyService.splitIntoSyllables(string, ruleJP)).toEqual(["ni","ck"]);
  });

  it ('convert an array of syllables to a japanese string', function() {
    var array = ["ca","s","par"];
    expect(japenesifyService.convertToJapanese(array, ruleJP)).toEqual('カスパー');
  });
});
