function delay() {
  return new Promise(resolve =>
    setTimeout(resolve, 1000 + Math.random() * 1000)
  );
}

function boilWater() {
  return delay().then(() => {
    if (Math.random() < 0.2) throw new Error("Kettle malfunction!");
    console.log("Water boiled.");
  });
}

function brewCoffee() {
  return delay().then(() => {
    if (Math.random() < 0.2) throw new Error("Coffee machine jammed!");
    console.log("Coffee brewed.");
  });
}

function pourCoffee() {
  return delay().then(() => {
    if (Math.random() < 0.2) throw new Error("Spilled while pouring!");
    console.log("Coffee poured into the cup.");
  });
}

boilWater()
  .then(brewCoffee)
  .then(pourCoffee)
  .then(() => {
    console.log("Coffee ready for the team!");
  })
  .catch(err => {
    console.error("Coffee process failed:", err.message);
  });
