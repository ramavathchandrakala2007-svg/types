function getProduct(name: string): string {
    return "Product Name: " + name;
}
const getPrice = (price: number): string => {
    return "Price: " + price;
};
const displayProduct = (name: string, price: number): void => {
    console.log(getProduct(name));
    console.log(getPrice(price));
};
console.log(getProduct("Laptop"));
console.log(getPrice(55000));
displayProduct("Mobile Phone", 25000);
displayProduct("Headphones", 3000);
