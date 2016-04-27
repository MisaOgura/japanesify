describe ('japanesifyController', function(){

  beforeEach(module('japanesifyApp'));

  var ctrl, TranslationFactory;

  beforeEach(function(){
    TranslationFactory = jasmine.createSpyObj('TranslationFactory', ['translateWord']);
  });

  beforeEach(inject(function($controller){
    ctrl = $controller('japanesifyController');
    // translationFactory = _TranslationFactory_;

  }));

  fit('saves a new translation object', function() {
    ctrl.newTranslation('Misa');
    var translation = new TranslationFactory('Misa');
    expect(ctrl.translationObj).toEqual(translation);
  });
});
