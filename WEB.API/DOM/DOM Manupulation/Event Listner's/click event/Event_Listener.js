// *** Event Listener

// Event Listeners doing events when we click,hover an element .
// these are able to do any event
// it have many types

// 1. *** On Click Event => onclick
// this event work when we click any element

// ways to set On click Events

// 2 way. by give function to onclick (full with example)
// from this way we are able to add only one event at a time

// const h1 = document.querySelector('h1')

// function sayHi() {
//   console.log('Hi guys')
// }

// h1.onclick = sayHi

// 1 way. By addEventListener function (Right way to add events)
// from this we are able to set many event on element
// all event work together at a time
// in this we are pass all type function either anonymous or function

// syntax => varname.addEventListener('event type',anonymous function or function)

// Ex=> in this we are set different events for h1 and all are work together
// const h1 = document.querySelector('h1')

// function sayHi() {
//   console.log('Hi ')
// }

// function sayHello() {
//   console.log('Hello')
// }

// h1.addEventListener('click', sayHi)
// h1.addEventListener('click', sayHello)
// h1.addEventListener('click', () => {
//   console.log('satyam')
// })

// *** if we want that our event work only once time then we will pass {once : true } in third argument of event listener
// work only one time

// h1.addEventListener('click', () => {
//   console.log('satyam')
// },{once:true})  <=

// *** Task (when we click on plus card then create new card with counting)

const card = document.querySelector('.card')
const container = document.querySelector('.container')
let count = 1
card.addEventListener('click', () => {
  const newCard = document.createElement('div')
  newCard.classList.add('card')
  newCard.innerText = count++
  container.append(newCard)
})

// 2. *** on double click => ondblclick, dblclick
// it will work when we click any element 2 times
// everything same like click
