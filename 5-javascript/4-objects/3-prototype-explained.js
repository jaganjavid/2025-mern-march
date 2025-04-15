

function Person(firstName,lastName){

    this.firstName = firstName;
    this.lastName = lastName; 

}


const person1 = new Person("Jagan", "Javid");
const person2 = new Person("Arun", "Kumar");


// Get Full name
Person.prototype.getFullName = function(){
        return this.firstName + " " + this.lastName
}  



console.log(person1);

// person1.__proto__.__proto__.getFullName = function(){
//     return this.firstName + " " + this.lastName
// }  

// console.log(person1.getFullName());


// const z = {};

// console.log(z);


// const arr = [1,2,3];


// console.log(arr);





