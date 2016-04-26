japanesifyApp.service('japanesifyService', [function() {
  var self = this;


   self.splitIntoSyllables = function(string, JPrule) {
    console.log(string)
    string = string.split(JPrule.regex)
    return string.filter(filterEmptyString)
    }

  function filterEmptyString(element) {
    return element !== ''
  }

}]);