// XHR  stands for  ( XML Http Request)
// it is older way from fetch to call an api

// new XMLHttpRequest()

// Ex of call api by XHR
const image = document.querySelector('img')
const btn = document.querySelector('button')

btn.addEventListener('click', (e) => {
  const xhr = new XMLHttpRequest()

  xhr.responseType = 'json'

  xhr.addEventListener('load', () => {
    image.src = xhr.response.massage
    console.log(xhr)
    // console.log(xhr.response)
  })

  // xhr.onload = () => {
  //     image.src = xhr.response.massage
  //     console.log(xhr)
  // }

  xhr.open('GET', 'https://dog.ceo/api/breeds/image/random')
  xhr.send()
})
