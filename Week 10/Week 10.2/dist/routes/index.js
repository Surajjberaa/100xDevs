"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const zod_1 = require("zod");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Hey there");
});
const userSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    firstName: zod_1.z.string(),
    lastName: zod_1.z.string(),
    password: zod_1.z.string(),
});
app.post("/signup", (req, res) => {
    var _a;
    const user = req.body;
    const parsedUser = userSchema.safeParse(user);
    if (!parsedUser.success) {
        return res.status(402).json({
            msg: "Wrong inputs",
            errors: (_a = parsedUser.error) === null || _a === void 0 ? void 0 : _a.errors
        });
    }
    const userData = parsedUser.data;
    // Do something with the validated user data
    res.json({
        msg: "Created",
        user: userData
    });
});
app.listen(3000, () => {
    console.log("Listening on port 3000");
});
