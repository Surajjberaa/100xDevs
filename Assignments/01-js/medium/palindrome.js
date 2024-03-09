/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  if (cleanedStr.length <= 1) {
    return true
    
  }

  const word = cleanedStr.split('').reverse().join('');

  console.log(word);
  return word.toLowerCase() === cleanedStr.toLowerCase();

}

isPalindrome('race car')

module.exports = isPalindrome;


