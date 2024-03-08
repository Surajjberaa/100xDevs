const fs = require("fs")

function kiratsReadFile(){
    return new Promise(function(resolve) {
        fs.readFile("Week 1.5/a.txt", "utf-8", function(err, data){
            if (err) {
                console.error("Error reading file:", err);
                return;
            }
            resolve(data);
        });
    })
}

function onDone(data){
    console.log(data);
}

kiratsReadFile().then(onDone)