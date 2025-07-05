const shipping = {
    ship(items) {
        console.log("----- Shipping ------- ");
        let totalWeight = 0;

        items.forEach(({ product, quantity }) => {
            const itemWeight = product.getWeight() * quantity;

            console.log(`${quantity}x ${product.getName()} ${(itemWeight * 1000).toFixed(0)}g`);
            
            totalWeight += itemWeight;
        });

        console.log(`Total Package weight ${totalWeight.toFixed(1)}kg`);
    },
};

module.exports = shipping;
