describe ('japanesifyController', function(){
    
    beforeEach(module('japanesifyApp'))
    
    var ctrl;

  beforeEach(inject(function($controller){
    ctrl = $controller('japanesifyController')
  }))

  it ('it saves a name', function(){
    var name="Rhiannon"
    ctrl.saveName(name);
    expect(ctrl.name).toEqual(name);
  })
})