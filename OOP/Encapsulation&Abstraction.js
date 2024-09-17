// Encapsulation(put multiple thing in one place) & Abstraction(show only Assential things )

const user = {
    firstName: 'satyam',
    lastName: 'sharma',
    age: 19,
    getAgeYear () {
        return new Date().getFullYear() - user.age
    }
}


// ⭐ Factory Functions (create objects automatically )

// if our property and value both are same then we don't need to write both this is for blow function
// firstName,
// lastName ,
// age ,

function createUSer(firstName,lastName,age) {
    const user = {
        firstName: firstName,
        lastName:lastName ,
        age:age ,
        getAgeYear () {
            return new Date().getFullYear() - user.age
        }
    }
    return user
}

// call function to create objects dynamically
const user1=createUSer('sam','sharma',28)
const user2=createUSer('satyam','sharma',19)

// ⚠ Note=> when we create multiple user by createUSer function then the getAgeYear function create for all user and take more space in memory 
// this problem solved by constructor 