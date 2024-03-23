const express = require("express")
const mongoose = require("mongoose")

const app = express()

app.use(express.json())

mongoose.connect("mongodb+srv://admin:Suraj%402004@cluster0.vfkrbtd.mongodb.net/userappnew")

const User = mongoose.model(
    "Users",
    {
        name: String,
        email: String,
        password: String
    }
)

app.post("/signup", async function(req, res){
    const name = req.body.name
    const password = req.body.password
    const username = req.body.username

    const existingUser = await User.findOne({email: username})
    if(existingUser){
        return res.status(400).send("User already exists")
    }
    
    const user = new User({
        name: name,
        email: username,
        password: password 
    })
    
    user.save()
    res.send("User created successfully")
})

app.listen(3000)