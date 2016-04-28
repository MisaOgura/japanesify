japanesifyApp.service('japanesifyService', ['rulesService',function(rulesService) {
  var self = this;
  var matchedSyllables= [];

  self.splitIntoSyllables = function(string, ruleJP) {
    _matchRules(string, ruleJP);
    return matchedSyllables;


    // return ['rhi', 'a'];
  };

  function _matchRules(string, ruleJP) {
    var slicedString = string.slice(0, 4);
    var match = slicedString.match(ruleJP.threeCharSyllables())[0];
    var lessString = string.replace(match, '');
    matchedSyllables.push(match);
    while (lessString > 1) {
      _matchRules(lessString, ruleJP);
    }
    if (lessString.length === 1) {
      matchedSyllables.push(lessString);
    }
  };

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
