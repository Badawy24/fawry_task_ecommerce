class Cart {
    constructor() {
        this.items = [];
    }

    add(product, quantity) {
        if (quantity <= 0 || isNaN(quantity)) {
            throw new Error(`${product.name} Quantity Must be Positive number`);
        }

        if (quantity > product.quantity) {
            throw new Error(`${product.name} Not Enough Stock`);
        }

        if (product.isExpired()) {
            throw new Error(`Sorry ${product.name} is Expired!`);
        }

        this.items.push({ product, quantity });
    }

    remove(productKey) {
        const index = this.items.findIndex(({ product }) => productKey.toLowerCase() === product.name.toLowerCase());
        if (index === -1) {
            throw new Error(`Product '${productKey}' not found in cart`);
        }
        this.items.splice(index, 1);
    }
    
    edit(productKey, newQuantity) {
        if (newQuantity <= 0 || isNaN(newQuantity)) {
            throw new Error(`Quantity must be positive number for ${productKey}`);
        }
        const item = this.items.find(({ product }) => productKey.toLowerCase() === product.name.toLowerCase());
        if (!item) {
            throw new Error(`Product '${productKey}' not found in cart`);
        }
        if (newQuantity > item.product.quantity) {
            throw new Error(`Not enough stock for ${productKey}`);
        }
        item.quantity = newQuantity;
    }
    
    isEmpty() {
        return this.items.length === 0;
    }

    getItems() {
        return this.items;
    }
}

module.exports = Cart;
