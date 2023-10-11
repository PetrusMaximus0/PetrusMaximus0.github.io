if(document.readyState=='loading'){
    document.addEventListener('DOMContentLoaded', ready);
}else{
    ready();
}

function ready(){
    /*to do:
     IF NO ITEMS ARE ADDED DISPLAY NO ITEMS ADDED MESSAGE
     IF THE CURRENT ADDED IS ALREADY ADDED, INCREASE THE NUMBER\DONT ALLOW FOR ADDING AGAIN
     PASS THE CORRECT VALUES OF THE CART ITEM BASED ON THE ITEM BEING ADDED AS OPPOSED TO PRE CODED ONES
     */   

    //functions
    function updateCartTotal(){
        /*get all cart items*/    
    
        let cartItemContainer = document.querySelectorAll(".cart-item");
        let total = 0;
        let price = 0;
        let quantity = 0;
        cartItemContainer.forEach(item =>{
            //console.log(item);
            
            let priceElement = item.querySelector(".price");
            //console.log(priceElement);
            
            let quantityElement = item.querySelector(".quantity");
            //console.log(quantityElement);

            price = parseFloat(priceElement.innerText);
            //console.log(price);

            quantity = parseFloat(quantityElement.value);
            total= total + price*quantity;
            //console.log(total);
        })

        cartTotal = document.querySelector(".cart-total");
        //total = Math.round(total*100);
        cartTotal.innerText = total;
        console.log(total);

    }
    //
    function addItemToCart(nameOfItem ="missing name!", priceOfItem = "missing price!"){
        const cartItemContainer = document.querySelector('.item-container');
        if(cartItemContainer){
            //build cart-item
            const newItem = document.createElement('div');
            newItem.classList.add("cart-item", "flex", "gap-3.5", "justify-between", "items-center", "cart-item", "h-fit", "w-[100%]");
            
            //build name
            const name = document.createElement('div');
            name.classList.add("name");
            name.textContent = `Item: ${nameOfItem}`;

            //build label
            const label = document.createElement('label');
            label.for = "item-units";

            //build input
            const input = document.createElement('input');
            input.type = "number"; 
            input.value = "1";
            input.min = "1";
            input.id = "item-units";
            input.classList.add("quantity","h-fit","w-10");

            //build button
            const btn = document.createElement('button');
            btn.type= "button";
            btn.classList.add("remove-item", "border", "border-solid", "p-2.5");
            btn.textContent = "remove";
            
            //build price div
            const priceContainer = document.createElement('div');
            priceContainer.textContent = "Price: $";

            //build span price number
            const price = document.createElement('span');
            price.classList.add("price");
            price.textContent = priceOfItem;
            
            //add all components to newItem
            newItem.appendChild(name);
            newItem.appendChild(label);
            newItem.appendChild(input);
            newItem.appendChild(btn);
            priceContainer.appendChild(price);
            newItem.appendChild(priceContainer);
            
            //add newItem element to cart item container
            cartItemContainer.appendChild(newItem);
        }
    }
    //
    function addCartItemEventListeners(){
        const removeCartItemButtons = document.querySelectorAll(".remove-item");
        //console.log(removeCartItemButtons);
        removeCartItemButtons.forEach(button=>{
            button.addEventListener('click', (e)=>{
                e.target.parentElement.remove();
                updateCartTotal();
            })
        })
        const quantityInputs = document.querySelectorAll(".quantity");
        quantityInputs.forEach(input=>{
            input.addEventListener('change', (e)=>{
                console.log("changed!");
                updateCartTotal();
            })    
        })

    }
    //
    function getItemInCart(itemName){
        const itemContainer = document.querySelectorAll(".cart-item > .name");
        console.log(itemContainer);
        if(itemContainer!=null){
            let returnedItem = null;
            for (let i = 0; i<itemContainer.length; i++){
                console.log(`items "${itemContainer[i].textContent.replace("Item: ","")}" vs "${itemName}" `)
                if(itemContainer[i].textContent.replace("Item: ","") == itemName){
                    returnedItem = itemContainer[i].parentElement;
                    break;
                }
            }
            console.log(returnedItem);
            return returnedItem; 
        }

    } 
    /*EXECUTION*/
    const cartItemButtons = document.querySelectorAll(".add-item");

    cartItemButtons.forEach( button => {
        button.addEventListener('click', (e)=>{
            const productElement = e.target.parentElement.parentElement;
            const itemName = productElement.querySelector(".name").textContent;            
            const itemPrice = parseFloat(productElement.querySelector(".price").textContent.replace("$",""));
            //console.log(`Name: ${itemName} Price: ${itemPrice}`);
            //handle adding item vs increasing item quantity
            const itemInCart = getItemInCart(itemName);
            //console.log(itemInCart);
            if(itemInCart == null){
                //console.log("No item present, adding item to cart");
                addItemToCart(itemName, itemPrice);
                addCartItemEventListeners();

            }else{
                console.log("item is present, increasing quantity");
                const itemQuantityElement = itemInCart.querySelector(".quantity");
                itemQuantityElement.value = parseInt(itemQuantityElement.value) + 1;
                             
            }

            updateCartTotal();
        })
    })
    updateCartTotal();
}




        

