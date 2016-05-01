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

  vm.printId = function(id) {
    var id = "translation-" + id;
    var printContents = document.getElementById(id).innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  };
}]);
