const mongoose = require("mongoose")
const { string, boolean } = require("zod")

mongoose.connect("mongodb+srv://admin:Suraj%402004@cluster0.vfkrbtd.mongodb.net/fullstack-todo")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model("todos", todoSchema);

module.exports = {
    todo
}