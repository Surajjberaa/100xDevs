import express from 'express'
import { createClient } from 'redis'

const app = express()
app.use(express.json())

const client = createClient();
client.connect()

app.post('/submit', async (req,res) => {
    const {problemId, userId, code, language} = req.body
    try {
        
        await client.lPush('submissions', JSON.stringify({problemId, userId, code, language}))
        res.json({
            message: "Submissions Received"
        })
    } catch (error) {
        res.json({
            message: "Some error occured"
        })
    }
})

app.listen(3000)