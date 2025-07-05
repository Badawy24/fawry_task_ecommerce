const shipping = require("../services/shipping");

function checkout(customer, cart) {
    if (cart.isEmpty()) {
        throw new Error("Cart is empty!");
    }

    let subtotal = 0;
    let shippableItems = [];

    cart.getItems().forEach(({ product, quantity }) => {
        if (product.isExpired()) {
            throw new Error(`${product.name} is expired!`);
        }

        if (quantity > product.quantity) {
            throw new Error(`${product.name} out of stock!`);
        }

        subtotal += product.price * quantity;

        if (product.canShipping) {
            shippableItems.push({ product, quantity });
        }
    });

    const shippingFee = shippableItems.length > 0 ? 30 : 0;
    const totalAmount = subtotal + shippingFee;

    if (customer.balance < totalAmount) {
        throw new Error(`Insufficient balance! current balance is: ${customer.balance}`);
    }

    customer.balance -= totalAmount;

    cart.getItems().forEach(({ product, quantity }) => {
        product.quantity -= quantity;
    });

    if (shippableItems.length > 0) {
        shipping.ship(shippableItems);
    }

    console.log("** Checkout receipt **");
    cart.getItems().forEach(({ product, quantity }) => {
        console.log(`${quantity}x ${product.name} ${product.price * quantity}`);
    });
    console.log("----------------------");
    console.log(`Subtotal ${subtotal}`);
    console.log(`Shipping ${shippingFee}`);
    console.log(`Amount ${totalAmount}`);
    console.log(`Customer balance after payment ${customer.balance}`);
}

module.exports = checkout;
