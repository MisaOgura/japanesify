japanesifyApp.factory('TranslationFactory', ['japanesifyService', function(japanesifyService){

   function TranslationFactory(romanjiName){
      this.romanji = romanjiName;
      this.japanese = translate(this.romanjiName);
   }

   function translate(string) {
      return japanesifyService.translateWord(string);
   }

   return TranslationFactory;
}]);
