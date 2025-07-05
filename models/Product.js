class Product {
    constructor(name, price, quantity, options = {}) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.canExpired = options.canExpired || false;
        this.canShipping = options.canShipping || false;
        this.weight = options.weight || 0;
        this.expired = options.expired || false;
    }

    isExpired() {
        return this.canExpired && this.expired;
    }

    getName() {
        return this.name;
    }

    getWeight() {
        return this.weight;
    }
}

module.exports = Product;
