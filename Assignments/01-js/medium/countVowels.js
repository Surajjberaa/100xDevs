/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here

    let counter = 0
    const arr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U',   ] 

      for (let char of str) {
        if (arr.includes(char)) {
          
          counter ++
        }
      }
    
    console.log(counter);
    return counter
}

countVowels("hi hello how WHAT are a a a you")

module.exports = countVowels;


// Tried Shit ⬇

 // const arr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U',   ] 

      // const vowels = () => {
      //   for (let i = 0; i < arr.length; i++) {
      //     console.log(arr[i]);
      //     return arr[i]
          
          
      //   }
      // }


      
      // if (str[i] == "a" || str[i] == "A" ) {
      //   counter += 1
      // }
      // if (str[i] == "e" || str[i] == "E" ) {
      //   counter += 1
      // }
      // if (str[i] == "i" || str[i] == "I" ) {
      //   counter += 1
      // }
      // if (str[i] == "o" || str[i] == "O" ) {
      //   counter += 1
      // }
      // if (str[i] == "u" || str[i] == "U" ) {
      //   counter += 1
      // }