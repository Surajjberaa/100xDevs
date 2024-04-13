import express from 'express';
import { string, z, ZodError } from 'zod';
import { insertUser } from '..';

const app = express();
app.use(express.json());

app.get("/", (req: any, res: any)=>{
    res.send("Hey there")
});

const userSchema = z.object({
    email: z.string().email(),
    firstName: z.string(),
    lastName: z.string(),
    password: z.string(),
});

type ParsedUser = {
    success: boolean;
    data?: {
        email: string;
        firstName: string;
        lastName: string;
        password: string;
    };
    error?: ZodError;
};

app.post("/signup",(req, res)=>{
    const user = req.body;
    const parsedUser: ParsedUser = userSchema.safeParse(user);
    if (!parsedUser.success) {
        return res.status(402).json({
            msg: "Wrong inputs",
            errors: parsedUser.error?.errors
        });
    }
    const userData = parsedUser.data;
    // Do something with the validated user data
    res.json({
        msg: "Created",
        user: userData
    });
});

app.listen(3000, ()=>{
    console.log("Listening on port 3000");
});
