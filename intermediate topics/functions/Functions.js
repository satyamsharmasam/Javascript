// function declaration
// function mySelf() {
//   console.log('Hi')
//   console.log('my name is satyam sharma')
//   console.log('A Web dev')
// }

// without parameter
// mySelf()

//               parameter default values of function
// function mySelf(username = 'sam', position = 'ram') {
//   console.log('Hi')
//   console.log('my name is', username)
//   console.log('A', position)
// }

// // with parameter
// mySelf('satyam', 'web dev')
// mySelf('shubham', 'web dev')
// mySelf() //Print default value

//
//

// Function with return

// if we don't write any return value then function return (undefined)

// ex-(sum of number by return)

// function sumOfNum(num1, num2) {
//     return num1 + num2
//   }

//  const result = sumOfNum(10, 10) (Answer comes from return)
// console.log(result) (if we don't write clg for result but behind the seen return also did that work)

// factorial of num

// function fact(num) {
//     let fact = 1
//     for (let i = 1; i <= num; i++) {
//       fact *= i
//     }
//     return fact
//   }

//   console.log(fact(5))

// Function is useable before declaration

// Function full code stored in memory during memory creation phase

// Function has their own execution context where variables and everything of function created and executed
// after executing or end of function then full function execution context will destroy and all
// variable of function also destroy
//
//
//
//

// function expression(if we are create any function from const,var,let this is called function expression)
// it is called expression because it has( = )sign

// const sayHi=function(){                         // anonymous function
//     console.log('Hello');
// }

// sayHi()

// in this case we are treat any function as variable
// But both are function declaration and function expression is the( Function Definition )
