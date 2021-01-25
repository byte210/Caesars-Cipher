function rot13(str) {
  var alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var arrayToDecode = str.split('');
  var arrayDecoded = [];

  console.log(alphabet.length - 13 + alphabet.indexOf(arrayToDecode[1]))
  for(let i=0; i<arrayToDecode.length; i++){
    if(arrayToDecode[i] === ' ' || arrayToDecode[i] === '?' || arrayToDecode[i] === '!' || arrayToDecode[i] === '.'){
      arrayDecoded.push(arrayToDecode[i]);
    } else if(alphabet.indexOf(arrayToDecode[i])>=13){
      arrayDecoded.push(alphabet[alphabet.indexOf(arrayToDecode[i])-13])
    } else if(alphabet.indexOf(arrayToDecode[i])<13){
      arrayDecoded.push(alphabet[alphabet.length - 13 + alphabet.indexOf(arrayToDecode[i])])
    }
  }
  console.log(arrayDecoded.join(''))
  return arrayDecoded.join('');
  
}