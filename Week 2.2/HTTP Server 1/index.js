const express = require("express");
const port = process.env.port || 3000
const app = express();
const bodyParser = require("body-parser")

app.use(bodyParser.json())

app.get("/", function(req, res){
    res.send("Hello World!")
})

app.post("/conversation", function(req, res){
    console.log(req.headers.authorization);
    res.send("Hello Auth!")
})

app.post("/bparser", function(req, res){
    console.log(req.body);
    res.send("Hello Body!")
})

app.listen(port, ()=>{
    console.log(`Example app listening  on port:${port} `);
})