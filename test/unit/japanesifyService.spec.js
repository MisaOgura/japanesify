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

  fdescribe('#translateWord', function() {
    it ('return the first three chars', function() {
      expect(japanesifyService.translateWord('rhia', rulesService)).toEqual('リア');
    });
  });
});
