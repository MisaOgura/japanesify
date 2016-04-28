japanesifyApp.factory('TranslationFactory', ['japanesifyService', function(japanesifyService){

   function TranslationFactory(romanjiName){
      this.romanji = romanjiName.toLowerCase();
      this.japanese = translate(this.romanji);
   }

   function translate(string) {
      return japanesifyService.translateWord(string);
   }

   return TranslationFactory;
}]);
