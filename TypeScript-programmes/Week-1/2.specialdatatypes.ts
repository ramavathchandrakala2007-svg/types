let productData: any = 501;
productData = "Laptop";
productData = true;

let productInput: unknown = "Gaming Laptop";

if (typeof productInput === "string") {
    console.log("Product Name Length:", productInput.length);
}

function displayProductStatus(status: string): void {
    console.log("STATUS:", status);
}

displayProductStatus("Product details loaded successfully!");
