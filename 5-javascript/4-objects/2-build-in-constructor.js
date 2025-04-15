



// let name = "Jagan";

// console.log(name.length);


// String

const name = "Jagan";
const name2 = new String("Javid");



// console.log(name);
// console.log(typeof name);


// console.log(name2);
// console.log(typeof name2);


// Number 
const num1 = 5;
const num2 = new Number(7);


// console.log(num1);
// console.log(typeof num1);
// console.log(num2);
// console.log(typeof num2);


// Boolean 
const bool1 = true;
const bool2 = new Boolean(false);


console.log(bool1);
console.log(typeof bool1);
console.log(bool2);
console.log(typeof bool2);


// Function 

const getSum1 = function(x, y){
    return x + y;
}

// getSum1.test = "Hello";

// console.log(getSum1.test)

// console.log(getSum1(5,5));
// console.log(typeof getSum1);

const getSum2 = new Function("x", "y", "return x + y");

// console.log(getSum2(10,10));
// console.log(typeof getSum2);


// Object

const obj1 = {name:"Jagan"};
const obj2 = new Object({name:"Javid"});

// console.log(obj1);
// console.log(obj2);

// Array

const arr1 = [1,2,3,4,5];
const arr2 = new Array(1,2,3,4,5);


console.log(arr1)
console.log(arr2)