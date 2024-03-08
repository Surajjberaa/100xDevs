// Create a counter in Javascript counts down from 30 to 0

let count = 30

const counter = setInterval(()=>{
    if (count>=0) {
        console.log(count);
        count -= 1
       
    }else{
        clearInterval(counter)
    }
}, 1000)
