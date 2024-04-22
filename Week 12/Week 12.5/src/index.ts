import express from "express"
import zod, { string } from "zod"
import insertUser from "./User/insertUser";
import { Prisma } from "@prisma/client";
import createTodo from "./Todo/createTodo";
import todo_UserInfo from "./Todo/todo_UserInfo"

const app = express();
const port = 3000
app.use(express.json())

app.get("/", (req, res)=>{
    res.send("Hey there")
})


app.post("/signup", async (req: any, res: any)=>{
    
    const user = req.body;
    // console.log("hi");
    // console.log(user);
    
    if(!user){
        res.status(400).json({
            msg: "Give input properly"
        })
    }
    await insertUser(user.username, user.password, user.firstName, user.lastName, user.email);
    res.send("user added")
})


app.post("/createTodo", async (req, res)=>{
    const todo = req.body;
    if(!todo){
        res.status(400).json({
            msg: "Give input properly"
        })
    }
    await createTodo(todo.title, todo.description, todo.userId)
    res.send("todo added")
})

app.post("/info", async (req, res)=>{
    const userId = req.body.userId;
    console.log(userId);
    

    if(!userId){
            res.status(400).json({
                msg: "Give valid userId"
            })
    }
    const response = await todo_UserInfo(userId)
    res.json(response)

})


app.listen(port, ()=>{
    console.log(`server running in ${port}`);
    
})