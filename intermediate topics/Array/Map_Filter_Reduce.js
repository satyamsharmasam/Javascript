// *****  Map , Filter , Reduce

// ****************  (  Map )
// it overcome ability's of forEach , because forEach can't able to return anything
// when we use it, it return array (means it able to return anything in form of array)
// map able to return anything , it's don't want that true condition it return anything what you want

// Ex-

const months = ['January', 'February', 'March', 'April', 'May', 'December']

// const capitalizeMonths = months.map((month, index) => {    //we also able to pass one another argument in it which provide current array on which we are doing operations
//   console.log(index, month)
//   return month.toUpperCase()
// })

// console.log(capitalizeMonth)

// In this case map return new array of month with uppercase letter

//
//
//

// **************** ( Filter )

// it return part of original array, means from this we are able to return same array with some conditions

// we are able to put any condition on it , if condition true then it return values according condition else return nothing

// const filterMonths = months.filter((month, index) => {
//   console.log(index, month)
//   return month.toLowerCase().includes('m')
// })

// console.log(filterMonths)

// In this case filterMonth return only those month which has character ('m')

// ********* Chaining of Array methods
const students = [
  {
    name: 'satyam',
    age: 19,
  },
  {
    name: 'Tamanna',
    age: 20,
  },
  {
    name: 'Shubham',
    age: 16,
  },
  {
    name: 'jai',
    age: 13,
  },
]

// const stu = students
//   .filter((student, index) => {
//     console.log(index, student)
//     return student.age >= 18
//   })
//   .map((student) => {
//     return student.name
//   })
//   .filter((student) => {
//     return student.toLocaleLowerCase().includes('n')
//   })

// console.log(stu)
// it return student Name of those student whose age greater then 18 and character (n) in there name

//
//
//

// **************** ( Reduce )
// In reduce we will pass arguments in differently from map and filter
// in this we will pass values in this manner (accumulator , current , index ,array[] )
// it is use to find sum or max of an array (use to take one last answer)
// This this we will pass initial value for accumulator out of the arrow function

// const numbers = [1, 1, 1, 2, 1, 1]
// const sum = numbers.reduce((accumulator, current, index) => {
//   console.log(current)
//   console.log(accumulator + current)
//   return accumulator + current
// }, 0)

// console.log(sum)

// In this case we ware find the sum of an array (accumulator start with initial value and after one round it become some of accumulator + current)
// accumulator start with initial value what we ware pass and after every rotation it stor the value of sum and calculate current with that value
