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

    console.log('matches 3char',!!slicedString.match(ruleJP.threeCharSyllables()));
    console.log('matches 2char',!!slicedString.match(ruleJP.twoCharSyllables()));

    if (string.length === 1) {
      console.log("one", string);
      result = string;
      matchedSyllables.push(string);
    } else if(!!slicedString.match(ruleJP.threeCharSyllables())) {
      console.log("SHOLD", slicedString);
      console.log("3", string);
      result = slicedString.match(ruleJP.threeCharSyllables())[0];
      matchedSyllables.push(result);
    } else if (!!slicedString.match(ruleJP.twoCharSyllables())){
      console.log("two", string);
      result = slicedString.match(ruleJP.twoCharSyllables())[0];
      matchedSyllables.push(result);
    } else {
      result = string[0];
      matchedSyllables.push(result);
    }
    console.log(string);
    reducedString = string.replace(result, '');
    console.log('endString', reducedString);
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
