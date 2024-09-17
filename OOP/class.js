// ⭐ Classes in JavaScript are a blueprint for creating objects
// Classes simplify the creation of objects and inheritance, making code more organized and reusable.
// classes are also constructor function behind the seen

// Create Class (typeof class is = function)

class createUser{
    constructor(firstName,lastName,age){
        this.firstName=firstName
        this.lastName=lastName
        this.age=age
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
