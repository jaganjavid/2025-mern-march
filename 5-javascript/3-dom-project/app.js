

// Define a UI Vars

const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#search");


// Load all event listerners

function loadEventListerners(){

    // Add task event
    form.addEventListener("submit", addTask);

    // Clear task lists
    clearBtn.addEventListener("click", clearTask);

    // Remove task list
    taskList.addEventListener("click", removeTask);

}

loadEventListerners();


function addTask(e){
   
    e.preventDefault();

    // Validate 

    if(taskInput.value === ""){
        alert("Please fill the field");
    }else{
      
        // Create element
        const li = document.createElement("li");

        // Add class
        li.className = "collection-item";

        // Add a inner text
        li.innerText = taskInput.value;

        // Create a new link element 
        const link = document.createElement("a");

        // Add class
        link.className = "delete-item secondary-content";

        // Add a icon into link
        link.innerHTML = `<i class="fa fa-remove"></i>`;
        
        // Add a link to li
        li.appendChild(link);

        // Add a li to ul
        taskList.appendChild(li);

        taskInput.value = "";
        
    }

}

// Remove Task
function removeTask(e){
   
    // if(e.target.parentElement.className === "delete-item secondary-content"){
    //     if(confirm("Are you sure?")){
    //         e.target.parentElement.parentElement.remove();
    //     }
    // }

    // console.log(e.target.parentElement.classList);

    if(e.target.parentElement.classList.contains("delete-item")){
        if(confirm("Are you sure?")){
            e.target.parentElement.parentElement.remove();
        }
    }

}

// Clear Tasks

function clearTask(){

    // taskList.innerHTML = "";

    const listitems = Array.from(taskList.children);

    listitems.forEach(function(element){
        element.remove();
    })

}

// function test(e){
//     console.log(e);
// }

// test();