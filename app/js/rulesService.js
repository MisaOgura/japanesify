japanesifyApp.service('rulesService', function() {
  this.regex = function() {
    return /([b-df-hj-np-tv-z]{2})\b|([b-df-hj-np-tv-z][aeiou][rwy])(\b|(?![aeiouy]))|([bdf-hj-np-tv-z]+[aeo][aeiu])|([b-df-hj-np-tv-z]h[aeiou])|([ln]{2}[aeiou])|\b(ch(?![aeiou]))|([b-df-hj-np-tv-z][aeiou])|([b-df-hj-npqstv-z])|([aeiou])/i;
  };

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

  this.oneCharSyllables = function(){
    return /^([aeiou]|[b-df-hj-npqstv-z])/i;
  };

  this.twoCharSyllables = function(name){
    return /^([b-df-hj-np-tv-z][aeiou]|[b-df-hj-np-tv-z]{2}\b|\bch(?![aeiou]))/;
  };

  this.threeCharSyllables = function(name){
    return /^([b-df-hj-np-tv-z]h[aeiou]|[bdf-hj-np-tv-z]+[aeo][aeiu]|[b-df-hj-np-tv-z][aeiou][rwy](\b|(?![aeiouy]))|[ln]{2}[aeiou])/i;
  };
});

// * 1 syllable
//   - dingle vowel = ([aeiou])
//   - single consonant  = ([b-df-hj-npqstv-z])
//
// * 2 syllebles
//   - a consonant + vowel pair = ([b-df-hj-np-tv-z][aeiou])
//   - ends with a double consonant = ([b-df-hj-np-tv-z]{2})\b
//   - starts with CH and followed by a consonant = \b(ch(?![aeiou]))
//
//
// * 3 syllables
//   - dounle N or L followed by a vowel = ([ln]{2}[aeiou])
//   - a consonant followed by h followed by a vowel = ([b-df-hj-np-tv-z]h[aeiou])
//   - a consonant followed by a vowel followed by either r/w/y,
//       if at the end of the name or followed by a consonant = ([b-df-hj-np-tv-z][aeiou][rwy])(\b|(?![aeiouy]))
//   - a consonant followed by a specified double vowel = ([bdf-hj-np-tv-z]+[aeo][aeiu])
