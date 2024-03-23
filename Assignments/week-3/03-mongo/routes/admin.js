const { Admin, Course } = require("../db");
const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();


// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username
    const password = req.body.password

    const existingAdmin = await Admin.findOne({username: username})

    if (existingAdmin) {
        return res.status(403).json({
            msg: "Admin already exists"
        });
    }

    const newAdmin = new Admin({
        username: username,
        password: password
    })

    await newAdmin.save()

    res.json("Admin created successfully");
    

});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

    const newCourse = new Course({
        title: title,
        description: description,
        imageLink: imageLink,
        price: price
    })

    await newCourse.save()
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