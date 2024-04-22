// There are 3 types of variables in js
// 1.let
// 2.const
// 3.var

// 1.let(let values changeable after declaration)
// let username='satyam'
// username='sam'

// 2.const(const used for fixed values like (hors in a day)
// it will not changeable after declaration)

// const hoursInDay=24
// hoursInDay=25(show error because its not changeable)

// 3.var
// its older then let and const
// it has function scope
// if we used var before declaration it shows undefined but let and const show error in this case

// ***************************************************** Memory location (Check address of variables)*****************************************************
// first make some variables of all datatypes
// then go to dev tool and open memory penal and then check numeric values (for showing numeric values address)
// then click on take a snapshot after then opening a new window where (find by values what you assign in variables )then copy their context address from object tab
// Now search context address and open it (in this you can easily seen all variables what you created)
// All type variables stored in their groups

// This is possible you make 2 different variables and assign same values  to them (so the address will be same ) but sometimes its different if you are assign values
// from different way (like concatenate etc)

// boolean,and all falsy datatypes always has their same address(means in sabka alag alag address hota hai but vo hamesha same hota hai kabhi change nhi hota or variables ki trah)
// in sabka address globley same hai

// this knowledge help us to understand non primitive datatypes
