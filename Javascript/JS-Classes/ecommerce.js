class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  applyDiscount(percent) {
    const discountAmount = (this.price * percent) / 100;
    this.price -= discountAmount;
  }

  getDetails() {
    return `ID: ${this.id}, Name: ${this.name}, Price: ₹${this.price}, Category: ${this.category}`;
  }
}

const products = [
  new Product(1, "Laptop", 55000, "Electronics"),
  new Product(2, "Mobile Phone", 15000, "Electronics"),
  new Product(3, "Shoes", 900, "Fashion"),
  new Product(4, "Smartwatch", 2500, "Wearables"),
  new Product(5, "Backpack", 1200, "Accessories")
];

products.forEach(product => product.applyDiscount(10));

const expensiveProducts = products.filter(product => product.price > 1000);

expensiveProducts.forEach(product => {
  console.log(product.getDetails());
});
