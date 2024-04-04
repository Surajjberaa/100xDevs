const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://admin:Suraj%402004@cluster0.vfkrbtd.mongodb.net/paytm")


const userSchema = mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,

})

const accountSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
})

const Account = mongoose.model("Account", accountSchema)
const User = mongoose.model("User", userSchema)

module.exports = {
    User,
    Account
}