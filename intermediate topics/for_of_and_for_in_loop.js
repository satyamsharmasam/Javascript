const fruits = ['banana', 'apple', 'orange', 'mango', 'grapes']

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i])
// }

//
//

// ************* (For of loop)         its work with  (array and string )

// for (const fruit of fruits) {
//   console.log(fruit)
// }

// In this variable fruit represent all single elements of fruits array

//
//

//  ************* (For in loop)         its work with  (object) (its only way to direct loop any object)

const Person = {
  Name: 'satyam',
  SirName: 'Sharma',
  Age: 19,
  city: 'Delhi',
}

// for (const key in Person) {
//   console.log(key, ':', Person[key])
// }

// But mostly we avoid it because it heavy

// There are some methods witch is help as to do it

// methods

// const PersonKeys = Object.keys(Person)                       //it provide all key of object
// const PersonValues = Object.values(Person)                  //it provide all values of object
// const PersonEntries = Object.entries(Person)               //it provide key values pares is separate arrays

// for (Entries of PersonEntries) {
//   console.log(Entries)
// }
