//⭐ Try and Catch=> these are blocks for error handling (catch error and allow run code write after error)
// by these we can easily handle error's in our program and run another code program is not stop
// this is mostly used in Asynchronous code to handle error mainly(async/await)

// EX

// try{
// console.log(a)
// }catch(err){                          // this (err) is an object that has(message,error name etc)
//     console.dir(err)
// }
// console.log(2+2)



//==> Main use with Async Await

// async function makeRequest() {
// try{
//         const url = 'https://dummyson.com/users'
//         const response = await fetch(url)
//         const data=await response.json()
//         console.log(data);
//     }catch(err){
//         console.log(err);
//     }
//     console.log(3+3)
// }

// makeRequest()




//==> Another example for understand async await and try catch
// async function call(){
//     try{
//      const url1 ='https://dummyjson.com/users'
//      const response1=await fetch(url1)
//      const usersData= await response1.json()
    
//      const url2 =`https://dummyjson.com/posts/user/${usersData.users[0].id}`
//      const response2=await fetch(url2)
//      const postData= await response2.json()
    
//      const url3 =`https://dummyson.com/comments/post/${postData.posts[0].id}`  // change in url to make error
//      const response3=await fetch(url3)
//      const commentsData= await response3.json()
    
//      const url4 =`https://dummyjson.com/users/${commentsData.comments[0].id}`
//      const response4=await fetch(url4)
//      const commentUser= await response4.json()
 
//      console.log(commentUser);
//     }catch(err){
//          console.log(err)
//     }
//     console.log('i am still running');
    
//  }
 
//  call()