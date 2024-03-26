const mongoose = require("mongoose")
const { string, boolean } = require("zod")

mongoose.connect("mongodb+srv://admin:Suraj%402004@cluster0.vfkrbtd.mongodb.net/cards-app")

const cardSchema = mongoose.Schema({
    name: String,
    description: String,
    interest: String,
    linkedin: String,
    twitter: String,
})

const card = mongoose.model("cards", cardSchema);

module.exports = {
    card
}