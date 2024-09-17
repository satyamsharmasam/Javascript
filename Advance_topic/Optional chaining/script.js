// ⭐ Optional chaining (?) =>it is used for error handling and concise our code

const user = {
    firstName: "satyam",
    lastName: "sharma",
    age: 19,
}

// regular way
// console.log(user.address && user.address.city);



// Optional chaining=>
// it work like if this value not exist don't move forward
console.log(user.address?.city);



// with function call
console.log(user.getFullName?.());



