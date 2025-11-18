const cart = [
  { item: "Laptop", category: "electronics", price: 45000 },
  { item: "Shoes", category: "fashion", price: 2500 },
  { item: "Book", category: "education", price: 600 }
];

let discountedCart = cart.map(p => {
  let price = p.price;
  if (p.category === "electronics") price *= 0.9;
  if (p.category === "fashion") price *= 0.95;
  return price;
});

let total = discountedCart.reduce((a, b) => a + b, 0);

if (total > 50000) total *= 0.95;

console.log("Final Total:", total.toFixed(2));
