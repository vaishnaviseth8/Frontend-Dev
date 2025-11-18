"use strict";

class InvalidOperationError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidOperationError";
  }
}

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;

function smartCalc(op, a, b) {
  let result;
  switch(op) {
    case "add":
      result = a + b;
      break;
    case "subtract":
      result = a - b;
      break;
    case "divide":
      if (b === 0) throw new Error("Division by zero is not allowed");
      result = a / b;
      break;
    case "power":
      result = a ** b;
      break;
    case "root":
      if (a < 0) throw new Error("Cannot take root of a negative number");
      result = Math.sqrt(a);
      break;
    default:
      throw new InvalidOperationError(`Operation "${op}" is not recognized`);
  }
  return result;
}

for (let op of operations) {
  try {
    const res = smartCalc(op, num1, num2);
    console.log(`Operation: ${op}\nNumbers: ${num1}, ${num2}\nResult: ${res}\n-------------------`);
  } catch (err) {
    console.log(`Operation: ${op}\nNumbers: ${num1}, ${num2}\nError: ${err.name} - ${err.message}\n-------------------`);
  }
}
