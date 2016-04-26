describe ('TranslationFactory', function(){

  beforeEach(module('japanesifyApp'));

  var translation, original, translated;

  beforeEach(inject(function(TranslationFactory){
    original = 'Misa';
    translated = 'みさ';
    translation = new TranslationFactory(original);
  }));

  it('stores a Romanji string', function(){
    expect(translation.romanji).toEqual(original);
  });

  it('saves the Japanese translation', function() {
    translation.saveJapanese(translated);
    expect(translation.japanese).toEqual(translated);
  });

});
