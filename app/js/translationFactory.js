japanesifyApp.factory('TranslationFactory', function(){

   function TranslationFactory(romanjiName){
      this.romanji = romanjiName;
      this.japanese = '';
   }

   TranslationFactory.prototype.saveJapanese = function(japaneseName) {
     this.japanese = japaneseName;
   };

   return TranslationFactory;
});
