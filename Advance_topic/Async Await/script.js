// ⭐ Async / Await => are keywords which are help us to access promise data in simple manner (Easy way to access any promise)

// Async keyword use by function and return promise automatically

// Await keyword returns result of promise 
// this keyword wait for response ,it block the code which is write after that till getting data  (means block the code)

// Async function returned promise is by default resolved

// to reject promise we will use (throw new error keyword)

// ==> Async/Await we use to run asynchronous code looking like synchronously (means code run line by line)

// Ex of async function

async function makeRequest() {
    const url = 'https://dummyjson.com/users'
    const response = await fetch(url)
    const data=await response.json()
    console.log(data);
}


makeRequest()