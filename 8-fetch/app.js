
document.querySelector("#btn-1").addEventListener("click", getText);
document.querySelector("#btn-2").addEventListener("click", getJson);
document.querySelector("#btn-3").addEventListener("click", getApi);


function getText(){
    fetch("text.txt")
    .then(response => response.text())
    .then(data => document.querySelector("#output").innerText = data)
    .catch(err => console.log("something went worng"))
}

function getJson(){
    fetch("posts.json")
    .then(response => response.json())
    .then(data => {
      
        let output = "";

        data.forEach(post => {
            output += `<li>${post.title}</li>`
        })

        document.querySelector("#output").innerHTML = output;

    }).catch(err => console.log(err));
}


function getApi(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
      
        let output = "";

        data.forEach(post => {
            output += `<li>${post.title}</li>`
        })

        document.querySelector("#output").innerHTML = output;

    }).catch(err => console.log(err));
}



