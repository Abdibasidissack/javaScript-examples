// creating a simple object
const person = {
    name : "mohamed",
    address: {
        place : "eastleigh",
        street : '6th street',
        DOB : 1996
    },
    age: (year) =>{
        return 2019 - person.address['DOB']
    }
}

console.log(person.age());