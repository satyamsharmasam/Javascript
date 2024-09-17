// ⭐ Prototypal Inheritance and using Extends and Super keyword


// Inheritance (Inherit properties from one class to another class ) (using Extends and super keyword)
class User{
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

// const user1 = new createUser('satyam', 'sharma', 19)
// const user2 = new createUser('sam', 'singh', 23)

// Extend keyword to inherit
class Student extends User{
    // write value to inherit from User class and then use them in super
    constructor(firstName,lastName,age,standard){
        super(firstName,lastName,age)
        this.standard=standard
    }
    Study(){
        console.log('studying');
    }
}

// const Student1=new Student('sam','sharma',19,'BCA')

class Employee extends User {
   constructor(firstName,lastName,age,company){
    super(firstName,lastName,age)
        this.company=company
   }
   job(){
        console.log('Doing job');
   }
}


const Employee1=new Employee('satyam','sharma',19,'Google')

