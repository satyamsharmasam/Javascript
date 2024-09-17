// *** Keyboard Event

const h1 = document.querySelector('h1')

// it is set on window mainly
// it work when your focus in document
// There are 3 types of keyboard events
// 1. keypress
// 2. keyup
// 3. keydown

// 1. ** keypress
// it will fire when we press any key from keyboard

// window.addEventListener('keypress', (e) => {
//   console.log('Button value : ', e.key)
//   console.log('Button code :', e.code)
// })

// 2. ** keyup
// it will fire when we up our finger after click any key

// window.addEventListener('keyup', (e) => {
//   console.log('Button value : ', e.key)
//   console.log('Button code :', e.code)
// })

// 2. ** keydown
// it will work same as keypress but it not count click up

window.addEventListener('keydown', (e) => {
  console.log('Button value : ', e.key)
  console.log('Button code :', e.code)
})
