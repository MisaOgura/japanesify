describe ('TranslationFactory', function(){

  beforeEach(module('japanesifyApp'));

  var factory, original, translation;

  beforeEach(inject(function(TranslationFactory){
    original = 'Misa';
    translation = 'みさ';
    factory = new TranslationFactory(original);
  }));

  it('stores a Romanji string', function(){
    expect(factory.romanji).toEqual(original);
  });

  it('saves the Japanese translation', function() {
    expect(factory.saveJapanese(translation)).toEqual(translation);
  });

});
