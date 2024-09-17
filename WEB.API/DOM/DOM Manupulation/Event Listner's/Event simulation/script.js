const addCardBtn = document.querySelector('.card')
const container = document.querySelector('.container')
const input = document.querySelector('input')
const form = document.querySelector('form')

let count = 1

addCardBtn.addEventListener('click', () => {
  const newCard = document.createElement('div')
  newCard.classList.add('card')
  newCard.innerText = count++
  container.append(newCard)
})

// *** Event simulation
// it is nothing but when we will fire any event by the help of javascript (like event fire automatic without our click)

// hare are some simulators (method) which are fire events for us

// *** 1.click()

// Ex=> (we will add 1000 card by the help of it )  in above project

// for add one card => addCardBtn.click()

// for 1000 card add

// for (let i = 1; i <=1000; i++){
//     addCardBtn.click()
// }

// by setinterval (see card when they ware added)

// const intervalId = setInterval(() => {
//   if (count < 999) {
//     clearInterval(intervalId)
//   }
//   addCardBtn.click()
// }, 5)

//
//

// *** 2.focus() (to focus input fields)

// input.focus()

// *** 3.blur() (vise - versa of focus ) (it is use for unfocus  )

// input.blur()

// *** 4.submit() and reset() (these are used in form on button)

// form.submit()

// form.reset()
