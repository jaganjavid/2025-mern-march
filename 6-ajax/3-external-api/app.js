
document.querySelector("#btn-1").addEventListener("click", getUsers);

function getUsers(){

    const xhr = new XMLHttpRequest();

    // Open
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

    // Load
    xhr.onload = function(){

        let output = "";

        if(this.status === 200){

          const users = JSON.parse(this.responseText);

          console.log(users);

          users.forEach(function(user){

            output += `
             <ul>
              <li>ID : ${user.id}</li>
              <li>Name : ${user.title}</li>
             </ul>
            `
          });

          document.querySelector("#users-output").innerHTML = output;

        }
    }

    xhr.send();
    


}