/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/



function findLargestElement(numbers) {

    if(numbers == ""){
        return undefined
    }
    
    let largestNum = Number.NEGATIVE_INFINITY

    for (let i = 0; i < numbers.length; i++) {
    
    if (numbers[i] > largestNum) {
        largestNum = numbers[i]        
    }
        //  console.log(largestNum);
    }

    
    console.log(largestNum);
    return largestNum
}
Input= [-3, -7,- 1, -9, -7]

findLargestElement(Input)

module.exports = findLargestElement;