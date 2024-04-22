// ******************* Scopes *******************

// ****Global scope --> (variable access able throughout the program who created in global scope)
// In global scope there are two category
// 1. Script scope --> (all variable who created by (let and const ) stored in script scope)
// 2. window object -->(all variable who created by (var) stored in window object)
// and all function stored in window object by their name
// all variable access able by (window.) in window object but not script scope

// *************************

// ****Local scope/Function scope -->(variable access able only in scope where they are created)
// all function has their local scopes and variable who created in function only working
//  in function because they have local scope

// after execution or end of function then full function execution context will destroy and all
// variable of function also destroy thats why we are not able to access variable out of function because
// they will destroy when function end

// **************************

// ****Lexical Scope
// if function in function in function soo on and last function has their variable access and their all parent
// up to global it called lexical scope(scop chaining called lexical scope)

// Ex- (For understanding)

// const a=10
// function dad() {
//   const dad_Name = 'dinesh'
//   console.log(dad_Name)

//   function child() {
//     const child_Name = 'satyam'
//     console.log(child_Name)

//     function grandChild{
//         const grandChild_Name='Future'
//         console.log(grandChild_Name);
//     }
//   }
// }

// In this example function grand child have lexical scope because it able to access their all parent variable
// up to global variable (a=10)

// ************************

// ****block scope --> {}
// if we write any thing in curly brasses and that is only access able in these brasses called block scope
// only let and const has block scope but var has function scop means that is access able from out of block

// Ex-

// {
//   let Name = 'satyam'
// }

// console.log(Name) // it throw error because name defined in block and it only access able in that block

//***********************

// ****spacial thing--> if we are created a variable without (var,let,const) it has global scope even it created
// in block but it access able anywhere Ex- num=100 (but this is not good so there we have an keyword which is
// help us to prevent these type variable and throw error) --> ('use strict') if we write it on the top of our program
// then we don't able to make this type variables
