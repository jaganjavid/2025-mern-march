

// Define a UI Vars

const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#search");


// Load all event listerners

function loadEventListerners(){

    // DOM Load event
    document.addEventListener("DOMContentLoaded", getTasks);

    // Add task event
    form.addEventListener("submit", addTask);

    // Clear task lists
    clearBtn.addEventListener("click", clearTask);

    // Remove task list
    taskList.addEventListener("click", removeTask);

    // Filter task event
    filter.addEventListener("keyup", filterTasks);

}

loadEventListerners();


function getTasks(){

    let tasks;

    if(localStorage.getItem("tasks") === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    tasks.forEach(function(task){

         // Create element
         const li = document.createElement("li");

         // Add class
         li.className = "collection-item";
 
         // Add a inner text
         li.innerText = task;
 
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
         
    })

}

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
        
        // Store in LS
        storeTaskInLocalStorage(taskInput.value);

        taskInput.value = "";
        
    }

}


function storeTaskInLocalStorage(inputValue){

    let tasks;

    if(localStorage.getItem("tasks") === null){
        tasks = [];   
        console.log("STEP-1");
    }else{
        tasks = JSON.parse(localStorage.getItem("tasks"));
        console.log("STEP-2");
    }

    tasks.push(inputValue);

    localStorage.setItem("tasks", JSON.stringify(tasks));


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

        removeTaskFromLs(e.target.parentElement.parentElement)
    }

}

function removeTaskFromLs(taskElement){
    
    let tasks;

    if(localStorage.getItem("tasks") === null){
        tasks = [];   
    }else{
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    tasks.forEach(function(task, index){
        
        if(taskElement.innerText === task){
           
            tasks.splice(index, 1);

        }

    })

    localStorage.setItem("tasks", JSON.stringify(tasks));

}

// Clear Tasks

function clearTask(){

    // taskList.innerHTML = "";

    const listitems = Array.from(taskList.children);

    listitems.forEach(function(element){
        element.remove();
    })

    clearFromLs();

}


function clearFromLs(){
    localStorage.removeItem("tasks");
}

function filterTasks(e){
 
    const text = e.target.value.toLowerCase();

    document.querySelectorAll(".collection-item").forEach(function(task){

        const item = task.firstChild.textContent;

        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = "block"
        }else{
            task.style.display = "none"
        }


    })

}


// const arr = ["One", "Two", "Three"];


// console.log(arr.indexOf("osaoodjoi"));

// arr.splice(1,1,"2");

// console.log(arr);

