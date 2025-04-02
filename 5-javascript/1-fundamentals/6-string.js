

const firstName = "Jagan";
const lastName = "Javid";
const age = 100;



let val;

val = firstName + lastName;

// Concatenation
val = firstName + " " + lastName;

// Append
val = "John";

// val = val + " Doe";
val += " Doe"

// Length
val = firstName.length;

// Concat
val = firstName.concat(" ", lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[0];
val = firstName[1];
val = firstName[5];

// CharAT
val = firstName.charAt("0");
val = firstName.charAt(3);

// Slice

const fruit = "Orange";

val = fruit.slice(1, 4);

// Split

const str = "Hello im jagan and im a web dev";
const tags = "Web Dev,UI/UX,App Dev";

val = str.split();
val = str.split("");
val = str.split(" ");
val = tags.split(",");

// Replace
val = str.replace("jagan", "javid");

// Include
val = str.includes("web");
val = str.includes("app");



console.log(val);

// console.log(fruit);