// ⭐ this keyword (this keyword use to point currant think)
// in blow getBirthYear function automatically point user1,2 etc from where it called because of this keyword
// but this break encapsulation and abstraction rule


// function getBirthYear () {
//     return new Date().getFullYear() - this.age
// }



// function createUSer(firstName,lastName,age) {
//     const user = {
//         firstName: firstName,
//         lastName:lastName ,
//         age:age ,
//         getBirthYear,
//     }
//     return user
// }

// // call function to create objects dynamically
// const user1=createUSer('sam','sharma',28)
// const user2=createUSer('satyam','sharma',19)


// ⭐ Inheritance
// ⭐ contractor perfect way to do above think
// ⭐ new keyword (when you call any function with new keyword then it return object by default(automatic) no matter what you returned in function) ex=> new sam()

// => function that create objects called constructor function
function createUSer(firstName, lastName, age) {

    this.firstName = firstName
    this.lastName = lastName
    this.age = age

}

createUSer.prototype.getBirthYear = function () {
    return new Date().getFullYear() - this.age
}

createUSer.prototype.getFullName = function () {
    return this.firstName+' '+this.lastName
}



const user1 = new createUSer('satyam', 'sharma', 19)
const user2 = new createUSer('sam', 'singh', 23)

// user1.getBirthYear()  directly accessed.


// if we create function like above mention than that function prototype has constructor that has all function which is created by it
// and all of object create by it already inherited function of constructor of createUser and directly accessed