describe ('TranslationFactory', function(){

  beforeEach(module('japanesifyApp'));

  var original, translated ;

  beforeEach(inject(function(_TranslationFactory_, _japanesifyService_){
    original = 'Misa';
    translated = 'ミサ';
    TranslationFactory= _TranslationFactory_;
    japanesifyService = _japanesifyService_;

    spyOn(japanesifyService, 'translateWord').and.returnValue('ミサ');
    translation = new TranslationFactory(original);
  }));

  it ('it can intialize a translation', function(){
    translation = new TranslationFactory(original);
    expect(translation instanceof TranslationFactory).toBe(true);
  });

  it('stores a Romanji string', function(){
    expect(translation.romanji).toEqual(original.toLowerCase());
  });

  it('saves the Japanese translation', function() {
    expect(translation.japanese).toEqual(translated);
  });
});
