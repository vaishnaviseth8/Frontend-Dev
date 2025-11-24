function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.applyDiscount = function(percent) {
  return this.price * (1 - percent / 100);
};

const product1 = new Product('Laptop', 1000);
const product2 = new Product('Phone', 600);
const product3 = new Product('Headphones', 150);

console.log(`${product1.name} original: $${product1.price}, after 10% discount: $${product1.applyDiscount(10)}`);
console.log(`${product2.name} original: $${product2.price}, after 20% discount: $${product2.applyDiscount(20)}`);
console.log(`${product3.name} original: $${product3.price}, after 15% discount: $${product3.applyDiscount(15)}`);
