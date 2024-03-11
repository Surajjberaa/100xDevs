
// // for (let i = 0; i > -1 ; i++) {
// //     console.log("inside");
    
//     let counter = ()=>{setTimeout(()=>{
//         console.log("timeout");
//         console.log("1");
//     },1000)}
//     for (let i = 0; i > -1; i++) {
//         counter()       
//     }
    
// // }

counter = 0

function timer(){
    console.clear();
    console.log(counter);
    setTimeout(timer, 1000)
    counter++
}

timer()