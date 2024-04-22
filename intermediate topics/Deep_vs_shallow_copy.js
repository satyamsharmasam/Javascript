// Deep copy VS shallow copy

// EX- to understand

// const user1='satyam'
// const user2=user1
// user2=user2+ 'sharma'
// in string case user1 and user2 point different location in memory because we used (=) operator (so if we update user2 or user1 they don't reflect each other in string case)

// main topic
// if we can do this same with object and array they can reflect each other because in array and object we will change values of them not modify main variable
// They point same memory location in memory

//
//
//

// **********************************************(Shallow Copy) (it working only one level) (not useful in nested)***********************************************

// For=> Object

// const user1 = {
//   firstName: 'satyam',
//   lastName: 'sharma',
// }

// const user2 = {}
// Object.assign(user2, user1)
// user2.firstName = 'Tamanna'         (but this is old method)

//
//
// **************** BY spread operator
// const user2 = { ...user1 }

// For => Array

// const fruit = ['Apple', 'Banana', 'Orange']

// Object.assign(myFruit, fruit)
// myFruit.push('kiwi')

// **************** BY spread operator
// const myFruit = [...fruit]

// ****************some extra methods

// const myFruit = [].concat(fruit)
// const myFruit = fruits.slice()

//
//
//
//
//

// ***************************** but is nested case these method not working
// Ex-
// const user1 = {
//   firstName: 'satyam',
//   lastName: 'sharma',
//   pata: {
//     city: 'delhi',
//     pinCode: 110053,
//   },
// }

// const user2 = { ...user1 }

// user2.pata.city = 'indor' (now indor change in both object) (because of nesting)
//
//
//

// **********************************************(Deep Copy)(it useful in nested)  (Using JSON)***********************************************

// const user1 = {
//   firstName: 'satyam',
//   lastName: 'sharma',
//   pata: {
//     city: 'delhi',
//     pinCode: 110053,
//     homeAddress: {
//       street: 16,
//       houseNo: 'V560',
//     },
//   },
// }

// const user2 = JSON.parse(JSON.stringify(user1))
// user2.pata.city = 'indor'
// user2.pata.homeAddress.street = 18
