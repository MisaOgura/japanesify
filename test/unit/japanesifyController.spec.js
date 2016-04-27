describe ('japanesifyController', function(){

  beforeEach(module('japanesifyApp'));

  var ctrl, TranslationFactory, object;

  // beforeEach(function(){
  //   TranslationFactory = jasmine.createSpyObj('TranslationFactory', ['translateWord']);
  // });

  beforeEach(inject(function($controller){
    ctrl = $controller('japanesifyController');
    object = {};
    spyOn(ctrl, '_createTranslationObj').and.returnValue(object);
  }));

  it('saves a new translation object', function() {
    ctrl.newTranslation('Misa');
    // var translation = new TranslationFactory('Misa');
    expect(ctrl.translationObj).toEqual(object);
  });
});
