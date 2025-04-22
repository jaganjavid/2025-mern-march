

document.querySelector("#button-1").addEventListener("click", getCustomer);



function getCustomer(){


    // Create a xhr
    const xhr = new XMLHttpRequest();

    // Open
    xhr.open("GET", "customer.json", true);

    // Load

    xhr.onload = function(){

        if(this.status === 200){

            const customer = JSON.parse(this.responseText);


           const output = `
            <ul>
                <li>ID : ${customer.id}</li>
                <li>Name : ${customer.name}</li>
                <li>Company : ${customer.company}</li>
                <li>Phone : ${customer.phone}</li>
            </ul>
           `;

           document.querySelector("#customer").innerHTML = output;


        }



    }

    xhr.send();


}