

let val;

const list = document.querySelector(".collection");
const firstListItem = document.querySelector("li:nth-child(1)");
const lastListItem = document.querySelector("li:nth-child(5)");

val = list.childNodes;
val = list.childNodes[0].nodeName; // Text Node
val = list.childNodes[1].nodeName; //  Element Node
val = list.childNodes[2].nodeName; // Comment Node
val = list.childNodes[0].nodeType;
val = list.childNodes[1].nodeType;
val = list.childNodes[2].nodeType;

// 3 - Element
// 1 - Text Node
// 8 - Comment

// Get the children element nodes

val = list.children; //ul
val = list.children[0]; // li
val = list.children[0].children[0]; // a

// first child

// val = list.firstChild;
val = list.firstElementChild;

// last Child
val = list.lastElementChild;

// Child count
val = list.childElementCount;

// Get the parent node
val = list.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;

// Get a next sibling

val = firstListItem.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;

// Get a previous sibling

val = lastListItem.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling;

console.log(val);