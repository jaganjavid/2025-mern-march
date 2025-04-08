

const taskInput = document.querySelector("#task");

// Key Down
// taskInput.addEventListener("keydown", runEvent);

// Key up
// taskInput.addEventListener("keyup", runEvent); // ***

// Key press
// taskInput.addEventListener("keypress", runEvent);

// Focus
// taskInput.addEventListener("focus", runEvent);

// Blur
// taskInput.addEventListener("blur", runEvent);

// Cut
// taskInput.addEventListener("cut", runEvent);

// Cut
taskInput.addEventListener("copy", runEvent);


// Paste
taskInput.addEventListener("paste", runEvent);




function runEvent(event){
  console.log(event.type);
  console.log(event.target.value);
}
