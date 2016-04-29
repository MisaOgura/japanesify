japanesifyApp.service('japanesifyService', ['rulesService',function(rulesService) {
  var self = this;
  var matchedSyllables= [];

  self.splitIntoSyllables = function(string, ruleJP) {
    _matchRules(string, ruleJP);
    var output = matchedSyllables;
    matchedSyllables = [];
    return output;
  };

  function _matchRules(string, ruleJP) {
    var slicedString = string.slice(0, 4);
    var matchFourSyllableRule = slicedString.match(ruleJP.fourCharSyllables());
    var matchThreeSyllableRule = slicedString.match(ruleJP.threeCharSyllables());
    var matchTwoSyllableRule = slicedString.match(ruleJP.twoCharSyllables());

    var result;

    if (string.length === 1) {
      result = string;
      matchedSyllables.push(result);
    } else if(!!matchFourSyllableRule) {
      result = matchFourSyllableRule[0];
      matchedSyllables.push(result);
    } else if(!!matchThreeSyllableRule) {
      result = matchThreeSyllableRule[0];
      matchedSyllables.push(result);
    } else if (!!matchTwoSyllableRule){
      result = matchTwoSyllableRule[0];
      matchedSyllables.push(result);
    } else {
      result = string[0];
      matchedSyllables.push(result);
    }
    reducedString = string.replace(result, '');
    while (reducedString.length > 0) {
      _matchRules(reducedString, ruleJP);
    }
  }

  self.convertToJapanese = function(array, ruleJP) {
    var matcher = ruleJP.matcher();
    var newArray = array.map(function(syllable) {
      return matcher[syllable];
    });
    return newArray.join('');
  };

  function filterEmptyString(element) {
    if ((element !== '') | (element !== undefined)); {
      return element;
    }
  }

  self.translateWord =  function(string) {
    var syllableArray = self.splitIntoSyllables(string, rulesService);
    return self.convertToJapanese(syllableArray, rulesService);
  };
}]);
