// ⭐ Synchronous vs Asynchronous Javascript

// ⭐ js is a single threaded language which means(it is doing single task/work at a time)

// 1. Synchronous => that code which is run line by line (use main thread of js) known as Synchronous (in this one thing done at a time)

// 2. Asynchronous => that code which is not run line by line (don't use main thread of js) go to browser and run according to browser thread(everything happened behind the scene )

// ⭐ AJAX => AJAX is stand for (Asynchronous Javascript And Xml)  this is nothing but way to write Asynchronous javascript
// AJAX is a best way to show new data on our web app without reload our page

const img = document.querySelector('img')
const btn = document.querySelector('button')

// ⭐ code to block main thread of js  (ex of Synchronous code)
const blockingBtn = document.querySelector('.block-btn')
blockingBtn.addEventListener('click', () => {
  const startTime = Date.now()
  let currentTime = startTime

  while (startTime + 4000 > currentTime) {
    currentTime = Date.now()
  }
})

// fetch api (fetching data is an Asynchronous)
btn.addEventListener('click', (e) => {
  const xhr = new XMLHttpRequest()

  xhr.responseType = 'json'

  xhr.addEventListener('load', () => {
    image.src = xhr.response.massage
    console.log(xhr)
  })

  xhr.open('GET', 'https://dog.ceo/api/breeds/image/random')
  xhr.send()
})
