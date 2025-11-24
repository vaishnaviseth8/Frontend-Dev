const products = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 1000, stock: 5 },
  { id: 2, name: 'Phone', category: 'Electronics', price: 600, stock: 15 },
  { id: 3, name: 'Shirt', category: 'Clothing', price: 40, stock: 3 },
  { id: 4, name: 'Jeans', category: 'Clothing', price: 60, stock: 8 },
  { id: 5, name: 'Coffee Maker', category: 'Home Appliances', price: 80, stock: 2 },
  { id: 6, name: 'Blender', category: 'Home Appliances', price: 50, stock: 10 }
];

function getLowStockProducts(products, threshold = 5) {
  return products.filter(p => p.stock <= threshold);
}

function sortProductsByPrice(products) {
  return [...products].sort((a, b) => a.price - b.price);
}

function calculateTotalInventoryValue(products) {
  return products.reduce((total, p) => total + p.price * p.stock, 0);
}

function groupByCategory(products) {
  return products.reduce((acc, p) => {
    if (!acc[p.category]) acc[p.category] = [];
    acc[p.category].push(p);
    return acc;
  }, {});
}

console.log('Low Stock Products:', getLowStockProducts(products));
console.log('Products Sorted by Price:', sortProductsByPrice(products));
console.log('Total Inventory Value:', calculateTotalInventoryValue(products));
console.log('Products Grouped by Category:', groupByCategory(products));
