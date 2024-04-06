const express = require("express")
const zod = require("zod") 
const { User, Account } = require("../database")
const jwt = require("jsonwebtoken")
const JWT_SECRET = require("../config")
const authMiddleware = require("../middleware")

const router = express.Router()
// console.log("user.js");
const userValidation = zod.object({
    username: zod.string().email(),
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string()
})


router.post("/signup", async (req, res, err)=>{

    const userDets = req.body
    const parsedUser = userValidation.safeParse(userDets)

    if (!parsedUser) {
        res.status(401).json({
            message: " Incorrect inputs"
        })
    }

    const existingUser = await User.findOne({
        username: req.body.username
        
    })
    // console.log(existingUser);
    if (!existingUser) {
        const user = await User.create({
            username: req.body.username,
            password: req.body.password,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            
        })
        
        const userId = user._id

        await Account.create({
            userId,
            balance: 1 + Math.random() * 10000
        })
        
        const token = jwt.sign({
            userId
        }, JWT_SECRET)
        
        return res.status(200).json({
            msg: "User created successfully",
            token: token
        })
    }
    // console.log("hi there");
    res.status(401).json({
        message: "Email already taken /"
    })
    })

    const signinBody = zod.object({
        username: zod.string().email(),
        password: zod.string()
    })
    


router.post("/signin", async(req, res)=>{
    try {

    const { success } = signinBody.safeParse(req.body)

    if (!success) {
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }

    const verifiedUser = await User.findOne({
        username: req.body.username,
        password: req.body.password
    });
        // console.log(verifiedUser._id);
        if(verifiedUser){
            // console.log("inside verification");
            const user = verifiedUser._id
            // console.log(user);
            const token = await jwt.sign({
                userId: user._id
            }, JWT_SECRET)
            // console.log(token);
            res.status(200).json({
                msg: "Sign in successfull",
                token: token
            })
        }
        else{
            res.status(401).json({
                msg: "User not found",
            })
        }

    } catch (error) {
        res.status(401).json({
            msg: "error" + error,
        })
    }
})

const updateSchema = zod.object({
    password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional()
})

router.put("/", authMiddleware, async (req, res) => {
    // console.log("Inside updater");
    const { success } = updateSchema.safeParse(req.body)
    // console.log("Schema done");
    try {
        // console.log("Inside try");
        if (!success) {
            // console.log("!success");
            res.status(411).json({
                msg: "Error while updating information"
            })
        }
        // console.log("Schema Passed");
        
        const updateChecker = await User.updateOne({_id: req.userId}, req.body)

        // console.log("User Updated");
        if (!updateChecker) {
            res.status(403).json({
                msg: "Issue in updating"
            })
        }
        res.json({msg: "updated successfully"})
        
    } catch (error) {
        res.status(401).json({
            msg: "error",
            error: error
        })
    }

})

router.get("/bulk", authMiddleware, async (req, res) => {
    const filter = req.query.filter || ""

    const users = await User.find({
        $or: [{
                firstName: {"$regex": filter , "$options": "i" }
            },
            {
                lastName: { "$regex": filter, "$options": "i"}
            }
        ]
    })

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})

module.exports = router