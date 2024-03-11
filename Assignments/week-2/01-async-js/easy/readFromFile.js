const fs = require('fs')

fs.readFile("a.txt", "utf-8",function(err, data){
    console.log(data);
})


for (let i = 0; i < 4000000000; i++) {
    i++
}