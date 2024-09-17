// Getters and setters are functions that allow you to get and set object values, respectively. Getter functions return
//  the value of the specified property, while setter functions can set the value of the specified property.


const user={
    firstName:'satyam',
    lastName:'sharma',
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(value){
        const [firstName,lastName]=value.split(' ')
        this.firstName=firstName
        this.lastName=lastName
    }
}

// user.fullName='ram kumar' 
