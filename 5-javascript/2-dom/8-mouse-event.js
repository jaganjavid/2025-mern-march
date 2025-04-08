

const clearBtn = document.querySelector(".clear-tasks");



// clearBtn.addEventListener("click", runEvent); // ***

// clearBtn.addEventListener("dblclick", runEvent); 

// clearBtn.addEventListener("mousedown", runEvent); 

// clearBtn.addEventListener("mouseup", runEvent);

// clearBtn.addEventListener("mouseenter", runEvent); 

clearBtn.addEventListener("mouseleave", runEvent); 





function runEvent(event){
    console.log(event.type);
}



