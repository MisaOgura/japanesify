describe('japanesifyService', function (){
  beforeEach(module('japanesifyApp'));

  var japanesifyService;
  var string = 'caspar';
  var regexFunc = function() {
    return /([b-df-hj-np-tv-z]{2})\b|([b-df-hj-np-tv-z][aeiou][rwy])(\b|(?![aeiouy]))|([bdf-hj-np-tv-z]+[aeo][aeiu])|([b-df-hj-np-tv-z]h[aeiou])|([ln]{2}[aeiou])|\b(ch(?![aeiou]))|([b-df-hj-np-tv-z][aeiou])|([b-df-hj-npqstv-z])|([aeiou])/i;
  };
  var matcherFunc = function() {
    return {'a'   : 'ア',
            'e'   : 'エ',
            'b'   : 'ブ',
            'c'   : 'ク',
            'd'   : 'ド',
            'f'   : 'フ',
            'j'   : 'ジ',
            'k'   : 'カ',
            'l'   : 'ル',
            'n'   : 'ン',
            'o'   : 'オ',
            's'   : 'ス',
            't'   : 'ト',
            'y'   : 'イ',
            'ri'  : 'リ',
            'ka'  : 'カ',
            'mi'  : 'ミ',
            'sa'  : 'サ',
            'mu'  : 'ム',
            'lo'  : 'ロ',
            're'  : 'レ',
            'zo'  : 'ツォ',
            'to'  : 'ト',
            'be'  : 'ベ',
            'ke'  : 'ケ',
            'vi'  : 'ヴィ',
            'ca'  : 'カ',
            'pe'  : 'ピー',
            'te'  : 'ト',
            'jo'  : 'ジョー',
            'di'  : 'ディ',
            'ya'  : 'ヤ',
            'ja'  : 'ジャ',
            'na'  : 'ナ',
            'si'  : 'サイ',
            'mo'  : 'モ',
            'ha'  : 'ハ',
            'ni'  : 'ニ',
            'li'  : 'リ',
            'ne'  : 'ン',
            'le'  : 'レ',
            'ma'  : 'メイ',
            'me'  : 'メ',
            'ce'  : 'ス',
            'ga'  : 'ガ',
            'pa'  : 'パ',
            'zi'  : 'ツィ',
            'ju'  : 'ジュ',
            'yu'  : 'ユ',
            'ch'  : 'ク',
            'ck'  : 'ック',
            'nna' : 'ナ',
            'nne' : 'ン',
            'nno' : 'ノ',
            'lle' : 'ル',
            'par' : 'パー',
            'ver' : 'バー',
            'rew' : 'リュー',
            'chi' : 'チ',
            'rhi' : 'リ',
            'sha' : 'シェー',
            'lau' : 'ロー',
            'pau' : 'ポー',
            'har' : 'ハー',
            'cey' : 'シー',
            'phoe': 'フィー',
            'shee': 'シー',
          };
    };

  var ruleJP = { matcher : matcherFunc, regex : regexFunc };

  beforeEach(inject(function(_japanesifyService_, _rulesService_){
    japanesifyService = _japanesifyService_;
    rulesService = _rulesService_;
    spyOn(rulesService, 'threeCharSyllables').and.returnValue(/^([b-df-hj-np-tv-z]h[aeiou]|[bdf-hj-np-tv-z]+[aeo][aeiu]|[b-df-hj-np-tv-z][aeiou][rwy](\b|(?![aeiouy]))|[ln]{2}[aeiou])/i);
  }));

  describe('#splitIntoSyllables', function (){
    it ('split string based on regex', function() {
      expect(japanesifyService.splitIntoSyllables(string, rulesService)).toEqual(["ca","s","par"]);
    });
    it ('combines a vowel with a preceding consonant', function() {
      expect(japanesifyService.splitIntoSyllables("misa", rulesService)).toEqual(["mi","sa"]);
      expect(japanesifyService.splitIntoSyllables("erika", rulesService)).toEqual(["e", "ri","ka"]);
      expect(japanesifyService.splitIntoSyllables("murilo", rulesService)).toEqual(["mu", "ri","lo"]);
      expect(japanesifyService.splitIntoSyllables("pete", rulesService)).toEqual(["pe", "te"]);
    });
    it ("slices an 'n' out if it precedes a consonant", function() {
      expect(japanesifyService.splitIntoSyllables("lorenzo", rulesService)).toEqual(["lo","re","n", "zo"]);
    });

    it ("slices an 'n' out if it's the last letter", function() {
      expect(japanesifyService.splitIntoSyllables("kevin", rulesService)).toEqual(["ke","vi","n"]);
      expect(japanesifyService.splitIntoSyllables("simon", rulesService)).toEqual(["si","mo","n"]);
      expect(japanesifyService.splitIntoSyllables("yasmin", rulesService)).toEqual(["ya","s","mi", "n"]);
      expect(japanesifyService.splitIntoSyllables("sachin", rulesService)).toEqual(["sa","chi", "n"]);
      expect(japanesifyService.splitIntoSyllables("rhiannon", rulesService)).toEqual(["rhi","a", "nno", "n"]);
      expect(japanesifyService.splitIntoSyllables("junyuan", rulesService)).toEqual(["ju", "n", "yu", "a", "n"]);
    });

    it ("combines a double 'n' and a following vowel", function() {
      expect(japanesifyService.splitIntoSyllables("tobenna", rulesService)).toEqual(["to","be","nna"]);
      expect(japanesifyService.splitIntoSyllables("anne", rulesService)).toEqual(["a","nne"]);
    });

    it ("slices an 's' out it precedes a consonant", function() {
      expect(japanesifyService.splitIntoSyllables("jasmina", rulesService)).toEqual(["ja","s","mi", "na"]);
    });

    it ("combines the last 'r'/'w' with a preceding vowel or contonant/vowel pair", function() {
      expect(japanesifyService.splitIntoSyllables("oliver", rulesService)).toEqual(["o","li","ver"]);
      expect(japanesifyService.splitIntoSyllables("andrew", rulesService)).toEqual(["a","n","d", "rew"]);
    });

    it ("recognises double consonants in the beggining of name if it's followed by a consonant", function() {
      expect(japanesifyService.splitIntoSyllables("chris", rulesService)).toEqual(["ch","ri","s"]);
      expect(japanesifyService.splitIntoSyllables("kyle", rulesService)).toEqual(["k","y","le"]);
    });

    it ("recognises 'sh' and combines it with a following vowel", function() {
      expect(japanesifyService.splitIntoSyllables("shane", rulesService)).toEqual(["sha","ne"]);
    });

    it ("splits a consonant if it's the last letter, expecpt for 'r'", function() {
      var string = "adil";
      expect(japanesifyService.splitIntoSyllables("adil", rulesService)).toEqual(["a","di","l"]);
      expect(japanesifyService.splitIntoSyllables("joj", rulesService)).toEqual(["jo","j"]);
      expect(japanesifyService.splitIntoSyllables("hanif", rulesService)).toEqual(["ha","ni","f"]);
    });

    it ("recognise and split 'ph' followed by a double consonant", function() {
      expect(japanesifyService.splitIntoSyllables("phoebe", rulesService)).toEqual(["phoe","be"]);
    });

    it ('combines double consonants at the end of name', function() {
      expect(japanesifyService.splitIntoSyllables("nick", rulesService)).toEqual(["ni","ck"]);
      expect(japanesifyService.splitIntoSyllables("mary", rulesService)).toEqual(["ma","ry"]);
    });

    it ('combines double vowels if the first vowel is not "i"', function() {
      expect(japanesifyService.splitIntoSyllables("claudia", rulesService)).toEqual(["c", "lau","di", "a"]);
      expect(japanesifyService.splitIntoSyllables("paul", rulesService)).toEqual(["pau", "l"]);
      expect(japanesifyService.splitIntoSyllables("harsheet", rulesService)).toEqual(["har", "shee", "t"]);
    });

    it ('combines double vowels if the first vowel is "i"', function() {
      expect(japanesifyService.splitIntoSyllables("gabrielle", rulesService)).toEqual(["ga","b", "ri", "e", "lle"]);
      expect(japanesifyService.splitIntoSyllables("patrizio", rulesService)).toEqual(["pa","t", "ri", "zi", "o"]);
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

  describe('#translateWord', function() {
    it ('returns a correct array for four letters', function() {
      expect(japanesifyService.translateWord('rhia', rulesService)).toEqual('リア');
    });
    it ('returns a correct array for rhiannon', function() {
      expect(japanesifyService.translateWord('rhiannon', rulesService)).toEqual('リアノン');
    });
  });
});
