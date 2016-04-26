var name = 'MIsa';

console.log(checkVowelPosition(name));

// 0: returns an array of single letters
function stringToArray(string){
  return string.toLowerCase().split('');
}

// 1: returns an array containing indeci of vowels
function checkVowelPosition(name){
  var vowelPosition = [];
  var array = stringToArray(name);
  array.forEach(function(letter) {
    if (isVowel(letter)) vowelPosition.push(array.indexOf(letter));
  });
  return vowelPosition;
}

// helper functions
function includeN(name){
  name.toLowerCase();
  return name.includes('n');
}

function includeNa(name){
  name.toLowerCase();
  if (name.includes('n')) {
    var index = name.indexOf('n');
    return isNext(name, index, 'a');
  }
  return false;
}

function isNext(name, index, alphabet){
    var nextLetter = name[index+1];
    return nextLetter === alphabet;
}

function isVowel(letter) {
  var vowelList = ['a', 'e', 'i', 'o', 'u'];
  return contains(vowelList, letter);
}

function contains(array, letter) {
    var i = array.length;
    while (i--) {
       if (array[i] === letter) return true;
    }
    return false;
}
