
// ITEM CONTROLLER, UI CONTROLLER, STORAGE CONTROLLER, APP CONTROLLER

// STORAGE CONTROLLER

const StorageCtrl = (function(){

    return {

        storeItem:function(newItem){
            
            let items;

            // Check if any items in array

            if(localStorage.getItem("items") === null){
                items = [];
            } else{
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
        updateItemLs: function(updateItem){

            let items = JSON.parse(localStorage.getItem("items"));

            items.forEach(function(item, index){

                if(updateItem.id === item.id){
                    items.splice(index, 1,updateItem);
                }

            })

            localStorage.setItem("items", JSON.stringify(items));

        },
        deleteItemLs:function(id){
            
            let items = JSON.parse(localStorage.getItem("items"));

            items.forEach(function(item, index){

                if(id === item.id){
                    items.splice(index, 1);
                }

            })

            localStorage.setItem("items", JSON.stringify(items));

        },
        clearItemsLs:function(){
            localStorage.removeItem("items");
        }

    }


})()


// ITEM CONTROLLER
const ItemCtrl = (function () {

    // ITEM CONSTRUCTOR
    const Item = function (id, name, money) {
        this.id = id;
        this.name = name;
        this.money = money;
    }

    // Data Structure

    const data = {
        // items: [
        //     { id: 0, name: "Clothes", money: 3000 },
        //     { id: 1, name: "Food", money: 2000 },
        //     { id: 2, name: "Car Service", money: 10000 },
        // ],
        items:StorageCtrl.getItems(),
        totalMoney: 0,
        currentItem: null
    }

    return {
        getData: function () {
            return data;
        },
        getItems: function () {
            return data.items;
        },
        getTotalMoney: function () {
            let total = 0;

            if (data.items.length > 0) {

                data.items.forEach(function (item) {
                    total += item.money;

                    data.totalMoney = total;
                })

            } else {
                return data.totalMoney = 0;
            }

            return total;
        },
        addItem: function (name, money) {

            let ID;

            // Create a ID
            if (data.items.length > 0) {
                ID = data.items[data.items.length - 1].id + 1;
            } else {
                ID = 0;
            }

            money = parseInt(money);

            // Create a new ITEM
            newItem = new Item(ID, name, money);

            // Add to item array
            data.items.push(newItem);

            return newItem;

        },
        getItemByID: function (id) {

            let found = null;

            // Loop through the items
            data.items.forEach(function (item) {
                if (item.id === id) {
                    found = item;
                }
            });

            return found;

        },
        setCurrentItem: function (item) {
            data.currentItem = item;
        },
        getCurrentItem: function () {
            return data.currentItem;
        },
        clearAllItems: function () {
            return data.items = [];
        },
        deleteItem: function (id) {

            // Get IDS
            const ids = data.items.map(function (item) {
                return item.id;
            })

            // Get index
            const index = ids.indexOf(id);


            data.items.splice(index, 1);
        },
        updateItem: function (name, money) {

            money = Number(money);

            let found = null;

            data.items.forEach(function (item) {

                if (item.id === data.currentItem.id) {
                    item.name = name;
                    item.money = money;
                    found = item;
                }

            })

            return found;

        }
    }

})();


// UI CONTROLLER

const UICtrl = (function () {


    return {
        populateItemList: function (items) {

            let html = "";

            items.forEach(function (item) {
                html += `<li class="collection-item" id="item-${item.id}">
                            <strong>${item.name}</strong> :
                            <em>${item.money} RS</em>
                            <a href="#!" class="secondary-content">
                                 <i class="fa-solid fa-pencil edit-item"></i>
                            </a>
                        </li>
                        `
            });

            // Insert into the ul
            document.querySelector("#item-list").innerHTML = html;

        },
        addListItem: function (newItem) {

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
                <a href="#!" class="secondary-content">
                    <i class="fa-solid fa-pencil edit-item"></i>
                </a>
            `

            // append the li to ul
            document.querySelector("#item-list").appendChild(li);

        },
        showTotalMoney: function (total) {
            document.querySelector(".total-money").innerText = total;
        },
        clearEditState: function () {
            document.querySelector(".add-btn").style.display = "inline";
            document.querySelector(".update-btn").style.display = "none";
            document.querySelector(".delete-btn").style.display = "none";
            document.querySelector(".back-btn").style.display = "none";
        },
        showEditState: function () {
            document.querySelector(".add-btn").style.display = "none";
            document.querySelector(".update-btn").style.display = "inline";
            document.querySelector(".delete-btn").style.display = "inline";
            document.querySelector(".back-btn").style.display = "inline";
        },
        addItemToForm: function () {

            // const {name, money} = ItemCtrl.getCurrentItem();

            document.querySelector("#item-name").value = ItemCtrl.getCurrentItem().name;
            document.querySelector("#item-money").value = ItemCtrl.getCurrentItem().money;
        },
        getItemInput: function () {
            return {
                name: document.querySelector("#item-name").value,
                money: document.querySelector("#item-money").value
            }
        },
        clearInputState: function () {
            document.querySelector("#item-name").value = "";
            document.querySelector("#item-money").value = "";
        },
        clearItems: function () {

            const collection = document.querySelector("#item-list");

            collection.innerHTML = "";

        },
        updateListItem: function (item) {

            let listItems = document.querySelectorAll(".collection-item");

            listItems.forEach(function (listItem) {

                const itemID = listItem.getAttribute("id");

                if (itemID === `item-${item.id}`) {
                    document.querySelector(`#${itemID}`).innerHTML = `
                        <strong>${item.name}</strong> :
                        <em>${item.money} RS</em>
                        <a href="#!" class="secondary-content">
                            <i class="fa-solid fa-pencil edit-item"></i>
                        </a>
                    `
                }

            })

        },
        deleteListItem: function (id) {
            const itemID = `#item-${id}`;

            const item = document.querySelector(itemID);

            item.remove();
        }
    }

})();


// APP CONTROLLER

const App = (function () {



    const loadEventListeners = function () {

        // Add Item Event
        document.querySelector(".add-btn").addEventListener("click", itemAddSubmit);

        // Edit Icon click
        document.querySelector("#item-list").addEventListener("click", itemEditClick);

        // Clear Item event
        document.querySelector(".clear-btn").addEventListener("click", itemClearSubmit);

        // Update Item event
        document.querySelector(".update-btn").addEventListener("click", itemUpdateSubmit);

        // Delete Item event
        document.querySelector(".delete-btn").addEventListener("click", itemDeleteSubmit);

        // Item to back
        document.querySelector(".back-btn").addEventListener("click", backClick);



    }

    const itemAddSubmit = function (e) {

        e.preventDefault();

        // Get the input
        const input = UICtrl.getItemInput();

        // Validation
        if (input.value === "" || input.money === "") {
            alert("Please fill the fields")
        } else {

            // Add item to array
            const newItem = ItemCtrl.addItem(input.name, input.money);

            // Add item to UI
            UICtrl.addListItem(newItem);

            // Get the total money
            const totalMoney = ItemCtrl.getTotalMoney();

            // Storage to add
            StorageCtrl.storeItem(newItem);

            // Show total in ui
            UICtrl.showTotalMoney(totalMoney);

            // Clear a UI Input
            UICtrl.clearInputState();

        }


    }

    const itemEditClick = function (e) {

        if (e.target.classList.contains("edit-item")) {

            // Get the list id
            const listID = e.target.parentElement.parentElement.id;
            // const listID = e.target.closest("[id]").id;

            // Break into array
            const listArr = listID.split("-");

            // Get the ID number
            const id = parseInt(listArr[1]);

            // Get Item
            const itemToEdit = ItemCtrl.getItemByID(id);

            // Set current item
            ItemCtrl.setCurrentItem(itemToEdit);

            // Add item to form
            UICtrl.addItemToForm();

            // Show the button
            UICtrl.showEditState();

        }

    }

    const itemUpdateSubmit = function (e) {

        // Get the input item value
        const input = UICtrl.getItemInput();

        // Update item
        const updatedItem = ItemCtrl.updateItem(input.name, input.money);

        // Upadte in the ui
        UICtrl.updateListItem(updatedItem);

        // Update from LS
        StorageCtrl.updateItemLs(updatedItem);

        // Get the total money
        const totalMoney = ItemCtrl.getTotalMoney();

        // Show total in ui
        UICtrl.showTotalMoney(totalMoney);

        // Clear input state
        UICtrl.clearEditState();

        // Clear a UI Input
        UICtrl.clearInputState();


    }

    const itemDeleteSubmit = function (e) {

        // Get the current item

        const currentItem = ItemCtrl.getCurrentItem();

        // Delete from the data structure
        ItemCtrl.deleteItem(currentItem.id);

        // Delete from ui
        UICtrl.deleteListItem(currentItem.id);

        // Delete from ls
        StorageCtrl.deleteItemLs(currentItem.id)

        // Get the total money
        const totalMoney = ItemCtrl.getTotalMoney();

        // Show total in ui
        UICtrl.showTotalMoney(totalMoney);

        // Clear input state
        UICtrl.clearEditState();

        // Clear a UI Input
        UICtrl.clearInputState();

    }


    const itemClearSubmit = function (e) {

        // clear all from the data structure
        ItemCtrl.clearAllItems();

        // Clear All from ui
        UICtrl.clearItems();

        // Clear from ls
        StorageCtrl.clearItemsLs();

        // Get the total money
        const totalMoney = ItemCtrl.getTotalMoney();

        // Show total in ui
        UICtrl.showTotalMoney(totalMoney);

    }

    const backClick = function (e) {

        // Clear a UI Input
        UICtrl.clearInputState();

        // Clear input state
        UICtrl.clearEditState();


    }

    return {
        start: function () {

            // Clear the three btn
            UICtrl.clearEditState();

            const items = ItemCtrl.getItems();

            if (items.length > 0) {

                UICtrl.populateItemList(items);

                const totalMoney = ItemCtrl.getTotalMoney();

                UICtrl.showTotalMoney(totalMoney);

            }

            loadEventListeners();

        }
    }

})();

App.start();