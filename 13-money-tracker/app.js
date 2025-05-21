
// ITEM CONTROLLER, UI CONTROLLER, STORAGE CONTROLLER, APP CONTROLLER


// STORAGE CONTROLLER

const StorageCtrl = (function(){

    return{
        storeItem:function(newItem){
           
            let items;

            // Check if any items in array

            if(localStorage.getItem("items") === null){
                items = [];
            }else{
                // Get the existing data from ls
                items = JSON.parse(localStorage.getItem("items"));
            }

            items.push(newItem);

            localStorage.setItem("items", JSON.stringify(items));


        },
        getItems: function(){
            let items;

            // Check if any items in array

            if(localStorage.getItem("items") === null){
                items = [];
            }else{
                // Get the existing data from ls
                items = JSON.parse(localStorage.getItem("items"));
            }

            return items;
        },
        updateItemLs: function(updatedItem){

            // Get the existing data from ls
            let items = JSON.parse(localStorage.getItem("items"));

            items.forEach(function(item, index){

                if(updatedItem.id === item.id){
                    
                    items.splice(index, 1, updatedItem)

                }
                

            })

            localStorage.setItem("items", JSON.stringify(items));

        },
        deleteFromLs:function(id){

            let items = JSON.parse(localStorage.getItem("items"));

            items.forEach(function(item, index){
                if(id === item.id){
                    items.splice(index, 1)
                }
            })

            localStorage.setItem("items", JSON.stringify(items));
        },
        clearItemsLs:function(){
            localStorage.removeItem("items");
        }
    }

})();


// API CONTROLLER

const ApiCtrl = (function(){

    const API_URL = "https://682b3632d29df7a95be285b8.mockapi.io/items";

    return {
        async fetchItems(){
            const res = await fetch(API_URL);

            return await res.json();
        },
        async addItem(item){
            const res = await fetch(API_URL, {
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(item)
            });

            return await res.json();
        },
        async deleteItem(id){
            const res = await fetch(`${API_URL}/${id}`, {
                method:"DELETE"
            })
        },
        async clearAllItems(){
            const items = await this.fetchItems();

            
            await Promise.all(items.map(item => this.deleteItem(item.id)));
        }
    }

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
        // items:[
        //     {id:0, name:"Clothes", money:1000},
        //     {id:1, name:"Food", money:2000},
        //     {id:2, name:"Car Service", money:5000},
        // ],
        items:[],
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
        addItem:function(newItem){

            newItem = new Item(newItem.id, newItem.name, newItem.money);

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
        setItems: function(items){
           data.items = items;
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
        },
        updateItem: function(name, money){

            money = Number(money);

            let found = null;

            data.items.forEach(function(item){

                if(item.id === data.currentItem.id){
                    item.name = name,
                    item.money = money,
                    found = item
                }

            })

            return found;

        }
    }

})();


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
        },
        updateListItem: function(item){
            
            let listItems = document.querySelectorAll(".collection-item");

            listItems.forEach(function(listItem){

                const itemID = listItem.id;

                if(itemID === `item-${item.id}`){
                    document.querySelector(`#${itemID}`).innerHTML = `
                    <strong>${item.name}</strong> :
                        <em>${item.money} RS</em>
                        <a href="#" class="secondary-content">
                        <i class="fa-solid fa-pencil edit-item"></i>
                    </a>
                    `;
                }

            })

            // const itemId = `#item-${item.id}`;

            // const itemList = document.querySelector(itemId);

            // itemList.innerHTML = `
            // <strong>${item.name}</strong> :
            //     <em>${item.money} RS</em>
            //     <a href="#" class="secondary-content">
            //     <i class="fa-solid fa-pencil edit-item"></i>
            // </a>
            // `;


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

        // Update item event
        document.querySelector(".update-btn").addEventListener("click", itemUpdateSubmit);

        // Delete Item Event
        document.querySelector(".delete-btn").addEventListener("click", itemDeleteSubmit);

        // Clear Item Event
        document.querySelector(".clear-btn").addEventListener("click", itemClearSubmit);

        // Item to back
        document.querySelector(".back-btn").addEventListener("click", backClick);


    }

    const itemAddSubmit = async function(e){

        e.preventDefault();

        // Get the input value

        const input = UICtrl.getItemInput();

        // Validation

        if(input.name === "" || input.money === ""){
            alert("Please fill the fields");
        }else{

            // Add item to array
            const newItem = await ApiCtrl.addItem({name:input.name, money:parseInt(input.money)});


            ItemCtrl.addItem(newItem);

            // Add iten to UI
            UICtrl.addLitsItem(newItem);

            // Storage to add
            StorageCtrl.storeItem(newItem);

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

            const id = listArr[1];

            // Get Item
            const itemToEdit = ItemCtrl.getItemByID(id);

            // Set the current item
            ItemCtrl.setCurrentItem(itemToEdit);
            
            // Add item to form
            UICtrl.addItemToForm();
            

        }

    }

    const itemUpdateSubmit = function(e){

        e.preventDefault();

        // Get the input
        const input = UICtrl.getItemInput();

        // Update item
        const updatedItem = ItemCtrl.updateItem(input.name, input.money);

        // Update in the UI
        UICtrl.updateListItem(updatedItem);

        // Update to ls
        StorageCtrl.updateItemLs(updatedItem);

        // Get the TOtal money
        const totalMoney = ItemCtrl.getTotalMoney();

        // Show total in ui
        UICtrl.showTotalMoney(totalMoney);

        // Clear input state
        UICtrl.clearInputState();

        // Clear Edit State
        UICtrl.clearEditState();


    }

    const itemDeleteSubmit = async function(e){

        e.preventDefault();

        // Get the current Item

        const currentItem = ItemCtrl.getCurrentItem();

        // DELETE FROM API
        await ApiCtrl.deleteItem(currentItem.id)

        // Delete from the data structure
        ItemCtrl.deleteItem(currentItem.id);

        // Delete From UI
        UICtrl.deleteListItem(currentItem.id);

        // Delete from ls
        StorageCtrl.deleteFromLs(currentItem.id);

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

        // FROM API CLEAR

        ApiCtrl.clearAllItems();

        // Clear all from the data structure

        ItemCtrl.clearAllItems();

        // Clear All from ui
        UICtrl.clearItems();

        // Clear all from storage
        StorageCtrl.clearItemsLs();

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
        start:async function(){

            // Clear the button

            UICtrl.clearEditState();

            const items = await ApiCtrl.fetchItems();

            ItemCtrl.setItems(items);

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



const obj = {
    a:'123',
    b:function(){
        console.log(this)

        function test(){
            console.log(this)
        }

        test();
    }
}

obj.b();