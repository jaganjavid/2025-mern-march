

// <li class="collection-item">
//     List Item 1
//     <a href="#" class="delete-item secondary-content">
//         <i class="fa fa-remove"></i>
//     </a>
// </li>

const ul = document.querySelector(".collection");

// create element

const li = document.createElement("li");

// Add class
li.className = "collection-item";

// Add ID
// li.id = "test";

// Add Attribute
// li.setAttribute("title", "New Item");

// Add a text
li.innerText = "Hello world";

// Create a new link elment
const link = document.createElement("a");

// Add a class to link
link.className = "delete-item secondary-content";

// Add a icon to link
link.innerHTML = `<i class="fa fa-remove"></i>`;

// Append link to li
li.appendChild(link);

// Append li to ul
ul.appendChild(li);


// console.log(link);
console.log(li);