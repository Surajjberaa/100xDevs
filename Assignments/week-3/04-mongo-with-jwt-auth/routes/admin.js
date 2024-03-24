const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username
    const password = req.body.password
    try{

        await Admin.create({
            username,
            password
        })
        res.json({
            msg: "Admin created succesfully"
        })
    }catch(e){
        res.status(403).json({
            msg: "Some error occured",
            error: e
        })
    }
        
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username
    const password = req.body.password

    const valid = await Admin.findOne({
        username: username,
        password: password
    })

    if (valid) {
        
        const token = jwt.sign({
            username: username
        }, JWT_SECRET)
        res.json({
            msg: "Sign In Succesfull",
            token: token
        })
    }

});

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlN1cmFqMTIzQG1haWwuY29tIiwiaWF0IjoxNzExMjY5OTk2fQ.kASbWkfrWRt0eKmaQSLgvmmL4WxWcdqg80387qx-Amo
router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title; 
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

    await Course.create({
        title: title,
        description: description,
        imageLink: imageLink,
        price: price
    })

    res.json({
        msg: "Course added sucsessfully"
    })
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});

    res.json({
        courses: response
    })

});

module.exports = router;