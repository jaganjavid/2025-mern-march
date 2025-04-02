

//`` => backticks

// const x = `xyz`;

// console.log(x);
// console.log(typeof x);

const name = "Javid";
const age = "100";
const job = "Web Dev";
const city = "Chennai";

let html;

// Without template Strings

// html = "My name is" + " " + name + " " + "im" + " " + age + " " + "and my job is" 
// + " " + job + " " + "im from" + " " + city;

// With template strings

html = `My name is ${name} im ${age} my job is ${job} and im from ${city}`;

console.log(html);


