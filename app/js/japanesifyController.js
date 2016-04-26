japanesifyApp.controller('japanesifyController', ['TranslationFactory', 'japanesifyService',function(TranslationFactory, japanesifyService){
  var vm = this;

   vm.saveName = function(name) {
    vm.name = name;
  };

  vm.newTranslation = function(name) {
    vm.translationObj = new TranslationFactory(name);
  };

}]);
