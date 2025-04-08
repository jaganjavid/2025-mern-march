

// Remove element

const list = document.querySelector("li");

// list.remove();

// console.log(list);

// const lists = document.querySelectorAll("li");

// lists.forEach(function(list){
//   list.remove();
// })

// Class && Attr

const firstLi = document.querySelector("li:first-child");

const link = firstLi.children[0];


let val;


val = link.className;
val = link.classList; // DOMTOKENLIST


val.add("Javid");

val.forEach(function(cls){
    console.log(cls);
})

val.remove("test");

val.replace("Javid", "Jagan");


console.log(val);