japanesifyApp.service('japanesifyService', [function() {
  var self = this;

  self.splitIntoSyllables = function(string, ruleJP) {
    var array = string.split(ruleJP.regex);
    return array.filter(filterEmptyString);
  };

  self.convertToJapanese = function(array, ruleJP) {
    var matcher = ruleJP.matcher;
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
}]);
