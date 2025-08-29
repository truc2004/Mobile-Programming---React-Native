"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = exports.Product2 = void 0;
class Product2 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
exports.Product2 = Product2;
class Order {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    calculateTotal() {
        return this.products.reduce((total, product) => total + product.price, 0);
    }
}
exports.Order = Order;
