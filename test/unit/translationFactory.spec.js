describe ('TranslationFactory', function(){

  beforeEach(module('japanesifyApp'));

  var translation, original, translated, japanesifyService;

  beforeEach(inject(function(TranslationFactory, _japanesifyService_){
    original = 'Misa';
    translated = 'みさ';
    translation = new TranslationFactory(original);
    japanesifyService = jasmine.createSpyObj('japanesifyService',['translateWord'])
  }));

  it('stores a Romanji string', function(){
    expect(translation.romanji).toEqual(original);
  });

  it('saves the Japanese translation', function() {
    spyOn(japanesifyService, 'translateWord').andReturnValue(translated)

    expect(translation.japanese).toEqual(translated);
  });




});
