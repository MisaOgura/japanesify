japanesifyApp.service('rulesService', ['CONVERSION_CONSTANT', function(CONVERSION_CONSTANT) {

  this.matcher = function() {
    return CONVERSION_CONSTANT;
  };

  var consVowel = '^[b-df-hj-np-tv-z][aeiou]';
  var doubleCons = '^[b-df-hj-np-tv-z]{2}\\b';
  var startsCHCons = '^ch(?![aeiou])';
  var consHVowel = '^[b-df-hj-np-tv-z]h[aeiou]';
  var consDoubleVowel = '^[bdf-hj-np-tv-z][ae][aeu]';
  var consDoubleVowelSpecial = '^[bdf-hj-np-tv-z](ie)\\b';
  var consVowelRWY = '^[b-df-hj-np-tv-z][aeiou][rwy](\\b|(?![aeiouy]))';
  var doubleLNVowel = '^[ln]{2}[aeiou]';
  var doubleConsDoubleVowel = '^[bdf-hj-np-tv-z]{2}[aeo][aeiu]';

  this.twoCharSyllables = function(){
    return new RegExp(consVowel+'|'+
                      doubleCons+'|'+
                      startsCHCons, 'i');
  };

  this.threeCharSyllables = function(){
    return new RegExp(consHVowel + '|' +
                      consDoubleVowel + '|' +
                      consDoubleVowelSpecial + '|' +
                      consVowelRWY + '|' +
                      doubleLNVowel, 'i');
  };

  this.fourCharSyllables = function() {
    return new RegExp(doubleConsDoubleVowel, 'i');
  };
}]);
