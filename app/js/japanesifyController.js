japanesifyApp.controller('japanesifyController', ['TranslationFactory', 'japanesifyService', 'rulesService',function(TranslationFactory, japanesifyService, rulesService){
  var vm = this;

  vm.newTranslation = function(name) {
    vm.translationObj = new TranslationFactory(name);
  };

}]);
