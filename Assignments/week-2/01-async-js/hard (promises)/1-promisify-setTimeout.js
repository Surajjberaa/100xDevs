/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(duration) {
    console.log(`Waiting for ${duration} milliseconds...`);
    return new Promise(function(resolve) {
        setTimeout(resolve, duration*1000);
    });
}

// wait(10000)
//  .then(function(value){
//     console.log(value);
// })


module.exports = wait;
