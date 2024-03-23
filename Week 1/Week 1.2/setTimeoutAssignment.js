// Calculate the time it takes between a setTimeout call and the inner function actually running

const beforeExecutionTime = new Date().getSeconds()

function hello(){
    console.log("Hello World!");
    const afterExecutionTime = new Date().getSeconds();
    console.log("The difference in time is ", afterExecutionTime - beforeExecutionTime, " seconds" );

}

setTimeout(hello,5000)

