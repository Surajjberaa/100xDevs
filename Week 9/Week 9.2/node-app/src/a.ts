interface User {
    firstName: string,
    lastName: string,
    age: number
}

function isLegal(user: User){
    if(user.age>18){
        return true
    }else{
        false
    }
}

function greet(user: User){
console.log(`Hi there ${user.firstName}`);

}

isLegal({
    firstName: "Suraj",
    lastName: "Bera",
    age: 20
})