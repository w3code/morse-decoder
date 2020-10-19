const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
    ' ': ' ',
  };
  
  function decode(expr) {
    let arr = [];
    for (let i = 0; i < expr.length; i += 10) {
      arr[i / 10] = expr.slice([i], [i + 10]);
      arr[i / 10] = arr[i / 10] === '**********' ? arr[i / 10] = ' ' : arr[i / 10];
      arr[i / 10] = replace(arr[i / 10]);
      arr[i / 10] = MORSE_TABLE[arr[i / 10]];
    }
    return arr.join('');
  }
  
  function replace(myArray){
    let newArr = [];
    for(let j = 0; j < 5; j++){
      newArr[j] = myArray.substr(j*2, 2);
      switch(newArr[j]) {
        case '00':
        newArr[j] = '';
          break;
        case '11':
          newArr[j] = '-';
          break;
        case '10':
          newArr[j] = '.';
          break;
      }
    }
    newArr = newArr.join('');
    return newArr;
  }

module.exports = {
    decode
}