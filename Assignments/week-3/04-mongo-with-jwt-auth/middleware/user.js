const jwt = require("jsonwebtoken")
const {JWT_SECRET} = require("../config");

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const bearerToken = req.headers.authorization
    const splitToken = bearerToken.split(" ")
    const token = splitToken[1]

    try {
        const decodedValue = jwt.verify(token, JWT_SECRET);
        console.log(decodedValue);
        if (decodedValue.username) {
            req.username = decodedValue.username
            console.log(decodedValue.username);
            next();
        } else {
            res.status(403).json({
                msg: "You are not authenticated"
            })
        }
    } catch(e) {
        res.json({
            msg: "Incorrect inputs"
        })
    }

}

module.exports = userMiddleware;