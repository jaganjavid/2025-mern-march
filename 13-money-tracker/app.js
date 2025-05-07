
// ITEM CONTROLLER, UI CONTROLLER, STORAGE CONTROLLER, APP CONTROLLER


// STORAGE CONTROLLER

const StorageCtrl = (function(){

})();


// ITEM CONTROLLER

const ItemCtrl = (function(){

    // Data Structure
    
    const data = {
        items:[
            {id:0, name:"Clothes", money:1000},
            {id:1, name:"Food", money:2000},
            {id:2, name:"Car Service", money:5000},
        ]
    };

    return {
        getItem: function(){
            return data.items // Array
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
                        <i class="fa-solid fa-pencil"></i>
                    </a>
                </li>
            `
            });

            // Insert into the ul

            document.querySelector("#item-list").innerHTML = html;

        }
    }

})();

// APP CONTROLLER

const App = (function(){

    return {
        start:function(){

            const items = ItemCtrl.getItem();

            if(items.length > 0){

                UICtrl.populateItemList(items);

            }

        }
    }


})();

App.start();


