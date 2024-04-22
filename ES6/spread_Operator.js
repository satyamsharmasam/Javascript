// Spread operator [... ]

// Spread operator used to combine or join two things

const nums1 = [1, 2, 3, 4, 5]
const nums2 = [6, 7, 8, 9, 10]
const name = 'Satyam'

const joinArray = [...nums1, ...nums2]
//concatenate nums1 and nums2 array and name string and create new array

// object
// const user = {
//   name: 'Satyam',
//   age:19
// }

// const updatedUser={...user,city:'Delhi'}

function add() {
  let sum = 0
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  return sum
}

// if we want to add another array values in this function then ve will use spread operator
// it use during the function call
// add(...joinArray)  it return sum of all values which is in join array
