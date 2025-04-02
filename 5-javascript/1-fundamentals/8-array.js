

const numbers = [5,3,23,54,65,34,87,98,45,10];

const xyz = "xyz";

// console.log(numbers);

let val;

// Get the array length

val = numbers.length;

// Check if it is array
val = Array.isArray(numbers);

// Get a single value
val = numbers[0];
val = numbers[4];

// console.log(numbers);

// Change into array index value
// val = numbers[2] = 100;

// Mutatable array

// Add on the end
// val = numbers.push(1000);

// Add on the front
// numbers.unshift(2000);

// Take off the end
// numbers.pop();
// numbers.pop();

// Take off from the front
// numbers.shift();
// numbers.shift();

const fruits = ["Apple", "Orange", "Kiwi", "Lemon"];

// console.log(fruits);

// Splice => Add and remove

// Splice to remove

// val = fruits.splice(2,2);

// Splice to add
// fruits.splice(1,0,"Ava");

// Revesre the array

val = numbers.reverse();


console.log(val);

console.log(fruits);
