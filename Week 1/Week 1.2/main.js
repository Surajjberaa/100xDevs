function sum(a,b,fn){
    let result =  a + b;
    fn(result)
}

function displayResult(data){
    console.log("Result of the sum is: "+ data);
}

function displayResultPassive(data){
    console.log("Sum of the result is: "+ data);
}

// let num = sum(1,2)
// displayResult(num)

// displayResultPassive(sum(1,2))

let num = sum(1,3,displayResult)