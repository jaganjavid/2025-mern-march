

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


class Storage{

    getBooks(){

        let books;

        if(localStorage.getItem("books") === null){
            books = [];
        }else{
            books = JSON.parse(localStorage.getItem("books"));
        }

        return books;

    }

    addBooks(book){

        // Get a books array
      
        const books = this.getBooks();

        // Add book to array

        books.push(book);

        // Set in to the local storage
        localStorage.setItem("books", JSON.stringify(books));


    }

    displayBook(){

        const books = this.getBooks();

        const ui = new UI();

        books.forEach(function(book){
            ui.addBookToList(book)
        })

    }


    deleteBook(isbn){

      const books = this.getBooks();

      books.forEach(function(book, index){

        if(book.isbn === isbn){
            books.splice(index, 1);
        }

      })

      localStorage.setItem("books", JSON.stringify(books));


    }

    clearBooks(){

        localStorage.removeItem("books");

    }




}


const storage = new Storage();


document.addEventListener("DOMContentLoaded", storage.displayBook());



// Event Listen for submit

document.querySelector("#book-form").addEventListener("submit", function(e){

    e.preventDefault();

    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const isbn = document.querySelector("#ISBN").value;

    const ui = new UI();
    const book = new Book(title, author, isbn);
    const storage = new Storage();

    if(title === "" || author === "" || isbn === ""){
        ui.showAlert("Please fill the fields", "alert-danger");
    }else{


        let bookExist = false;

        const books = document.querySelectorAll("#book-list tr");

        for(const bookRow of books){

            const existingTitle = bookRow.querySelector("td:nth-child(1)").innerText;
            const existingIsbn = bookRow.querySelector("td:nth-child(3)").innerText;

            if(existingTitle === title || existingIsbn === isbn){
                bookExist = true;

                break;
            }

        }

        if(bookExist){
            // Alert
            ui.showAlert("Book with same name or isbn already exist", "alert-danger");
        }else{

            // Add book to list
            ui.addBookToList(book);

            // Add to the storage
            storage.addBooks(book);

            // Alert
            ui.showAlert("Book added succfully", "alert-success");

            // clearfields
            ui.clearField();

        }


    }
    
})


// Delete event listener

document.querySelector("#book-list").addEventListener("click", function(e){

    if(e.target.parentElement.className === "delete"){


        const ui = new UI();

        const storage = new Storage();

        const isbn = e.target.parentElement.previousElementSibling.innerText;

        // Delete book 
        ui.deleteBook(e.target.parentElement);

        storage.deleteBook(isbn);
        

        ui.showAlert("Book deleted succfully", "alert-success");

    }

})


document.querySelector(".clear").addEventListener("click", function(e){

    const ui = new UI();

    const storage = new Storage();

    ui.clearTasks();

    storage.clearBooks();

    ui.showAlert("Book cleared succfully", "alert-success");

})