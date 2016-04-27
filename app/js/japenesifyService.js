japanesifyApp.service('japanesifyService', [function() {
  var self = this;

  self.splitIntoSyllables = function(string, ruleJP) {
    var array = string.split(ruleJP.regex);
    return array.filter(filterEmptyString);
  };

  self.convertToJapanese = function(array, ruleJP) {
    console.log('convertToJapanese', array);
    console.log('rules', ruleJP);
    var matcher = ruleJP.matcher;
    console.log('matcher', matcher);
    var newArray = array.map(function(syllable) {
      return matcher[syllable];
    });
    console.log('newArray', newArray);
    return newArray.join('');
  };

  function filterEmptyString(element) {
    return element !== '';
  }

  self.translateWord =  function(string, ruleJP) {
    // return self.splitIntoSyllables(string, ruleJP, function(array) {
    //   console.log('translateWord', self.convertToJapanese(array, ruleJP));
    // });
    return self.convertToJapanese(['Ca', 's', 'par'], ruleJP);
    // return splitArray;
    // return self.convertToJapanese(splitArray, ruleJP);
  };
}]);
