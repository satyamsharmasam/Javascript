// ⭐ in 95% cases this keyword point object that is write left of it =>(window.this)


// 🌟 Ex Case 1=>in the case of function in object
// const user={
//     firstName:'satyam',
//     lastName:'sharma',
//     fullName(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }


// 🌟 Ex Case 2=> in the case of function in method
// if we create a object user and create function in it so this point to user but if create another function in function
// than this point to window because we don't called that like it (this.etc)

// const user={
//     firstName:'satyam',
//     lastName:'sharma',
//     fullName(){
//      function getAge(){
//            console.log(this);
//          }
//          getAge()
//     }
// }


// 🌟 Ex Case 3=> in the case new keyword
// if we use new keyword then this point to that objet which is return by constructor

// function fullName() {
//     this.hello='hi'
//     console.log(this)
// }

// new fullName()


// 🌟 Ex Case 4=> in the case of eventlistener
// if we pass function in eventlistener then this point to that think on which event puts

// const h1=document.querySelector('h1')
// h1.addEventListener('click',function(){
//     console.log(this)
// })


// 🌟 Ex Case 4=> in the case of arrow function (don't use arrow function as a method)👎🏻


// 🌟 Ex Case 5=> in the case of class
// in this case this also point to that object which is create by class constructor



