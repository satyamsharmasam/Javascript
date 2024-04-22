// These are examples of Higher order functions

// SetTimeout and SetInterval functions (These are part of browser)

// *********** SetTimeout (For only understanding)

// it is useable when we want to print our code after some delay then we will use it
// In this we will first pass code which is print and second is time for delay in millisecond (4000) for 4 second
// we pass code in string it will make another file with name like (vm etc) and treat that string as code in that file

// Ex -
// setTimeout("console.log('satyam')", 4000)

// for multiple line use string literals (``)

// setTimeout(
//   `console.log('satyam')
// console.log('sharma')`,
//   2000
// )

// It returns a id of time which we write in it (means every time has their unique id ) which setTimeout return
// It is show when we store it in var

// Ex-

// const timeId = setTimeout(`console.log('satyam')`, 2000)
// console.log(timeId)

// And if we want that this code not execute by any problem then we will use
// clearTimeout() in it we will pass time id and after it that SetTimeout will not print

//

// *********** SetTimeout (Main work) (as an higher order function)
// ex-

// setTimeout(name, 2000) // pass function

// function name() {
//   console.log('satyam ji')
// }

// So in this it will note make another file it only put delay and print code which is comes from our function
// who is written in main js file

//
//

// *************** (SetInterval)

// it is used ween we want to print anything in repeated mood like loop then we will use it
// it runs things infinitely and for stop it use clearInterval() and pass time id

// ex-

// setInterval(`console.log('satyam)`,2000) (it will print satyam after 2s infinitely till we stop it )

//

// setInterval(name, 2000)   //pass function  will print function like infinite loop

// function name() {
//   console.log('satyam ji')
// }
