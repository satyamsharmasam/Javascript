// *** Form Events and Event Object

// *** Form Events

// From events selected by their id
const userName = document.querySelector('#username')
const form = document.querySelector('form')
const paragraph = document.querySelector('p')

// *** input Element Events

// * 1. input event
// in this we will pass parameter which is provide object of event to us
// from this object we will access many think of events like => value,type etc

// here we are access value of input ,replace value of p tag from input value ,store it in var
// let userValue
// userName.addEventListener('input', (e) => {
//   console.log(e.target.value)
//   userValue = e.target.value
//   paragraph = e.target.value
// })

// * 2. change event
// when we will change anything in input and click outside then change event will fire
// if we don't change anything in input then it will not fire

// userName.addEventListener('change', (e) => {
//   console.log(e.target.value)
// })

// * 3. focus event
// it will working when we focus in input (means writing something in input)
// userName.addEventListener('focus', (e) => {
//   console.log(e.target.value)
// })

// * 4. blur event
// it will working when we blur from input (means click outside of input)
// userName.addEventListener('blur', (e) => {
//   console.log(e.target.value)
// })

// *** submit Event (form personal event)
// it is working when we will click on button which is in the form
form.addEventListener('submit', (e) => {
  e.preventDefault()
  console.log('form submitted')
})

// e.target=> provide that which is clicked
// e.currentTarget=> provide on which event is set
