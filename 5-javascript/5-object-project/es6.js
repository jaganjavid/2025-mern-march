

// Book constructor

class Book{

    constructor(title, author, isbn){

        this.title = title;
        this.author = author;
        this.isbn = isbn;

    }


}

class UI{

    // Add Book to list

    addBookToList(book){

        const list = document.querySelector("#book-list");

        // Create tr element
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td class="delete">
                <span class="btn btn-danger">X</span>
            </td>
        `;

        list.appendChild(row);


    }

    deleteBook(targetElement){

        if(targetElement.className === "delete"){
            targetElement.parentElement.remove();
        }
    }

    clearField(){

        document.querySelector("#title").value = "";
        document.querySelector("#author").value = "";
        document.querySelector("#ISBN").value = "";

    }

    showAlert(message, className){

        this.clearAlert();

        // Create a DIV Element

        const div = document.createElement("div");

        // Add class name

        div.className = `alert ${className}`;

        // Add a inner text
        div.innerText = message;

        document.querySelector(".show-alert").appendChild(div);

        setTimeout(function(){
            document.querySelector(".alert").remove();
            this.clearAlert();
        }, 3000);


    }

    clearTasks(){

       document.querySelector("#book-list").innerHTML = "";

    }

    clearAlert(){

        const currentAlert = document.querySelector(".alert");

        if(currentAlert){
            currentAlert.remove();
        }
 
    }


}

// Event Listen for submit

document.querySelector("#book-form").addEventListener("submit", function(e){

    e.preventDefault();

    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const isbn = document.querySelector("#ISBN").value;

    const ui = new UI();
    const book = new Book(title, author, isbn);

    if(title === "" || author === "" || isbn === ""){
        ui.showAlert("Please fill the fields", "alert-danger");
    }else{
        // Add book to list
        ui.addBookToList(book);

        // Alert
        ui.showAlert("Book added succfully", "alert-success");

        // clearfields
        ui.clearField();
    }
    
})


// Delete event listener

document.querySelector("#book-list").addEventListener("click", function(e){

    if(e.target.parentElement.className === "delete"){


        const ui = new UI();

        // Delete book 
        ui.deleteBook(e.target.parentElement);

        ui.showAlert("Book deleted succfully", "alert-success");

    }

})


document.querySelector(".clear").addEventListener("click", function(e){

    const ui = new UI();

    ui.clearTasks();

    ui.showAlert("Book cleared succfully", "alert-success");

})