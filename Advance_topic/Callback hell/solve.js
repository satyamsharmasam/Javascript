// ⭐ Solve Callback Hell => in this we are solving callback hell problem by using promises

function makeHttpRequest(method, url) {
  const xhr = new XMLHttpRequest()

  xhr.responseType = 'json'

  //create promise to solve problem
  const promise = new Promise((resolve, reject) => {
    xhr.addEventListener('load', () => {
      resolve(xhr.response)
    })
    xhr.addEventListener('error', () => {
      reject('request field')
    })
  })

  xhr.open(method, url)
  xhr.send()

  return promise
}


// ⭐ solved callback hell

makeHttpRequest('GET', 'https://dummyjson.com/users')
.then((usersData) => makeHttpRequest('GET', `https://dummyjson.com/posts/user/${usersData.users[0].id}`))
.then((postData) => makeHttpRequest('GET', `https://dummyjson.com/comments/post/${postData.posts[0].id}`))
.then((CommentsData) => makeHttpRequest('GET', `https://dummyjson.com/users/${CommentsData.comments[0].user.id}`))
.then((commentUser) => console.log(commentUser))
.catch((err) => console.log(err))

// ⭐ problem
// makeHttpRequest('GET', 'https://dummyjson.com/users', (usersData) => {
//   // console.log(usersData.users[0].id);

//   makeHttpRequest(
//     'GET',
//     `https://dummyjson.com/posts/user/${usersData.users[0].id}`,
//     (postData) => {
//       // console.log(postData.posts[0].id)

//       makeHttpRequest(
//         'GET',
//         `https://dummyjson.com/comments/post/${postData.posts[0].id}`,
//         (commentsData) => {
//           console.log(commentsData)
//         }
//       )
//     }
//   )
// })
