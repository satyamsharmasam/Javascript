// ⭐ ES6 Modules => used to manage and split data in different files
// these modules used as import and export data
// if we want to import another files data in our main file so first we need to set type 'module' of it 


// ⭐ import data of another file

// we also import by renaming
// import { usersData,name as myName } from "./usersData.js"

// ===> import named export data
// import { usersData,name  } from "./usersData.js"

// console.log(usersData)
// console.log(name)

// ===> import default export data
// import productsData from "./productsData.js"

// ===> import inline export data
// import { nameMy } from "./productsData.js"

// console.log(productsData)
// console.log(nameMy);

// ===>  ALL import in singe line (by this we can excess anything which is export by that file)
// import  productsData, * as something from "./productsData.js"

// console.log(productsData)
// console.log(something.nameMy)
// console.log(something.myCity)





// ⭐ when we set (type module) of file then what will happen behind the scene 

// 1. after set type module first our file variable change from script scope to module scope which is not accessible in console
// 2.after set type module file automatic set defer attribute
// 3. after set type module we will can't create any variable without (var,const,let) it enables strict mode automatically and throw error

// Note:=> if we are write console.log('hi) in main file and after that import another file but imported file run first then "hi" print 
// of main file (means js scan file if find any import in file then run first to that after run our code)