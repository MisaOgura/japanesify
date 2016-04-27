japanesifyApp.controller('japanesifyController', ['TranslationFactory', 'japanesifyService',function(TranslationFactory, japanesifyService){
  var vm = this;

  vm.newTranslation = function(name) {
    vm.translationObj = new TranslationFactory(name);
  };

}]);
