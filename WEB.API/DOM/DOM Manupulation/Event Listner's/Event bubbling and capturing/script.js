const green = document.querySelector('.green')
const pink = document.querySelector('.pink')
const blue = document.querySelector('.blue')

// *** Bubbling and capturing
// Bubbling means when we do any task on child it reflect their parent and their parent in chain
// event listeners working in bubble format
// (when we click on deep child it working upto window object and run all event listeners which is on the way)

// Ex=>

// window.addEventListener('click', (e) => {
//   console.log(' 6. window event listener')
// })

// document.addEventListener('click', (e) => {
//   console.log(' 5. document event listener')
// })

// document.body.addEventListener('click', (e) => {
//   console.log(' 4. body event listener')
// })

// green.addEventListener('click', (e) => {
//   e.stopPropagation()
//   console.log(' 3. green event listener')
// })

// pink.addEventListener('click', (e) => {
//   console.log(' 2. pink event listener')
// })

// blue.addEventListener('click', (e) => {
//   console.log(' 1. blue event listener')
// })

// when we want that if we are click on any child it will not reflect their parent then we use
//   use this to stop chain =>    e.stopPropagation()

// *** capture (it is vise - versa of bubbling it ) it is third argument in event listener (it comes parent to child)
