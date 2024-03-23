const { Router } = require("express");
const { User, Course } = require("../db");
const router = Router();
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username
    const password = req.body.password

    const existingUser = await User.findOne({username: username})
    if (existingUser) {
        return res.status(403).json({
            msg: "User already exists"
        });
    }
    const newUser = new User({
        username: username,
        password: password
    })
    await newUser.save()
    res.json("User created successfully");
    
});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({});

    res.json({
        courses: response
    })
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId
    const username = req.headers.username
    console.log(courseId);

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
        username: req.headers.username
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