const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const { default: mongoose } = require("mongoose");

// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    const username = req.body.username
    const password = req.body.password
    try{

        await User.create({
            username,
            password
        })
        res.json({
            msg: "User created succesfully"
        })
    }catch(e){
        res.status(403).json({
            msg: "Some error occured",
            error: e
        })
    }
});

router.post('/signin', async(req, res) => {
    // Implement User signin logic
    const username = req.body.username
    const password = req.body.password

    const valid = await User.findOne({
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

router.get('/courses',async (req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({});

    res.json({
        courses: response
    })

});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId
    const username = req.username
    // console.log(courseId);
    // const objCourseID = new mongoose.Types.ObjectId(courseId)

    await User.updateOne({
        username: username
    }, {
        "$push": {
            purchasedCourses: courseId
        }
    })
    res.json({
        message: "Purchase complete!"
    })
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username: req.username
    });

    // console.log(user.purchasedCourses);
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    });

    res.json({
        courses: courses
    })
});

module.exports = router

// HARKIRAT - eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkhhcmtpcmF0MTIzQG1haWwuY29tIiwiaWF0IjoxNzExMjc5MDM0fQ.eQ3uvrA0TBpl8XeeyL0DUPki1hmzbmMbYO2dS3sNT0Y

// BUNNY - eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkJ1bm55MTIzQG1haWwuY29tIiwiaWF0IjoxNzExMjc5MjcxfQ.A42wBQ0pmqAC00ilG2-jyvxvCJnxLoBPcvrUPDysVg4