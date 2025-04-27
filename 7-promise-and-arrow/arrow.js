

// const sayHello = function(){
//     console.log("Hello");
// }

// Arrow function

// const sayHello = () => {
//     console.log("Hello");
// }

// One line function does not need a braces
// const sayHello = () => console.log("Hello");

// One line return
// const sayHello = () => "Hello"
// const sayHello = () => 5
// const sayHello = () => true
// const sayHello = () => [true]

// Return obejct in a one line
// const sayHello = () => ({msg:"Hello"})


// Single params does not need a parentheses

// const sayHello = name => `Hello ${name}`;

// const sayHello = (firstName, lastName) => `Hello ${firstName} ${lastName}`;


// console.log(sayHello("jagan","Javid"));

const users = ["Javid", "Jagan", "Akash"];

// users.forEach(function(user){
//     console.log(user);
// })

users.forEach((user, index) => console.log(`${user} - ${index}`))
