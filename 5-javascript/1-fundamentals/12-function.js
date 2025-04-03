

//  Two Phases

// 1 - Creatation
// 2 - Execution

// Function declaration && Function statement || call - Invoked

// greet("Aurn", "Kumar");

// Parameter
function greet(firstName = "John", lastName = "Doe"){

    // Default Parameter

    // if(typeof firstName === "undefined"){firstName = "John"};
    // if(typeof lastName === "undefined"){lastName = "Doe"};


    console.log(`Hello ${firstName} ${lastName}`);
}



// Argument
// greet("Jagan", "Javid");

// Function Expression

const add = function(x = 5){
    console.log(x + 5)
}

// add(15);

// An IIFE (Immediately Invoked Function Expression)

// (function(name){
//     console.log(name);
// })("Javid")


