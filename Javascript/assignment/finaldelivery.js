
function randomDelay() {
  return 1000 + Math.random() * 1000;
}


function randomOutcome(successMsg, failMsg, resolve, reject) {
  Math.random() < 0.8 ? resolve(successMsg) : reject(failMsg);
}



function takeOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      randomOutcome("Step 1: Order taken", "Failed at: takeOrder", resolve, reject);
    }, randomDelay());
  });
}

function prepare() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      randomOutcome("Step 2: Food prepared", "Failed at: prepare", resolve, reject);
    }, randomDelay());
  });
}

function pack() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      randomOutcome("Step 3: Package ready", "Failed at: pack", resolve, reject);
    }, randomDelay());
  });
}

function dispatch() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      randomOutcome("Step 4: Out for delivery", "Failed at: dispatch", resolve, reject);
    }, randomDelay());
  });
}

function deliver() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      randomOutcome("Delivery completed!", "Failed at: deliver", resolve, reject);
    }, randomDelay());
  });
}



async function runPipeline() {
  console.log("Start Pipeline");

  try {
    

    const step1 = await takeOrder();
    console.log(step1);

    const step2 = await prepare();
    console.log(step2);

    const step3 = await pack();
    console.log(step3);

    const step4 = await dispatch();
    console.log(step4);

    const finalStep = await deliver();
    console.log(finalStep);

  } catch (error) {
 
    console.log("Pipeline failed!");
    console.log("Reason:", error);
  }
}


runPipeline();
