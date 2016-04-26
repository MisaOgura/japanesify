describe ('TranslationFactory', function(){

  beforeEach(module('japanesifyApp'));

  var factory;

  beforeEach(inject(function(TranslationFactory){
    factory = new TranslationFactory('name');
  }));

  it('stores a Romanji string', function(){
    expect(factory.romanji).toEqual('name');
  });

});
