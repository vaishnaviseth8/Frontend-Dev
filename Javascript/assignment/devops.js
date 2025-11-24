function deploy(serverName, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) {
        reject(`${serverName} ❌ Deployment failed`);
      } else {
        resolve(`${serverName} ✅ Deployment finished in ${delay / 1000}s`);
      }
    }, delay);
  });
}

const serverA = deploy("Server A", 2000);
const serverB = deploy("Server B", 3000);

Promise.all([serverA, serverB])
  .then(results => {
    console.log("Deployment completed for all servers");
    results.forEach(r => console.log("•", r));
  })
  .catch(error => {
    console.log("🚨 One of the deployments failed (Promise.all)");
    console.log(error);
  });

Promise.race([serverA, serverB])
  .then(result => {
    console.log("Fastest response:", result);
  })
  .catch(error => {
    console.log("Fastest response: ERROR");
    console.log(error);
  });
