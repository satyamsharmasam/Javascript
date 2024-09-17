// ⭐ Fetch => is a latest way to call an API and fetching data


// Fetch data by Fetch method (Basic request default GET) 
// first call return response promise then after that we will fetch data by using it 

fetch("https://dummyjson.com/products")
.then((res)=> res.json())
.then((data)=> data.products)
.then((products)=>console.log(products))
.catch((err)=>console.log(err))


// ⭐ request to define method 

// fetch('https://dummyjson.com/products/add', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
//     title: 'BMW Pencil',
//     category:'stationary'
//     /* other product data */

//   })
// })
// .then(res => res.json())
// .then(console.log)
// .catch((err)=>console.log(err))




//⭐ Another example of fetch api in deep 

// fetch("https://dummyjson.com/users")
// .then((res)=> res.json())
// .then((usersData)=>fetch(`https://dummyjson.com/posts/user/${usersData.users[0].id}`))
// .then((res)=>res.json())
// .then((postData)=>fetch(`https://dummyjson.com/comments/post/${postData.posts[0].id}`))
// .then((res)=>res.json())
// .then((CommentsData)=>fetch(`https://dummyjson.com/users/${CommentsData.comments[0].user.id}`))
// .then((res)=>res.json())
// .then((CommentUser)=>console.log(CommentUser))
// .catch((err)=>console.log(err)) 



