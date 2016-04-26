describe ('TranslationFactory', function(){

  beforeEach(module('japanesifyApp'));

  var factory, jpTranslation;

  beforeEach(inject(function(TranslationFactory){
    romanji = 'Misa';
    japanese = 'みさ';
    factory = new TranslationFactory(romanji);
  }));

  it('stores a Romanji string', function(){
    expect(factory.romanji).toEqual(romanji);
  });

  it('saves the Japanese translation', function() {
    expect(factory.saveJapanese(japanese)).toEqual(japanese);
  });

});
