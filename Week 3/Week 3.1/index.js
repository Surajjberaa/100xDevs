const express = require("express")
const zod = require("zod")

const app = express()

// const schema = zod.array(zod.number())

const schema = zod.object({
    email: zod.string(),
    password: zod.string(),
    country: zod.literal("IN").or(zod.literal("US")),
    kidneys: zod.array(zod.number()),


})

app.use(express.json())

app.get("/", (req, res)=>{
    res.send("In")
})

app.post("/healthcheckup", function(req, res){
    const kidneys = req.body.kidneys
    const response = schema.safeParse(kidneys)
    if (!response.success) {
        res.status(411).json({
            msg: "Input is invalid"
        })
    }
    else{

        res.send({
            response
        })
    }

    // if (!kidneys) {
    //     res.send("Input Kidneys")
    //     return
    // }
    // const kidneysLength = kidneys.length;

    // res.send("You have " + kidneysLength + " kidneys.")
})

// Global catches

app.use(function(err, req, res, next){
    res.json({
        msg: "Something is wrong with the server"
    })
})

app.listen(3000)