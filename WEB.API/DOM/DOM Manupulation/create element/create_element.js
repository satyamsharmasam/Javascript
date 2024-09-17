// *** Create element in js

const h1 = document.querySelector('h1')
const container = document.querySelector('.container')
const MainImg = document.querySelector('img')

// create element
// we will make any tag with this function
// this element create and store in memory but not in page it come after append
// we will append it anywhere in body

// create element function
// document.createElement('tag name')

// full concept with examples

// ** EX-1
// const Paragraph = document.createElement('p')
// Paragraph.innerText = 'satyam'
// Paragraph.id = 'pip'
// container.append(Paragraph)
// In this example we are making paragraph element by js and giving id and text to it and append it into container

// ** EX-2
// const img = document.createElement('img')
// img.src =
//   'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
// container.append(img)
// In this example we are making img element by js and giving src to it of pokemon image and append it into container

// ** Ex-3
// for (let i = 1; i <= 100; i++) {
//   const newImages = document.createElement('img')
//   newImages.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
//   container.append(newImages)
// }
// In this example we are making img element and provide source and update 100 images by changing source by the help of for loop
// these pokemon images fetched by github repo (PokeAPI)

// Ex-4 (big example)
// int this container we were make everything from js
// in this example we will make image container div and this div contain img and p and append all of them into container
// and this all of work did by js
// in this show pokemon images with serial no and everything work by js

// for (let i = 1; i <= 500; i++) {
//   const div = document.createElement('div')
//   div.classList.add('image')

//   const image = document.createElement('img')
//   image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
//   const Pera = document.createElement('p')
//   Pera.innerText = i
//   div.append(image, Pera)
//   container.append(div)
// }

// sort way to do everything what is happen above

// let myHTML = ``
// for (let i = 1; i <= 100; i++) {
//   myHTML += ` <div class="image">
// <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png" >
// <p>${i}</p>
// </div>`
// }
// container.innerHTML = myHTML
