japanesifyApp.service('japanesifyService', [function() {
  var self = this;

  self.splitIntoSyllables = function(string, ruleJP) {
    string = string.split(ruleJP.regex);
    return string.filter(filterEmptyString);
  };

  self.convertToJapanese = function(array, ruleJP) {
    matcher = ruleJP.matcher;
    var newArray = array.map(function(syllable) {
      return matcher[syllable];
    });
    return newArray.join('');
  };

  function filterEmptyString(element) {
    return element !== '';
  }
}]);
