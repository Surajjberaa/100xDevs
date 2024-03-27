const express = require("express")
const { createCard } = require("./types")
const { card } = require("./database")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())

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

app.get("/allCard", async function(req, res){

    const response = await card.find({})
    res.json({
        card: response
    })

})

app.delete("/deleteCard", async (req, res) => {
    const cardId = req.body.id;

    try {
        // Find the card by its ID and delete it from the database
        const deletedCard = await card.findByIdAndDelete(cardId);

        if (!deletedCard) {
            return res.status(404).json({ msg: "Card not found" });
        }

        res.json({ msg: "Card deleted successfully" });
    } catch (error) {
        console.error("Error deleting card:", error);
        res.status(500).json({ msg: "Internal server error" });
    }
});

// app.post()

app.listen(3000)
