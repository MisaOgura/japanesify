describe ('japanesifyController', function(){

  beforeEach(module('japanesifyApp'));

  var ctrl, translationFactory;

  beforeEach(inject(function($controller, _TranslationFactory_){
    ctrl = $controller('japanesifyController');
    TranslationFactory = _TranslationFactory_;
  }));

  it('it saves a name', function(){
    var name = "Rhiannon";
    ctrl.saveName(name);
    expect(ctrl.name).toEqual(name);
  });

  it('saves a new translation object', function() {
    ctrl.newTranslation('Misa');
    var translation = new TranslationFactory('Misa');
    expect(ctrl.translationObj).toEqual(translation);
  });
});
