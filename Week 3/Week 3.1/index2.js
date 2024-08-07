const express = require("express")
const zod = require("zod")

const app = express()

app.use(express.json())




function validateInput(obj){
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8)
    })
    
    const response = schema.safeParse(obj);
    console.log(response);
    return response
}


app.post("/login", (req, res)=>{
    const response = validateInput(req.body.obj)
    // console.log(response);
    if (!response.success) {
        res.json({
            msg: "Your inputs are invalid"
        })
        return
    }else{
        res.json(response)
    }
})
// const input = {
//     email: "dedbunny2004@gmail.com",
//     password: "123456789"
// }

// validateInput(input)

app.listen(3000)