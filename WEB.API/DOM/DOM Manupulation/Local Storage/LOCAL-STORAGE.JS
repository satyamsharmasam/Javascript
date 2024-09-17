// *** Local Storage

// this is storage in a browser object which is give some advantages when we are using it
// in this we are storing data in the form of key - value pairs
// if we store data in it that will never delete at any cost either we reload page or close file (till we don't delete it)
// localStorage data can only access able on which url where we set it

const MyName = document.querySelector('.name-tag')
const MyAge = document.querySelector('.age-tag')
const input = document.querySelector('.name-input')
const ageInput = document.querySelector('.age-input')

//****** Ex 1=> store strings and access them

// *** get value
// two ways to get value
// MyName.innerText = localStorage.Name

MyName.innerText = localStorage.getItem('Name')
MyAge.innerText = localStorage.getItem('Age')

// // *** set value

// input.addEventListener('input', (e) => {
//   // two ways of set value
//   // localStorage.Name = e.target.value

//   localStorage.setItem('Name', e.target.value)
//   MyName.innerText = localStorage.getItem('Name')
// })

// ageInput.addEventListener('input', (e) => {
//   localStorage.setItem('Age', e.target.value)
//   MyAge.innerText = localStorage.getItem('Age')
// })

//
//

// Ex 2 => store object and access them
// first we need to change object in string because localStorage can only save strings

// object to string=> JSON.stringify(object Name)

// const userData = JSON.parse(localStorage.getItem('User-Details')) || {}

// if (userData.name) {
//   MyName.innerText = userData.name
// }

// if (userData.age) {
//   MyAge.innerText = userData.age
// }

// input.addEventListener('input', (e) => {
//   userData.name = e.target.value
//   localStorage.setItem('User-Details', JSON.stringify(userData))
//   MyName.innerText = e.target.value
// })

// ageInput.addEventListener('input', (e) => {
//   userData.age = e.target.value
//   localStorage.setItem('User-Details', JSON.stringify(userData))
//   MyAge.innerText = e.target.value
// })

// to remove full localStorage
// localStorage.clear()

// to remove items of localStorage
// localStorage.removeItem('item Name')
