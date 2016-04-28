japanesifyApp.service('rulesService', function() {

  this.matcher = function() {
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
      'rhi' : 'リ',
      'nno' : 'ノ',
      'ck'  : 'ック',
      'c'   : 'ク',
      'le'  : 'レ',
      'me'  : 'メ',
      'ce'  : 'ス'
    };
  };

  // this.oneCharSyllables = function(){
  //   return /^([aeiou]|[b-df-hj-npqstv-z])/i;
  // };

  var consVowel = '[b-df-hj-np-tv-z][aeiou]';
  var doubleCons = '[b-df-hj-np-tv-z]{2}\\b';
  var startsCHCons = '\\bch(?![aeiou])';
  var consHVowel = '[b-df-hj-np-tv-z]h[aeiou]';
  var consDoubleVowel = '[bdf-hj-np-tv-z]+[aeo][aeiu]';
  var consVowelRWY = '[b-df-hj-np-tv-z][aeiou][rwy](\\b|(?![aeiouy]))';
  var doubleLNVowel = '[ln]{2}[aeiou]';

  this.twoCharSyllables = function(name){
    return new RegExp('^'+'('+consVowel+'|'+
                              doubleCons+'|'+
                              startsCHCons+')', 'i');
  };

  this.threeCharSyllables = function(name){
    return new RegExp('^'+'('+consHVowel+'|'+
                              consDoubleVowel+'|'+
                              consVowelRWY+'|'+
                              doubleLNVowel+')', 'i');
  };
});
