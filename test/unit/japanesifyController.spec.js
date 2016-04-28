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

  it('stores all past translation requests', function() {
    ctrl.newTranslation('misa');
    ctrl.newTranslation('caspar');
    expect(ctrl.allTranslations).toEqual([object, object])
  });
});
