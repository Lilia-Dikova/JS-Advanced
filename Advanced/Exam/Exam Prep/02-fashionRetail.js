class FashionRetailInventory {
    storehouse;
    location;
    productStock = [];

    constructor(storehouse, location) {
        this.storehouse = storehouse;
        this.location = location;
    }
    addProduct (productName, size, quantity, price) {
        let data = this.productStock.find((p) => p.productName == productName && p.size == size); 
             if (data) {
                data.quantity +=quantity;
            return `You added ${quantity} more pieces of product ${productName} size ${size}`
             }
             this.productStock.push ({
                productName, 
                size, 
                quantity, 
                price
            });
            return `The product ${productName}, size ${size} was successfully added to the inventory`
        }
    
    sendProduct (productName, size) {
        let data = this.productStock.find((p) => p.productName == productName && p.size == size); 
            if (!data) {
                 return `The product ${productName}, size ${size} is not in the inventory`
            }
        }
}



 const storeHouse = new FashionRetailInventory("East", "Milano");
 console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
 console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
 console.log(storeHouse.addProduct("Sweather", "M", 10, 25.0));
 console.log(storeHouse.addProduct("Sweather", "M", 10, 25.0));

  /*The product Shirt, size M was successfully added to the inventory
  The product T-Shirt, size M was successfully added to the inventory
  The product Sweather, size M was successfully added to the inventory
  You added 10 more pieces of product Sweather size M */