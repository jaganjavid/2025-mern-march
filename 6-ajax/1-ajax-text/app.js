

document.querySelector("#btn").addEventListener("click", loadData);


function loadData(){

    // Create an xhr object

    const xhr = new XMLHttpRequest();


    console.log(xhr);

    // Open

    xhr.open("GET", "data.txt", true);

    xhr.onload = function(){

        if(this.status === 200){

            document.querySelector("#output").innerText = this.responseText;
            
        }else{
            document.querySelector("#output").innerText = `${this.status} Not Found`;
        }

    }


    xhr.send();


}