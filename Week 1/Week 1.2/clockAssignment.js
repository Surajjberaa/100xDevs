// Create a terminal clock(HH:MM:SS)

function timer(){

    const time = new Date()

    const formattedTime = time.toTimeString().split(' ')[0]

    console.clear()
    console.log(formattedTime);
    console.log("Press Ctrl + C to exit.");

    
}

setInterval(timer,1000)