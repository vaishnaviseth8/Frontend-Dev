const menu = [
  { name: 'Burger', price: 5 },
  { name: 'Pizza', price: 8 },
  { name: 'Pasta', price: 7 },
  { name: 'Salad', price: 4 }
];

function calculateBill(orderItems) {
  const prices = orderItems.map(item => {
    const menuItem = menu.find(m => m.name.toLowerCase() === item.toLowerCase());
    if (!menuItem) throw new Error(`Invalid item ordered: ${item}`);
    return menuItem.price;
  });

  const total = prices.reduce((sum, price) => sum + price, 0);
  return total;
}

// Test cases
const orders = [
  ['Burger', 'Pizza'],
  ['Salad', 'Pasta', 'Pizza'],
  ['Burger', 'Ice Cream'] // Invalid item
];

orders.forEach(order => {
  try {
    const total = calculateBill(order);
    console.log(`Order: ${order.join(', ')} → Total: $${total}`);
  } catch (err) {
    console.error(`Order: ${order.join(', ')} → Error: ${err.message}`);
  }
});
