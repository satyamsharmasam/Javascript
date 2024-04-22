//// ************** Destructuring
// it is mainly used with (array and object)  or parameters
// it is use to make concise our code
// it is use to assign values of array or objects in different variables in single line

const color = ['red', 'green', 'pink', 'orange', 'blue', 'black', 'cyan']

// normally we assign values to different variables

// const color1=color[0]
// const color2=color[1]
// const color3=color[2]

// *** By Destructuring (Array)

const [color1, color2, color3] = color
const [, , , color4] = color

// To access direct element of array
const { 5: color5, 6: color6 } = color

//
//

// object

const user = {
  name: 'satyam',
  age: 19,
  address: {
    city: 'Delhi',
    Area: 'maujpur',
  },
}

// normally

// const name=user.name
// const age=user.age

// *** By Destructuring (object)

// const { name, age } = user

// if you want to make variable by your choice
// const { name: username, age:userAge } = user
// in this it make variable username and put value of name

// to access nested properties of object

// const {address: { city }} = user

//
//

// ***  Destructuring for (parameter)

//Here we will pass key that data we want
function intro({ age }) {
  console.log(age)
}

intro(user) //we pass full object in call but print only age because in parameter we pass only age
