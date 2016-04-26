japanesifyApp.factory('TranslationFactory', ['japanesifyService', function(japanesifyService){

   function TranslationFactory(romanjiName){
      this.romanji = romanjiName;
      this.japanese = translate(this.romanjiName);
   }

   function translate(name) {
      return japanesifyService.translateWord(name);
   }

   return TranslationFactory;
}]);
