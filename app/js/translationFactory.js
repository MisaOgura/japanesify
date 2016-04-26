japanesifyApp.factory('TranslationFactory', function(){

   function TranslationFactory(romanjiName){
      var self = this;
      self.romanji = romanjiName;
   }

   TranslationFactory.prototype.saveJapanese = function(japaneseName) {
     return self.japanese = japaneseName;
   }

   return TranslationFactory;
});
