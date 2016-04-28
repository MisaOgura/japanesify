describe('japanesifyService', function (){
  beforeEach(module('japanesifyApp'));

  var japanesifyService;

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
            'da'  : 'ダ',
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
            'ma'  : 'マ',
            'me'  : 'メ',
            'ce'  : 'ス',
            'ga'  : 'ガ',
            'pa'  : 'パ',
            'zi'  : 'ツィ',
            'ju'  : 'ジュ',
            'yu'  : 'ユ',
            'ch'  : 'ク',
            'ck'  : 'ック',
            'ry'  : 'リー',
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

  var ruleJP = { matcher : matcherFunc};

  var names = [{string:"caspar",   array: ["ca","s","par"],          japanese: 'カスパー'},
               {string:"misa",     array: ["mi","sa"]},
               {string:"erika",    array:["e", "ri","ka"]},
               {string:"murilo",   array:["mu", "ri","lo"]},
               {string:"pete",     array:["pe", "te"]},
               {string:"lorenzo",  array:["lo","re","n", "zo"]},
               {string:"kevin",    array:["ke","vi","n"]},
               {string:"simon",    array:["si","mo","n"]},
               {string:"yasmin",   array:["ya","s","mi", "n"]},
               {string:"sachin",   array:["sa","chi", "n"]},
               {string:"rhiannon", array:["rhi","a", "nno", "n"]},
               {string:"junyuan",  array:["ju", "n", "yu", "a", "n"]},
               {string:"tobenna",  array:["to","be","nna"]},
               {string:"anne",     array:["a","nne"]},
               {string:"jasmina",  array:["ja","s","mi", "na"]},
               {string:"oliver",   array:["o","li","ver"]},
               {string:"andrew",   array:["a","n","d", "rew"]},
               {string:"chris",    array:["ch","ri","s"]},
               {string:"kyle",     array:["k","y","le"]},
               {string:"shane",    array:["sha","ne"]},
               {string:"adil",     array:["a","di","l"]},
               {string:"joj",      array:["jo","j"]},
               {string:"hanif",    array:["ha","ni","f"]},
               {string:"nick",     array:["ni","ck"]},
               {string:"mary",     array:["ma","ry"]},
               {string:"claudia",  array:["c", "lau","di", "a"]},
               {string:"paul",     array:["pau", "l"]},
               {string:"gabrielle",array:["ga","b", "ri", "e", "lle"]},
               {string:"patrizio", array:["pa","t", "ri", "zi", "o"]},
              //  {string:"phoebe",   array:["phoe","be"]},
              //  {string:"harsheet", array:["har", "shee", "t"]}
             ];

  beforeEach(inject(function(_japanesifyService_, _rulesService_){
    japanesifyService = _japanesifyService_;
    rulesService = _rulesService_;
    spyOn(rulesService, 'threeCharSyllables').and.returnValue(/^([b-df-hj-np-tv-z]h[aeiou]|[bdf-hj-np-tv-z]+[aeo][aeiu]|[b-df-hj-np-tv-z][aeiou][rwy](\b|(?![aeiouy]))|[ln]{2}[aeiou])/i);
  }));

  describe('#splitIntoSyllables', function (){
    it ('split string based on regex', function() {
      names.forEach(function(name){
        expect(japanesifyService.splitIntoSyllables(name.string, rulesService)).toEqual(name.array);
      });
    });
  });

  describe('#convertToJapanese', function(){
    it ('convert an array of syllables to a japanese string', function() {
      expect(japanesifyService.convertToJapanese(["ca","s","par"], ruleJP)).toEqual('カスパー');
      // names.forEach(function(name){
      //   expect(japanesifyService.convertToJapanese(name.array, rulesService)).toEqual(name.japanese);
      // });
    });
  });

  describe('#translateWord', function(){
    it ('returns translated string', function() {
      expect(japanesifyService.translateWord("caspar", ruleJP)).toEqual('カスパー');
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
