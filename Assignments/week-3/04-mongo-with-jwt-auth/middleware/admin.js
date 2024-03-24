const jwt = require("jsonwebtoken")
const {JWT_SECRET} = require("../config");
// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const bearerToken = req.headers.authorization
    const splitToken = bearerToken.split(" ")
    const token = splitToken[1]
    // console.log(token);

    // const verified = jwt.verify(token, JWT_SECRET)
    // console.log(verified);
    try {
        const decodedValue = jwt.verify(token, JWT_SECRET);
        console.log(decodedValue);
        if (decodedValue.username) {
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

module.exports = adminMiddleware;