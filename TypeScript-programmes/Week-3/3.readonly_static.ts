class Product {
    static storeName: string = "Smart Store";
    readonly productId: number;

    productName: string;

    constructor(id: number, name: string) {
        this.productId = id;
        this.productName = name;
    }

    display(): void {
        console.log("Product ID: " + this.productId);
        console.log("Product Name: " + this.productName);
    }
}

console.log(Product.storeName);

const product1 = new Product(201, "Laptop");
const product2 = new Product(202, "Mobile");

product1.display();
product2.display();
