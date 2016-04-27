describe('japenesifyService', function (){
  beforeEach(module('japanesifyApp'));

  var japenesifyService, string;
  var ruleJP = {regex: /(ll[aeiou])|([b-df-hj-np-tv-z]{2})\b|([b-df-hj-np-tv-z][aeiou][rw])(\b|(?![aeiouy]))|([bdf-hj-np-tv-z]+[aeo][aeiou])|([b-df-hj-np-tv-z]h[aeiou])|(nn[aeiou])|\b(ch(?![aeiou]))|(ch[aeiou])|([b-df-hj-np-tv-z][aeiou])|([b-df-hj-npqstv-z])|([aeiou])/i,
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

  it ('combines a vowel with a preceding consonant', function() {
    expect(japenesifyService.splitIntoSyllables("misa", ruleJP)).toEqual(["mi","sa"]);
    expect(japenesifyService.splitIntoSyllables("erika", ruleJP)).toEqual(["e", "ri","ka"]);
    expect(japenesifyService.splitIntoSyllables("murilo", ruleJP)).toEqual(["mu", "ri","lo"]);
    expect(japenesifyService.splitIntoSyllables("pete", ruleJP)).toEqual(["pe", "te"]);
  });

  it ("slices an 'n' out if it precedes a consonant", function() {
    expect(japenesifyService.splitIntoSyllables("lorenzo", ruleJP)).toEqual(["lo","re","n", "zo"]);
  });

  it ("slices an 'n' out if it's the last letter", function() {
    expect(japenesifyService.splitIntoSyllables("kevin", ruleJP)).toEqual(["ke","vi","n"]);
    expect(japenesifyService.splitIntoSyllables("simon", ruleJP)).toEqual(["si","mo","n"]);
    expect(japenesifyService.splitIntoSyllables("yasmin", ruleJP)).toEqual(["ya","s","mi", "n"]);
    expect(japenesifyService.splitIntoSyllables("sachin", ruleJP)).toEqual(["sa","chi", "n"]);
    expect(japenesifyService.splitIntoSyllables("rhiannon", ruleJP)).toEqual(["rhi","a", "nno", "n"]);
    expect(japenesifyService.splitIntoSyllables("junyuan", ruleJP)).toEqual(["ju", "n", "yu", "a", "n"]);
  });

  it ("combines a double 'n' and a following vowel", function() {
    expect(japenesifyService.splitIntoSyllables("tobenna", ruleJP)).toEqual(["to","be","nna"]);
    expect(japenesifyService.splitIntoSyllables("anne", ruleJP)).toEqual(["a","nne"]);
  });

  it ("slices an 's' out it precedes a consonant", function() {
    expect(japenesifyService.splitIntoSyllables("yasmin", ruleJP)).toEqual(["ya","s","mi", "n"]);
    expect(japenesifyService.splitIntoSyllables("jasmina", ruleJP)).toEqual(["ja","s","mi", "na"]);
    expect(japenesifyService.splitIntoSyllables("caspar", ruleJP)).toEqual(["ca","s","par"]);
  });

  it ("combines the last 'r'/'w' with a preceding vowel or contonant/vowel pair", function() {
    expect(japenesifyService.splitIntoSyllables("caspar", ruleJP)).toEqual(["ca","s","par"]);
    expect(japenesifyService.splitIntoSyllables("oliver", ruleJP)).toEqual(["o","li","ver"]);
    expect(japenesifyService.splitIntoSyllables("andrew", ruleJP)).toEqual(["a","n","d", "rew"]);
  });

  it ("recognises double consonants in the beggining of name if it's followed by a consonant", function() {
    expect(japenesifyService.splitIntoSyllables("chris", ruleJP)).toEqual(["ch","ri","s"]);
    expect(japenesifyService.splitIntoSyllables("kyle", ruleJP)).toEqual(["k","y","le"]);
  });

  it ("recognises 'sh' and combines it with a following vowel", function() {
    expect(japenesifyService.splitIntoSyllables("shane", ruleJP)).toEqual(["sha","ne"]);
  });

  it ("splits a consonant if it's the last letter, expecpt for 'r'", function() {
    var string = "adil";
    expect(japenesifyService.splitIntoSyllables("adil", ruleJP)).toEqual(["a","di","l"]);
    expect(japenesifyService.splitIntoSyllables("joj", ruleJP)).toEqual(["jo","j"]);
    expect(japenesifyService.splitIntoSyllables("hanif", ruleJP)).toEqual(["ha","ni","f"]);
    expect(japenesifyService.splitIntoSyllables("simon", ruleJP)).toEqual(["si","mo","n"]);
    expect(japenesifyService.splitIntoSyllables("chris", ruleJP)).toEqual(["ch","ri","s"]);
  });

  it ("recognise and split 'ph' followed by a double consonant", function() {
    expect(japenesifyService.splitIntoSyllables("phoebe", ruleJP)).toEqual(["phoe","be"]);
  });

  it ('combines double consonants at the end of name', function() {
    expect(japenesifyService.splitIntoSyllables("nick", ruleJP)).toEqual(["ni","ck"]);
    expect(japenesifyService.splitIntoSyllables("mary", ruleJP)).toEqual(["ma","ry"]);
  });

  it ('combines double vowels if the first vowel is not "i"', function() {
    expect(japenesifyService.splitIntoSyllables("claudia", ruleJP)).toEqual(["c", "lau","di", "a"]);
    expect(japenesifyService.splitIntoSyllables("paul", ruleJP)).toEqual(["pau", "l"]);
    expect(japenesifyService.splitIntoSyllables("harsheet", ruleJP)).toEqual(["har", "shee", "t"]);
  });

  it ('combines double vowels if the first vowel is "i"', function() {
    expect(japenesifyService.splitIntoSyllables("gabrielle", ruleJP)).toEqual(["ga","b", "ri", "e", "lle"]);
    expect(japenesifyService.splitIntoSyllables("patrizio", ruleJP)).toEqual(["pa","t", "ri", "zi", "o"]);
  });

});
