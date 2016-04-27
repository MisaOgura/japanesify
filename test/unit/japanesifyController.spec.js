describe ('japanesifyController', function(){

  beforeEach(module('japanesifyApp'));

  var ctrl, TranslationFactory, object;

  beforeEach(inject(function($controller){
    ctrl = $controller('japanesifyController');
    object = {};
    spyOn(ctrl, '_createTranslationObj').and.returnValue(object);
  }));

  it('saves a new translation object', function() {
    ctrl.newTranslation('Misa');
    expect(ctrl.translationObj).toEqual(object);
  });
});
