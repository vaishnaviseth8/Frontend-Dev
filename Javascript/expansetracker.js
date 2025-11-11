let expenses = [300, 150, 800, 200, 100];

let total = expenses[0] + expenses[1] + expenses[2] + expenses[3] + expenses[4];
let average = total / expenses.length;

total += total * 0.10;

console.log(`Total Expenses (with tax): $${total.toFixed(2)}`);
console.log(`Average Expense: $${average.toFixed(2)}`);
