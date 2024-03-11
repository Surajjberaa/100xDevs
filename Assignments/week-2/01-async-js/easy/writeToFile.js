const fs = require('fs')

const content = "Hi from inside "


fs.writeFileSync("a.txt", content, (err, data)=>{
    if(err){
        console.log("Error: ", err);

    }else{
        fs.readFile("a.txt", "utf-8", (err, data)=>{
            console.log(data);
        })
    }


})

