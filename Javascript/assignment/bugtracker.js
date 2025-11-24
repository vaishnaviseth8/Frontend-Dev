function getBugs() {
  return new Promise((resolve, reject) => {
    const apiFailed = Math.random() < 0.3; // simulate failure

    setTimeout(() => {
      if (apiFailed) {
        reject("API failed to fetch bugs.");
      } else {
        resolve(["UI glitch", "API timeout", "Login failure"]);
      }
    }, 1000);
  });
}

getBugs()
  .then(bugs => {
    console.table(bugs);
  })
  .catch(err => {
    console.error("Error:", err);
  });
