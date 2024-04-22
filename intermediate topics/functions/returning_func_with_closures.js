// Returning Functions with closures

// EX-
// function parent() {
//   const a = 10
//   const b = 20

//   function child() {
//     console.log(a + b)
//   }
//   return child
// }

// const add = parent()

// console.dir(add)

// **************(closures)

// if we access or use any variable of parent function in child function and return that
// child function from parent function then it create closure with those variable like in above example

// closure is an scope it make when then above condition true

// in normal case when function end its all variable will destroy but if any chid function is used variables of
// parent function then it will not destroy because child function create closures scop with those variables


