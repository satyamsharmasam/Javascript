// What is Hosting in JS

// Definition=> if we are access any variable and etc before declaration and it give undefined
// not error it means that variable or etc is hosted

// EX- var give undefined ,let and const give not defined
// all variable which is crated by (var) those all are is hosted and show undefined if we access
// them before initialization

// console.log(userName)
// var userName = 'satyam'
// // in this case output is undefined means variable is hosted

//function(Declaration)
// if we are create any function from function keyword that is also access able before
// initialization because function is fully stored in memory at the time of memory creation phase
// so it is properly working if we access it before initialization (so it is hosted)

// function expression

// sayHi()

// const sayHi=function(){
//     console.log('Hello');
// }

// in this case we are not able to access this function because this is created by the help of const not function keyword
// in this case we get an error
