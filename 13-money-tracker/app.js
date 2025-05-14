
// ITEM CONTROLLER, UI CONTROLLER, STORAGE CONTROLLER, APP CONTROLLER


// STORAGE CONTROLLER

const StorageCtrl = (function(){

})();


// ITEM CONTROLLER

const ItemCtrl = (function(){


    // ITEM CONSTRUCTOR

    const Item = function(id, name, money){
        this.id = id;
        this.name = name;
        this.money = money;
    }


    // Data Structure
    
    const data = {
        items:[
            {id:0, name:"Clothes", money:1000},
            {id:1, name:"Food", money:2000},
            {id:2, name:"Car Service", money:5000},
        ],
        totalMoney:0,
        currentItem:null
    };

    return {
        getItem: function(){
            return data.items // Array
        },
        getTotalMoney: function(){
            let total = 0;

            if(data.items.length > 0){

                data.items.forEach(function(item){
                    total += item.money;

                    data.totalMoney = total;
                })

            }else{
                return data.totalMoney = 0;
            }

            return total;
        },
        addItem:function(name, money){

            let ID;

            // Create a ID
            if(data.items.length > 0){
                ID = data.items[data.items.length - 1].id + 1;
            }else{
                ID = 0;
            }

            money = parseInt(money);

            // Create a new ITEM 

            newItem = new Item(ID, name, money);

            // console.log(newItem);

            // Add to item array

            data.items.push(newItem);

            return newItem;

        },
        getItemByID: function(id){

            let found = null;

            // Loop through the items
            data.items.forEach(function(item){
                
                if(item.id === id){
                   
                    found = item;
                }
            });

            return found;
            
        },
        setCurrentItem:function(item){
           data.currentItem = item;
        },
        getCurrentItem:function(){
            return data.currentItem;
        },
        deleteItem: function(id){

            // Get IDS
            const ids = data.items.map(function(item){
                return item.id;
            });

            // Get Index
            const index = ids.indexOf(id);

            data.items.splice(index, 1);

        },
        clearAllItems: function(){
            return data.items = [];
        }
    }

})();



// console.log(ItemCtrl);
// console.log(ItemCtrl.getItem());

// consolelog(data)

// console.log(ItemCtrl.getItem()[0].id)


// UI CONTROLLER

const UICtrl = (function(){


    return {
        populateItemList: function(items){
           
            let html = "";

            items.forEach(function(item){
                html += `
                <li class="collection-item" id=item-${item.id}>
                    <strong>${item.name}</strong> :
                    <em>${item.money} RS</em>
                    <a href="#" class="secondary-content">
                        <i class="fa-solid fa-pencil edit-item"></i>
                    </a>
                </li>
            `
            });

            // Insert into the ul

            document.querySelector("#item-list").innerHTML = html;

        },
        showTotalMoney: function(total){
            document.querySelector(".total-money").innerText = total;
        },
        getItemInput: function(){
            return {
                name: document.querySelector("#item-name").value,
                money: document.querySelector("#item-money").value
            }
        },
        addLitsItem: function(newItem){
            

            // Create a li element
            const li = document.createElement("li");

            // Add class to li
            li.className = "collection-item";

            // Add ID to li
            li.id = `item-${newItem.id}`;

            // Insert HTML
            li.innerHTML = `
            <strong>${newItem.name}</strong> :
                <em>${newItem.money} RS</em>
                <a href="#" class="secondary-content">
                <i class="fa-solid fa-pencil edit-item"></i>
            </a>
            `;

            // Append the li to ul

            document.querySelector("#item-list").appendChild(li);

        },
        clearInputState: function(){
            document.querySelector("#item-name").value = "";
            document.querySelector("#item-money").value = "";
        },
        clearEditState: function(){
            document.querySelector(".add-btn").style.display = "inline";
            document.querySelector(".update-btn").style.display = "none";
            document.querySelector(".delete-btn").style.display = "none";
            document.querySelector(".back-btn").style.display = "none";
        },
        showEditState: function(){
            document.querySelector(".add-btn").style.display = "none";
            document.querySelector(".update-btn").style.display = "inline";
            document.querySelector(".delete-btn").style.display = "inline";
            document.querySelector(".back-btn").style.display = "inline";
        },
        addItemToForm: function(){
            
            document.querySelector("#item-name").value = ItemCtrl.getCurrentItem().name;
            document.querySelector("#item-money").value = ItemCtrl.getCurrentItem().money;
        },
        deleteListItem:function(id){
           
            const itemId = `#item-${id}`;

            const item = document.querySelector(itemId);

            item.remove();

        },
        clearItems: function(){
            const collection = document.querySelector("#item-list");

            collection.innerHTML = "";
        }
    }

})();

