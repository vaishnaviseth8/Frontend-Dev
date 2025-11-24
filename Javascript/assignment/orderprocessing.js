// Submit order: 50% chance of failure
function submitOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.5
        ? resolve("Order submitted!")
        : reject("Order failed");
    }, 500);
  });
}

// Retry logic: try up to 3 times
async function processOrder() {
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const result = await submitOrder();
      console.log(`Attempt ${attempt}: Success → ${result}`);
      return; 
    } catch (err) {
      console.log(`Attempt ${attempt}: Failed → ${err}`);
    }
  }

  throw "Order could not be processed";
}

// Execute with graceful handling
(async () => {
  try {
    await processOrder();
    console.log("Order completed!");
  } catch (err) {
    console.log("Final Error:", err);
  }
})();
