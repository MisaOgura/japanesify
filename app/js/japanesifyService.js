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
    console.log("string", string);

    var result;
    if (result = slicedString.match(ruleJP.threeCharSyllables())[0]) { //
      console.log("SHOLD", slicedString);
      console.log("3", string);

      matchedSyllables.push(result);
    } else if (result = slicedString.match(ruleJP.twoCharSyllables())[0]) {
      console.log("two", string);

      matchedSyllables.push(result);
    } else {
      if (string.length === 1) {
        console.log("one", string);
        matchedSyllables.push(string);

      }
    }
    console.log(string);
    var lessString = string.replace(result, '');
    while (lessString.length > 0) {
      _matchRules(lessString, ruleJP);
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
