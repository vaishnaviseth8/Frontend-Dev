function loadProfile() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.3 ? reject("Profile Failed") : resolve("Profile Loaded");
    }, 2000);
  });
}

function loadPosts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.3 ? reject("Posts Failed") : resolve("Posts Loaded");
    }, 1500);
  });
}

function loadMessages() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.3 ? reject("Messages Failed") : resolve("Messages Loaded");
    }, 1000);
  });
}

const start = Date.now();

Promise.allSettled([loadProfile(), loadPosts(), loadMessages()])
  .then(results => {
    console.log("=== Module Results ===");

    results.forEach((res, i) => {
      const name = ["Profile", "Posts", "Messages"][i];
      if (res.status === "fulfilled") {
        console.log(`${name}: ✔ Success → ${res.value}`);
      } else {
        console.log(`${name}: ✖ Failure → ${res.reason}`);
      }
    });

    const totalTime = (Date.now() - start) / 1000;
    console.log(`Total time taken: ${totalTime}s`);
  });
