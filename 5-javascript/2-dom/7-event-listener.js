

// document.querySelector(".clear-tasks").addEventListener("click", function(){
//     console.log("I got clicked");
// })


let count = 0;

document.querySelector(".clear-tasks").addEventListener("click", onClick);

document.getElementById("task-title").innerText = count;



function onClick(){

    count += 1;

    document.getElementById("task-title").innerText = count;

    // console.log("123");

    const body = document.querySelector("body");

    // body.classList.add("add-color");
    body.classList.toggle("add-color");
}