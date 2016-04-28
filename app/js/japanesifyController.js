japanesifyApp.controller('japanesifyController', ['TranslationFactory', 'japanesifyService', 'rulesService',function(TranslationFactory, japanesifyService, rulesService){
  var vm = this;
  vm.allTranslations = [];

  vm.newTranslation = function(name) {
    vm.translationObj = vm._createTranslationObj(name);
    vm.allTranslations.push(vm.translationObj)
  };

  vm._createTranslationObj = function(name) {
    return new TranslationFactory(name);
  };

}]);
