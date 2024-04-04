const jwt = require("jsonwebtoken");
const JWT_SECRET = require("./config");
const { User } = require("./database");


const authMiddleware = (req, res, next) => {
    const authKey = req.headers.authorization;

    if(!authKey || !authKey.startsWith("Bearer")){
        res.status(403).json({
            msg: "Not authorized"
        })
    }

    const token = authKey.split(" ")[1]

    try {
        
        const verified = jwt.verify(token, JWT_SECRET)
        console.log(verified);
        
        req.userId = verified.userId
        console.log(req.userId);
        next()

    } catch (error) {
        res.status(403).json({
            msg: error,
            error: "error"

        })
    }
}



module.exports = authMiddleware;

// testToken = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2NjBkYWU0YmFkMzlhNWVjZWE3NzQ0YjAiLCJpYXQiOjE3MTIyMzE5MTh9.Cc22Gc_KtUgco8twG1xaow-SzhP2ToPxIk1ZiO2wkE8