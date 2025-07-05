const Product = require("../models/Product");

const cheese = new
    Product(
        "cheese",
        100,
        5,
        {
            canExpired: true,
            canShipping: true,
            weight: 0.2
        });

const biscuits = new
    Product(
        "biscuits",
        150,
        2,
        {
            canExpired: true,
            canShipping: true,
            weight: 0.35
        });
const tv = new
    Product(
        "tv",
        1000,
        3,
        {
            canExpired: false,
            canShipping: true,
            weight: 10
        });

const scratchCard = new
    Product(
        "scratchcard",
        500,
        10
        , {
            canExpired: false,
            canShipping: false
        });
const
    milk = new
        Product(
            "milk",
            60,
            4,
            {
                canExpired:
                    true,
                canShipping: true,
                weight: 1,
                expired: true
            });

module.exports = { cheese, biscuits, tv, scratchCard, milk };
