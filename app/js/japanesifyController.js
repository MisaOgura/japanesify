japanesifyApp.controller('japanesifyController', ['TranslationFactory',function(TranslationFactory){
  var vm = this;

   vm.saveName = function(name) {
    vm.name = name;
  };

  vm.newTranslation = function(name) {
    vm.translation = new TranslationFactory(name);
  };



}]);
