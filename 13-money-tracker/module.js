

const person1 = (function(){

 
    // Private
    const x = 5;
    
    // Public

    return {
        x:x
    }


})();

console.log(person1.x);


const person2 = (function(){

 
    // Private
    const x = 10;
    
    // Public

    return {
        x:x
    }


})();

console.log(person2.x);


let x = 5;

console.log(x);

x = 15;

console.log(x);



