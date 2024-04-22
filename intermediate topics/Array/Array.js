// Array is also an object behind the seen

const fruitName = ['Apple', 'Banana', 'Mango', 'Orange']
const names = ['satyam', 'shubham', 'shweta']
const sirName = ['sharma', 'sharma', 'sharma']
const num = [1, 4, 2, 5, 9, 3]

// fruitName[3] = 'grapes'  (Update values of array)

// fruitName[4] = 'Water Melon'  (Add values in array)
// fruitName[fruitName.length] = 'Water Melon'  (second way to add values in array)

// fruitName[10] = 'Musk Melon'  (In this case we did that musk melon add on 10 index )
//Output (11) ['Apple', 'Banana', 'Mango', 'Orange', empty × 6, 'Musk Melon'] (empty 6 slot and musk melon add on 10 index)

//
//
//
//

// ********************************************* Basic Array Methods()*****************************************************

// 1. fruitName.push('Water Mellon') (perfect way to adding values in array) (it adding values from last of array)
// 2. fruitName.unshift('water Mellon') (it adding values from start of array)

// 3. fruitName.pop()  (Remove values in array)(it remove element from last)
// 4. fruitName.shift()  (Remove values in array)(it remove element from start)

// 5. const addedArray= names.concat(sirName) (concatenate 2 or more array) (store in new array in new variable) (give)

// 6. names.indexOf('shweta') (to check which element on witch index) (check index no)

// 7. names.includes('shweta') (to know element exist in this array) (if exist it provide True else false)

// 8. names.reverse() (TO reverse an array)

// 9. num.sort() (it arrange element in alphabetically order)(it treat small letter and capital letter 2 different types)

// 10. fruitName.slice(start,end) (it slice array) (it not change original array provide copy of original array)

// 11. splice()
// The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements
// fruitName.splice(start index num,kahan tak ke element delete karne hai,ab kya insert karne hai)
// EX - fruitName.splice(1,2,'kiwi','dragon fruit') (in this case banana and mango will remove kiwi and dragon fruit place on their position)

//
//
//
//

// ********************************************* Multi dimensional Array*****************************************************
// const nameAndNumberList = [
//   ['satyam', 90],
//   ['shubham', 80],
//   ['dinesh',85],
// ]

// nameAndNumberList[1][0] (access element of multidimensional array)

// const ticTacToe = [
//   ['X', null, null],
//   [null, null, 'O'],
//   ['O', null, 'X'],
// ]