// APP CONTROLLER

const App = (function(){



    const loadEventListeners = function(){

        // Add item Event
        document.querySelector(".add-btn").addEventListener("click", itemAddSubmit);

        // Edit icon click
        document.querySelector("#item-list").addEventListener("click", itemEditClick);

        // Delete Item Event
        document.querySelector(".delete-btn").addEventListener("click", itemDeleteSubmit);

        // Clear Item Event
        document.querySelector(".clear-btn").addEventListener("click", itemClearSubmit);

        // Item to back
        document.querySelector(".back-btn").addEventListener("click", backClick);


    }

    const itemAddSubmit = function(e){

        e.preventDefault();

        // Get the input value

        const input = UICtrl.getItemInput();

        // Validation

        if(input.name === "" || input.money === ""){
            alert("Please fill the fields");
        }else{

            // Add item to array
            const newItem = ItemCtrl.addItem(input.name, input.money);

            // Add iten to UI
            UICtrl.addLitsItem(newItem);

           // get the total money value
           const totalMoney = ItemCtrl.getTotalMoney();

          // Show total in ui
          UICtrl.showTotalMoney(totalMoney);

         // Clear a UI input
         UICtrl.clearInputState();

        }


    }

    const itemEditClick = function(e){

        if(e.target.classList.contains("edit-item")){

            // Show Edit Button
            UICtrl.showEditState();

            // Get tje list ID
            const listID = e.target.parentElement.parentElement.id;

            // Break into array

            const listArr = listID.split("-");

            // Get the ID Number

            const id = parseInt(listArr[1]);

            // Get Item
            const itemToEdit = ItemCtrl.getItemByID(id);

            // Set the current item
            ItemCtrl.setCurrentItem(itemToEdit);
            
            // Add item to form
            UICtrl.addItemToForm();
            

        }

    }

    const itemDeleteSubmit = function(e){

        e.preventDefault();

        // Get the current Item

        const currentItem = ItemCtrl.getCurrentItem();

        // Delete from the data structure
        ItemCtrl.deleteItem(currentItem.id);

        // Delete From UI
        UICtrl.deleteListItem(currentItem.id);

        // Get the TOtal money
        const totalMoney = ItemCtrl.getTotalMoney();

        // Show total in ui
        UICtrl.showTotalMoney(totalMoney);

        // Clear input state
        UICtrl.clearInputState();

        // Clear Edit State
        UICtrl.clearEditState();

    }

    const itemClearSubmit = function(e){

        // Clear all from the data structure

        ItemCtrl.clearAllItems();

        // Clear All from ui
        UICtrl.clearItems();

        // Get the TOtal money
        const totalMoney = ItemCtrl.getTotalMoney();

        // Show total in ui
        UICtrl.showTotalMoney(totalMoney);


    }

    const backClick = function(){

        // Clear a UI State
        UICtrl.clearInputState();


        // Clear input state
        UICtrl.clearEditState();

    }
    


    return {
        start:function(){

            // Clear the button

            UICtrl.clearEditState();

            const items = ItemCtrl.getItem();

            if(items.length > 0){

                UICtrl.populateItemList(items);

                const totalMoney = ItemCtrl.getTotalMoney();

                UICtrl.showTotalMoney(totalMoney);

            }

            loadEventListeners();

        }
    }


})();

App.start();




// const obj = {
//     a:"1",
//     b:"2",
//     c:"3"
// }

// console.log(obj.b);

// console.log(obj["a"]);

// const array = [1,2,3];

// array.forEach(function(item){
//     console.log(item);
// })


// const double = array.map(function(item){
//     return item * 2;
// })

// console.log(double);