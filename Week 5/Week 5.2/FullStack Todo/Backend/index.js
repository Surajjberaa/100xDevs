const express = require("express")
const { createTodo, updateTodo } = require("./types")
const { todo } = require("./db")
const cors = require("cors")
// const { createTodo, updateTodo } = "../types.js"

// const { todo } = require("./db.js")

const app = express()

app.use(express.json())
app.use(cors())

app.post("/todo", async function(req, res){
    
    const createPayload = req.body
    const parsedPayload = createTodo.safeParse(createPayload)

    if (!parsedPayload) {
        res.status(403).json({
            msg: "You have given wrong inputs"
        })
        return
    }

    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "Todo created"
    })
    
})

app.get("/todos", async function(req, res){

    const response = await todo.find({})
    res.json({
        todos: response
    })

})

app.put("/completed", async function(req, res){

    const getId = req.body
    const parsedId = updateTodo.safeParse(getId)

    if(!parsedId){
        res.status(403).json({
            msg: "Wrong Id"
        })
        return
    }

    await todo.update({
        _id: req.body.id
    }, {
        completed: true,
    })

    res.json({
        msg: "Todo marked as completed"
    })

})

app.listen(3000)