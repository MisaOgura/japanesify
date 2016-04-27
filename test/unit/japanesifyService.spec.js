describe('japanesifyService', function (){
  beforeEach(module('japanesifyApp'));

  var japanesifyService;
  var string = 'caspar';
  var regexFunc = function() {
    return /(ll[aeiou])|([b-df-hj-np-tv-z]{2})\b|([b-df-hj-np-tv-z][aeiou][rw])(\b|(?![aeiouy]))|([bdf-hj-np-tv-z]+[aeo][aeiou])|([b-df-hj-np-tv-z]h[aeiou])|(nn[aeiou])|\b(ch(?![aeiou]))|(ch[aeiou])|([b-df-hj-np-tv-z][aeiou])|([b-df-hj-npqstv-z])|([aeiou])/i
  };
  var matcherFunc = function() {
    return {
      'e'   : 'エ',
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
      'c' : 'ク',
      'le': 'レ',
      'me': 'メ',
      'ce': 'ス'
      }
    };

  var ruleJP = { matcher : matcherFunc, regex : regexFunc }

  beforeEach(inject(function(_japanesifyService_){
    japanesifyService = _japanesifyService_;
  }));

  describe('#splitIntoSyllables', function (){
    it ('split string based on regex', function() {
      expect(japanesifyService.splitIntoSyllables(string, ruleJP)).toEqual(["ca","s","par"]);
    });
  });

  describe('#convertToJapanese', function(){
    it ('convert an array of syllables to a japanese string', function() {
      var array = ["ca","s","par"];
      expect(japanesifyService.convertToJapanese(array, ruleJP)).toEqual('カスパー');
    });
  });

  describe('#translateWord', function(){
    it ('returns translated string', function() {
      expect(japanesifyService.translateWord(string, ruleJP)).toEqual('カスパー');
    });
  });

  it ('combines a vowel with a preceding consonant', function() {
    expect(japanesifyService.splitIntoSyllables("misa", ruleJP)).toEqual(["mi","sa"]);
    expect(japanesifyService.splitIntoSyllables("erika", ruleJP)).toEqual(["e", "ri","ka"]);
    expect(japanesifyService.splitIntoSyllables("murilo", ruleJP)).toEqual(["mu", "ri","lo"]);
    expect(japanesifyService.splitIntoSyllables("pete", ruleJP)).toEqual(["pe", "te"]);
  });

  it ("slices an 'n' out if it precedes a consonant", function() {
    expect(japanesifyService.splitIntoSyllables("lorenzo", ruleJP)).toEqual(["lo","re","n", "zo"]);
  });

  it ("slices an 'n' out if it's the last letter", function() {
    expect(japanesifyService.splitIntoSyllables("kevin", ruleJP)).toEqual(["ke","vi","n"]);
    expect(japanesifyService.splitIntoSyllables("simon", ruleJP)).toEqual(["si","mo","n"]);
    expect(japanesifyService.splitIntoSyllables("yasmin", ruleJP)).toEqual(["ya","s","mi", "n"]);
    expect(japanesifyService.splitIntoSyllables("sachin", ruleJP)).toEqual(["sa","chi", "n"]);
    expect(japanesifyService.splitIntoSyllables("rhiannon", ruleJP)).toEqual(["rhi","a", "nno", "n"]);
    expect(japanesifyService.splitIntoSyllables("junyuan", ruleJP)).toEqual(["ju", "n", "yu", "a", "n"]);
  });

  it ("combines a double 'n' and a following vowel", function() {
    expect(japanesifyService.splitIntoSyllables("tobenna", ruleJP)).toEqual(["to","be","nna"]);
    expect(japanesifyService.splitIntoSyllables("anne", ruleJP)).toEqual(["a","nne"]);
  });

  it ("slices an 's' out it precedes a consonant", function() {
    expect(japanesifyService.splitIntoSyllables("yasmin", ruleJP)).toEqual(["ya","s","mi", "n"]);
    expect(japanesifyService.splitIntoSyllables("jasmina", ruleJP)).toEqual(["ja","s","mi", "na"]);
    expect(japanesifyService.splitIntoSyllables("caspar", ruleJP)).toEqual(["ca","s","par"]);
  });

  it ("combines the last 'r'/'w' with a preceding vowel or contonant/vowel pair", function() {
    expect(japanesifyService.splitIntoSyllables("caspar", ruleJP)).toEqual(["ca","s","par"]);
    expect(japanesifyService.splitIntoSyllables("oliver", ruleJP)).toEqual(["o","li","ver"]);
    expect(japanesifyService.splitIntoSyllables("andrew", ruleJP)).toEqual(["a","n","d", "rew"]);
  });

  it ("recognises double consonants in the beggining of name if it's followed by a consonant", function() {
    expect(japanesifyService.splitIntoSyllables("chris", ruleJP)).toEqual(["ch","ri","s"]);
    expect(japanesifyService.splitIntoSyllables("kyle", ruleJP)).toEqual(["k","y","le"]);
  });

  it ("recognises 'sh' and combines it with a following vowel", function() {
    expect(japanesifyService.splitIntoSyllables("shane", ruleJP)).toEqual(["sha","ne"]);
  });

  it ("splits a consonant if it's the last letter, expecpt for 'r'", function() {
    var string = "adil";
    expect(japanesifyService.splitIntoSyllables("adil", ruleJP)).toEqual(["a","di","l"]);
    expect(japanesifyService.splitIntoSyllables("joj", ruleJP)).toEqual(["jo","j"]);
    expect(japanesifyService.splitIntoSyllables("hanif", ruleJP)).toEqual(["ha","ni","f"]);
    expect(japanesifyService.splitIntoSyllables("simon", ruleJP)).toEqual(["si","mo","n"]);
    expect(japanesifyService.splitIntoSyllables("chris", ruleJP)).toEqual(["ch","ri","s"]);
  });

  it ("recognise and split 'ph' followed by a double consonant", function() {
    expect(japanesifyService.splitIntoSyllables("phoebe", ruleJP)).toEqual(["phoe","be"]);
  });

  it ('combines double consonants at the end of name', function() {
    expect(japanesifyService.splitIntoSyllables("nick", ruleJP)).toEqual(["ni","ck"]);
    expect(japanesifyService.splitIntoSyllables("mary", ruleJP)).toEqual(["ma","ry"]);
  });

  it ('combines double vowels if the first vowel is not "i"', function() {
    expect(japanesifyService.splitIntoSyllables("claudia", ruleJP)).toEqual(["c", "lau","di", "a"]);
    expect(japanesifyService.splitIntoSyllables("paul", ruleJP)).toEqual(["pau", "l"]);
    expect(japanesifyService.splitIntoSyllables("harsheet", ruleJP)).toEqual(["har", "shee", "t"]);
  });

  it ('combines double vowels if the first vowel is "i"', function() {
    expect(japanesifyService.splitIntoSyllables("gabrielle", ruleJP)).toEqual(["ga","b", "ri", "e", "lle"]);
    expect(japanesifyService.splitIntoSyllables("patrizio", ruleJP)).toEqual(["pa","t", "ri", "zi", "o"]);
  });

});
