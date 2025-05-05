

const github = new Github();

const ui = new UI();


const submitButton = document.querySelector("#submit-button");

submitButton.addEventListener("click", (e) => {

    // Get the user input

    let userText = document.querySelector("#searchUser").value;

   
    if(userText === ""){
        alert("Please fill the filed");
    }else{

        github.getUser(userText)
        .then(data => ui.showProfile(data))
        .catch(err => console.log(err))

    }

    document.querySelector("#searchUser").value = "";


})


document.querySelector("#searchUser").addEventListener("input", (e) => {
    ui.clearProfile();
})