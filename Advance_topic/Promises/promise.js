// ⭐ Promises

// Promise => is nothing but is an spacial type object that help us to handle Callback hell problem

// promise work once it will be reject or resolve at a time

// Create promise
const resolveBtn = document.querySelector('#resolve-btn')
const rejectBtn = document.querySelector('#reject-btn')

const p = new Promise((resolve, reject) => {
  resolveBtn.addEventListener('click', () => {
    resolve('Promise Resolved')
  })
  rejectBtn.addEventListener('click', () => {
    reject('Promise Rejected')
  })
})

// methods of promise (then and catch)
// then => called when promise is fulfilled and put value of resolve in then callback
p.then((data) => {
  console.log(data)
  //catch called when promise is rejected and put value of reject in catch callback
}).catch((error) => {
  console.log(error)
})

// catch and then also return promise so we can call promise one by one (that solved problem of callback hell)

// then method data go into microtask queue that priority greater then callback queue that's why if you right another code but promises code run first
