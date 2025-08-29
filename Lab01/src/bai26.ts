export class Product2 {
    constructor(public name: string, public price: number) {
    
    }
}

export class Order {
    private products: Product2[] = []

    addProduct(product: Product2): void {
        this.products.push(product);
    }

    calculateTotal(): number {
        return this.products.reduce((total, product) => total + product.price, 0);
    }
}