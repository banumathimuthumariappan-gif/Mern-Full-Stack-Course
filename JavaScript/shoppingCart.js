class ShoppingCart {
    constructor() {
        this.items = [];
        this.taxRate = 0.08;
        this.memberDiscount = 0.1;
        this.freeShippingThreshold = 50;
        this.shippingCost = 5.99;
    }

    addItem(name, price, quantity = 1) {
        // Expression: object creation
        let item = {
            name: name,
            price: price,
            quantity: quantity,
            total: price * quantity, 
        }

        this.items.push(item);

        // Logical operator with comparision
        if(quantity > 1) {
            console.log(`Added ${quantity} ${name} to cart`);
        } else {
            console.log(`Added ${name} to cart`);
        }
    }

    calculateTotal(isMember = false) {
        let subTotal = this.items.reduce((sum, item) => sum + item.total, 0);

        let discount = isMember? subTotal * this.memberDiscount : 0;
        let afterDiscount = subTotal - discount;

        let shipping = afterDiscount >= this.freeShippingThreshold ? 0 : this.shippingCost;
        let tax = afterDiscount * this.taxRate;
        let finalTotal = afterDiscount + tax + shipping;

        return {
            subTotal: subTotal.toFixed(2),
            discount: discount.toFixed(2),
            afterDiscount: afterDiscount.toFixed(2),
            tax: tax.toFixed(2),
            shipping: shipping.toFixed(2),
            total: finalTotal.toFixed(2)
        };
    }

    printReceipt(isMember = false) {
        console.log(" \n SHOPPING RECEIPT ");
        console.log("===========================");
        
        this.items.forEach( (item, index) => {
            console.log(`${index + 1}. ${item.name} -- $${item.price} X ${item.quantity} = $${item.total.toFixed(2)}`);    
        } );
        console.log("-----------------------------");
        
        let totals = this.calculateTotal(isMember);
        console.log(`Subtotal: $${totals.subTotal}`);

        if(parseFloat(totals.discount) > 0) {
            console.log(`Member Discount: -- $${totals.discount}`);
            console.log(`After Discount: $${totals.afterDiscount}`);
        }    

        console.log(`Tax: $${totals.tax}`);
        console.log(`Shipping: $${totals.shipping}`);
        console.log(`Total: $${totals.total}`);
    }
} // End of class

let cart = new ShoppingCart();
cart.addItem("Laptop", 999.99, 1);
cart.addItem("Mouse", 29.99, 2);
cart.addItem("Keyboard", 79.99, 1);

cart.printReceipt(true);


