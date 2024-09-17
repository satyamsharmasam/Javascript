// ⭐ Callback Hell => is a problem that is occur when we using HML request

// in this Ex we are using callback method in method to fetch data which is connected/dependent to their previous data
function makeHttpRequest(method, url, callback) {
  const xhr = new XMLHttpRequest()

  xhr.responseType = 'json'

  xhr.addEventListener('load', () => {
    callback(xhr.response)
  })

  xhr.open(method, url)
  xhr.send()
}

// ⭐ Callback Hell (when we are request after one after that make callback hell like in blow example)

makeHttpRequest('GET', 'https://dummyjson.com/users', (usersData) => {
  // console.log(usersData.users[0].id);

  makeHttpRequest(
    'GET',
    `https://dummyjson.com/posts/user/${usersData.users[0].id}`,
    (postData) => {
      // console.log(postData.posts[0].id)

      makeHttpRequest(
        'GET',
        `https://dummyjson.com/comments/post/${postData.posts[0].id}`,
        (commentsData) => {
          console.log(commentsData)
        }
      )
    }
  )
})
