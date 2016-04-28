describe ('JP converter', function(){

  it ('displays the name I input', function(){
    browser.get('/');
    $('#input').sendKeys('Misa');
    $('#submit').click();
    var output = $('.translation');

    expect(output.getText()).toMatch('ミサ');
  });

});
