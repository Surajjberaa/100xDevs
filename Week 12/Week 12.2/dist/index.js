"use strict";
function ageCalculator(user1, user2) {
    const res = user1.age + user2.age;
    console.log(res);
    return res;
}
ageCalculator({
    name: "Suraj",
    age: 20
}, {
    name: "Harkirat",
    age: 30
});
