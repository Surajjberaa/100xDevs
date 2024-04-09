"use strict";
function isLegal(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        false;
    }
}
function greet(user) {
    console.log(`Hi there ${user.firstName}`);
}
isLegal({
    firstName: "Suraj",
    lastName: "Bera",
    age: 20
});
