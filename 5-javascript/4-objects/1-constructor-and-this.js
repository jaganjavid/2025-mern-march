

// Es5 Syntax

function Person(firstName,lastName){

    this.firstName = firstName;
    this.lastName = lastName;
    this.getFullName = function(){
        return this.firstName + " " + this.lastName
    }   

}


const person1 = new Person("Jagan", "Javid");
const person2 = new Person("Arun", "Kumar");

console.log(person1);
console.log(person2);
console.log(person1.getFullName());
console.log(person2.getFullName());




// console.log(this);

// function test(){
//     console.log(this);
// }

// test();

// const a = {
//     x:function(){
//         console.log(this);
        
//         function c(){
//             console.log(`c - ${this}`);
//         }

//         c();

//     },
//     y:"test"
// }

// console.log(a);

// a.x();