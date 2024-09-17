// ⭐ Static => using (static) keyword make things only for classes and direct (accessible) without new keyword
// we also create block of static code in class that is automatically called when our code is run without class call


class createUser{
    constructor(firstName,lastName,age){
        this.firstName=firstName
        this.lastName=lastName
        this.age=age
    }

    // static keyword
    static hi='hello'

     // static block
     static{
        console.log('static block');
     }
     
    getBirthYear() {
        return new Date().getFullYear() - this.age
    }

    getFullName() {
        return this.firstName+' '+this.lastName
    }
    
}

const user1 = new createUser('satyam', 'sharma', 19)
const user2 = new createUser('sam', 'singh', 23)