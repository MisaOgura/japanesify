japanesifyApp.service('rulesService', function() {
  this.regex = function() {
    return /(ll[aeiou])|([b-df-hj-np-tv-z][aeiou]r|w)\b|(phoe)|([b-df-hj-np-tv-z][aeiou]{2})|([b-df-hj-np-tv-z]h[aeiou])|(nn[aeiou])|(ch(?![aeiou]))|(ch[aeiou])|([b-df-hj-np-tv-z][aeiou])|([b-df-hj-np-tv-z]{2})\b|([b-df-hj-npqstv-z])|([aeiou])/i;
  }

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
      'rhi': 'リ',
      'nno': 'ノ',
      'ck': 'ック',
      'c': 'ク',
      'le': 'レ',
      'me': 'メ',
      'ce': 'ス'
    };
  };
});
