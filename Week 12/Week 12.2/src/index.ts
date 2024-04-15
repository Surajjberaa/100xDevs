interface User {
    id: string,
    password: string,
    email: string
    name : string,
    age : number
}

type UpdateProps = Pick<User, "name" | "age" | "email">

type UpdatePropsOptional = Partial<UpdateProps>

function updateUser(updatedProps: UpdatePropsOptional){

}


// Readonly

type user1 = {
    name: string,
    age: number
}

const user1Read : Readonly<user1> = {
    name: "harkirat",
    age: 20
}

// user1Read.age = 20

// Record

interface User2 {
    name: string,
    age: number
}

type Users2 = Record<string, User2>

const user2 : Users2 = {
    "abc12" : {name: "bunny", age:20},
    "abc122" : {name: "bunny2", age:22}
}

console.log(user2["abc12"]);

// Map 

interface User3 {
    name: string,
    age: number
}

const userMap = new Map<string, User3>();

userMap.set("abc123", {name: "bunny", age:20})
userMap.set("abc1234", {name: "bunny2", age:22})

console.log(userMap.get("abc123"));


// Exclude

type eventType = "click" | "move" | "scroll";
type ExcludeEvent = Exclude<eventType, "scroll">

function handleEvent(event: ExcludeEvent){
    console.log("Handling Event: " + event);
    
}

handleEvent("click")


