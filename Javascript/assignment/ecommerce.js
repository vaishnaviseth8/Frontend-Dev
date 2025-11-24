
async function fetchProductsAsync() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const products = await res.json();

    console.log("=== Async/Await Version ===");
    products.forEach(p => {
      console.log("Title:", p.title);
      console.log("Price: $" + p.price);
      console.log("Image:", p.image);
      console.log("---------------");
    });

  } catch (err) {
    console.error("Error (async):", err);
  }
}


function fetchProductsThen() {
  fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(products => {
      console.log("=== .then() Version ===");
      products.forEach(p => {
        console.log("Title:", p.title);
        console.log("Price: $" + p.price);
        console.log("Image:", p.image);
        console.log("---------------");
      });
    })
    .catch(err => console.error("Error (then):", err));
}

// Run both
fetchProductsAsync();
fetchProductsThen();

