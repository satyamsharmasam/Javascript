// *** Mouse Events

const h1 = document.querySelector('h1')
const card = document.querySelector('.card')
const container = document.querySelector('.container')

let count = 0

// Here are some mouse events (click and dblclick also mouse events)

// 1. mousedown event

// card.addEventListener('mousedown', (e) => {
//   console.log(e)
//   const newCard = document.createElement('div')
//   newCard.classList.add('card')
//   newCard.innerText = count++
//   container.append(newCard)
// })

// 2. mouseup event

// card.addEventListener('mouseup', (e) => {
//   console.log(e)
//   const newCard = document.createElement('div')
//   newCard.classList.add('card')
//   newCard.innerText = count++
//   container.append(newCard)
// })

// 3. mouseenter event
// it will work when our cursor on the targeted element  (like hover)

// card.addEventListener('mouseenter', (e) => {
//   console.log(e)
//   const newCard = document.createElement('div')
//   newCard.classList.add('card')
//   newCard.innerText = count++
//   container.append(newCard)
// })

// 4. mouseleave event
// it will work when our cursor leave the targeted element

// card.addEventListener('mouseleave', (e) => {
//   console.log(e)
//   const newCard = document.createElement('div')
//   newCard.classList.add('card')
//   newCard.innerText = count++
//   container.append(newCard)
// })

// 5. mousemove event
// it will work when our mouse moving on the targeted element

// card.addEventListener('mousemove', (e) => {
//   console.log(e)
//   const newCard = document.createElement('div')
//   newCard.classList.add('card')
//   newCard.innerText = count++
//   container.append(newCard)
// })

// 6. wheel event
// it will work when we use wheel of mouse on selected element

// card.addEventListener('wheel', (e) => {
//   console.log(e)
//   const newCard = document.createElement('div')
//   newCard.classList.add('card')
//   newCard.innerText = count++
//   container.append(newCard)
// })

// 7. scroll event
// it will work when we use scroll on selected element (if that have scroll then it will work)

// card.addEventListener('scroll', (e) => {
//   console.log(e)
//   const newCard = document.createElement('div')
//   newCard.classList.add('card')
//   newCard.innerText = count++
//   container.append(newCard)
// })

// 8. scroll event
// it will work when we scroll on selected element (if that have scrollbar then it will work)

// card.addEventListener('scroll', (e) => {
//   console.log(e)
//   const newCard = document.createElement('div')
//   newCard.classList.add('card')
//   newCard.innerText = count++
//   container.append(newCard)
// })

//
//
//
//

//****************** Mobile phone Events  (mobile device)

// 1. touchstart event
// it will work when we touch on selected element

// card.addEventListener('touchstart', (e) => {
//   console.log(e)
//   const newCard = document.createElement('div')
//   newCard.classList.add('card')
//   newCard.innerText = count++
//   container.append(newCard)
// })

// 2 touchend event
// it will work when we touch any selected element and up our finger

// card.addEventListener('touchend', (e) => {
//   console.log(e)
//   const newCard = document.createElement('div')
//   newCard.classList.add('card')
//   newCard.innerText = count++
//   container.append(newCard)
// })

// 3. touchmove event
// it will work when we touch on selected element and swipe like drag

// card.addEventListener('touchmove', (e) => {
//   console.log(e)
//   const newCard = document.createElement('div')
//   newCard.classList.add('card')
//   newCard.innerText = count++
//   container.append(newCard)
// })

//
//
//

// ************* pointer events (these are working for both desktops and mobile phones)  (mostly use)

// 1. pointermove event
// when we move on selected element
// card.addEventListener('pointermove', (e) => {
//   console.log(e)
//   const newCard = document.createElement('div')
//   newCard.classList.add('card')
//   newCard.innerText = count++
//   container.append(newCard)
// })

// 2. pointerenter event
// card.addEventListener('pointerenter', (e) => {
//   console.log(e)
//   const newCard = document.createElement('div')
//   newCard.classList.add('card')
//   newCard.innerText = count++
//   container.append(newCard)
// })

// pointerleave , pointerout  etc
