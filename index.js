const readline = require("readline");
const Cart = require("./models/Cart");
const Customer = require("./models/Customer");
const checkout = require("./utils/checkout");
const products = require("./data/products");

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const customer = new Customer("ali", 1000);
const cart = new Cart();

console.log("Welcome to Fawry Shop ...");
console.log("Available products:");
Object.entries(products).forEach(([productKey, product]) => {
    console.log(`- ${productKey}: ${product.name} - ${product.price}$ (Stock: ${product.quantity})`);
});
console.log("Commands: add, remove, edit, show, checkout, deposit, balance, exit | ex: add cheese 2");

rl.setPrompt(">>> ");
rl.prompt();

rl.on("line", (line) => {
    const args = line.trim().split(" ");
    const command = args[0];

    if (command === "add") {
        const productKey = args[1];
        const quantity = parseInt(args[2]);
        const product = products[productKey];

        if (!product) {
            console.log(`Product '${productKey}' not found.`);
        } else {
            try {
                cart.add(product, quantity);
                console.log(`Added ${quantity} ${product.name} in Cart`);
            } catch (error) {
                console.log(`${error.message}`);
            }
        }
    } else if (command === "remove") {
        const productKey = args[1];
        try {
            cart.remove(productKey);
            console.log(`Removed ${productKey} from Cart`);
        } catch (error) {
            console.log(`${error.message}`);
        }
    } else if (command === "edit") {
        const productKey = args[1];
        const newQuantity = parseInt(args[2]);
        try {
            cart.edit(productKey, newQuantity);
            console.log(`Updated ${productKey} quantity to ${newQuantity}`);
        } catch (error) {
            console.log(`${error.message}`);
        }
    } else if (command === "show") {
        if (cart.isEmpty()) {
            console.log("Cart is empty.");
        } else {
            console.log("Cart items:");
            cart.getItems().forEach(({ product, quantity }) => {
                console.log(`- ${quantity}x ${product.name} (${product.price * quantity}$)`);
            });
        }
    } else if (command === "checkout") {
        try {
            checkout(customer, cart);
            rl.close();
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }

    } else if (command === "deposit") {
        const amount = parseFloat(args[1]);
        if (isNaN(amount) || amount <= 0) {
            console.log("Please enter a valid positive amount to deposit.");
        } else {
            customer.balance += amount;
            console.log(`Deposited ${amount}. New balance: ${customer.balance}`);
        }
        
    } else if (command === "balance") {
        console.log(`Your current balance is: ${customer.balance}`);
    }

    else if (command === "exit") {
        console.log("Thank You!");
        rl.close();
    } else {
        console.log("Unknown command. Available: remove, edit, show, checkout, deposit, balance, exit");
    }

    rl.prompt();
});
