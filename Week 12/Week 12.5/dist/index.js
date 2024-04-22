"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const insertUser_1 = __importDefault(require("./User/insertUser"));
const createTodo_1 = __importDefault(require("./Todo/createTodo"));
const todo_UserInfo_1 = __importDefault(require("./Todo/todo_UserInfo"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Hey there");
});
app.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.body;
    // console.log("hi");
    // console.log(user);
    if (!user) {
        res.status(400).json({
            msg: "Give input properly"
        });
    }
    yield (0, insertUser_1.default)(user.username, user.password, user.firstName, user.lastName, user.email);
    res.send("user added");
}));
app.post("/createTodo", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const todo = req.body;
    if (!todo) {
        res.status(400).json({
            msg: "Give input properly"
        });
    }
    yield (0, createTodo_1.default)(todo.title, todo.description, todo.userId);
    res.send("todo added");
}));
app.post("/info", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.body.userId;
    console.log(userId);
    if (!userId) {
        res.status(400).json({
            msg: "Give valid userId"
        });
    }
    const response = yield (0, todo_UserInfo_1.default)(userId);
    res.json(response);
}));
app.listen(port, () => {
    console.log(`server running in ${port}`);
});
