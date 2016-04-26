japanesifyApp.factory('TranslationFactory', function(){
   function TranslationFactory(romanjiName){
      this.romanji = romanjiName;
   }

   TranslationFactory.prototype.saveJapanese = function(japaneseName) {
     return this.japanese = japaneseName;
   }

   return TranslationFactory;
});
