japanesifyApp.service('rulesService', ['CONVERSION_CONSTANT', function(CONVERSION_CONSTANT) {

  this.matcher = function() {
    return CONVERSION_CONSTANT;
  };

  var consVowel = '^[b-df-hj-np-tv-z][aeiou]';
  var doubleCons = '^[b-df-hj-np-tv-z]{2}\\b';
  var startsCHCons = '^ch(?![aeiou])';
  var consHVowel = '^[b-df-hj-np-tv-z]h[aeiou]';
  var consDoubleVowel = '^[bdf-hj-np-tv-z][aeo][aeu]';
  var consVowelRWY = '^[b-df-hj-np-tv-z][aeiou][rwy](\\b|(?![aeiouy]))';
  var doubleLNVowel = '^[ln]{2}[aeiou]';
  var doubleConsDoubleVowel = '^[bdf-hj-np-tv-z]{2}[aeo][aeiu]';

  this.twoCharSyllables = function(name){
    return new RegExp(consVowel+'|'+
                      doubleCons+'|'+
                      startsCHCons, 'i');
  };

  this.threeCharSyllables = function(name){
    return new RegExp(consHVowel+'|'+
                      consDoubleVowel+'|'+
                      consVowelRWY+'|'+
                      doubleLNVowel, 'i');
  };

  this.fourCharSyllables = function(name) {
    return new RegExp(doubleConsDoubleVowel, 'i');
  };
}]);
