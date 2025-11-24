function design(cb) {
  setTimeout(() => {
    console.log("Design complete");
    cb();
  }, 1000);
}

function build(cb) {
  setTimeout(() => {
    console.log("Build complete");
    cb();
  }, 1000);
}

function test(cb) {
  setTimeout(() => {
    console.log("Test complete");
    cb();
  }, 1000);
}

function deploy(cb) {
  setTimeout(() => {
    console.log("Deploy complete");
    cb();
  }, 1000);
}

function celebrate(cb) {
  setTimeout(() => {
    console.log("🎉 Celebrate!");
    cb();
  }, 1000);
}


design(() => {
  build(() => {
    test(() => {
      deploy(() => {
        celebrate(() => {
          console.log("Pipeline finished.");
        });
      });
    });
  });
});
