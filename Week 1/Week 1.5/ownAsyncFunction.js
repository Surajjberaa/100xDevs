const fs = require("fs")

function kiratsReadFile(cb){
    fs.readFile("Week 1.5/a.txt", "utf-8", function(err, data){
        if (err) {
            console.error("Error reading file:", err);
            return;
        }
        cb(data);
    });
}

function onDone(data){
    console.log(data);
}

kiratsReadFile(onDone)