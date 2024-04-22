// In object we don't compare values of objects we only compare objects address thats why it called reference type EX (user1===user2)
// Objects address always be different because always create new object in memory with their different address
// in object their are two things (key and value ) Ex (firstName:'satyam')
const name = 'sam'

const user = {
  firstName: 'satyam',
  lastName: 'sharma',
  age: 18,
  education: 'BCA',
  city: 'delhi',
  'first-name': 'jai',
}
console.log(user.firstName) //for access item or keys of object
console.log(user['first-name']) // this method is when we want to access these type object key which is assign as string (we don't access this type keys by (.) operator)

// one thing that object keys behind the seen also string so we can easily assign key like string Ex('firstName') also like ('first-name)

console.log(user[name]) //from this method we can easily access variables,functions, write expressions etc this is very powerful

// user.id = 10 (we can also add variables  by this (by this in user create new variable id=10 but not change in code but created behind the seen and also workable))

// Objects in Object
// these all nested objects has their different address in memory (but these all are connected to each other
const user2 = {
  firstName: 'shubham',
  lastName: 'sharma',

  address: {
    city: 'delhi',
    pinCode: 110053,

    homeAddress: {
      colony: 'vijay_park',
      streetNo: 16,
      houseNo: 'V-560',
    },
  },
}

// console.log(user2.address.pinCode)
// console.log(user2.address.homeAddress.streetNo)

// (delete keyword)
// delete any key value from object
// Ex-delete user2.firstName

// ************* Prevent from updating***************
// After that we will not able to perform any changes in object
// 1 Object.seal() (seal only prevent from some thinks after this we can update values) Ex- Object.seal(user2)
// 2 Object.freeze() (but freeze prevent from everything after this we can't able to do anything) Ex- Object.freeze(user2)

// (in keyword)
// use to know any key is exist in object or not it replying in (True/False)
// console.log('firstName' in user2)  // (always put key names in cotes as string)
