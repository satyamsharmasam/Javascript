// Private and Public fields in classes

// private property of class accessible only inside of the class and declare using (#) keyword

// public property of class accessible inside and outside of the class


// private Property with only (#) sign and carry things already public
class createUser{
    #age
    constructor(firstName,lastName,age){
        this.firstName=firstName
        this.lastName=lastName
        this.#age=age
    }

    #hi='hello'

    getBirthYear() {
        console.log(this.#hi);
        return new Date().getFullYear() - this.#age
    }

    getFullName() {
        return this.firstName+' '+this.lastName
    }
    
}

const user1 = new createUser('satyam', 'sharma', 19)
const user2 = new createUser('sam', 'singh', 23)