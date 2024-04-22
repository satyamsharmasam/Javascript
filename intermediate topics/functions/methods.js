// Function And Methods

// Every function not a method but every method is a function

// normal function

// function add(a, b) {
//   return a + b
// }

//*****  Method and function (pass any function in object)

const math = {
  add: function (a, b) {
    return a + b
  },
  square: function (a) {
    return a * a
  },

  //This is short method of ES6 and mostly using now days
  subtract(a, b) {
    return a - b
  },

  cube(num) {
    return num ** 3
  },
}

// when we will access any function by (.) operator called method function
// In it we will pass many function as key values pairs and access them
// math.add(2,3)  // Access
