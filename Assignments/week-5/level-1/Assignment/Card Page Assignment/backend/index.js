const express = require("express")
const { createCard } = require("./types")
const { card } = require("./database")

const app = express()

app.use(express.json())

app.post("/createCard", async (req, res)=>{
    const payload = req.body
    const parsedPayload = createCard.safeParse(payload)

    if(!parsedPayload){
        res.status(403).json({
            msg: "You have given wrong inputs"
        })
    }

    await card.create({
        name: payload.name,
        description: payload.description,
        interest: payload.interest,
        linkedin: payload.linkedin,
        twitter: payload.twitter,

    })

    res.json({
        msg: "Card created"
    })
})

app.listen(3000)