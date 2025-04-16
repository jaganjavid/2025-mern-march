

// Book contructor

function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}


// UI

function UI(){
    // Add,
    // clear,
    // delete,
    // alert
}


// Event Listen for submit

document.querySelector("#book-form").addEventListener("click", function(e){

    e.preventDefault();

    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const isbn = document.querySelector("#ISBN").value;

    if(title === "" || author === "" || isbn === ""){
        // alert(123);
    }else{
        const book = new Book(title, author, isbn);

        console.log(book);
    
    }

    

})