

// document.getElementsByClassName();

// HTMLCOLLECTION is not an array

const items = document.getElementsByClassName("collection-item"); // HTMLCOLLECTION

// console.log(items[0]);
// console.log(items[1]);

// items[0].style.color = "blue";
// items[1].style.color = "blue";
// items[2].style.color = "blue";
// items[3].style.color = "blue";
// items[4].style.color = "blue";

// console.log(Array.isArray(items));

// HTMLCOLLECTION.forEach(function(li){
//     console.log(li);
// })

// for(let i = 0; i < items.length; i++){
//     items[i].style.color = "blue";
// }

// Convert the HTMLcollection to array

// let lists = Array.from(items);

// lists.forEach(function(li){
//     li.style.color = "blue";
// })

const listItems = document.querySelectorAll(".collection-item"); // NodeList

// console.log(Array.isArray(listItems));

listItems.forEach(function(li){
    li.style.color = "blue";
})
