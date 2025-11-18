"use strict";

function outer() {
  debugger;
  console.log(count);
  var count = 5;

  const inner = () => {
    debugger;
    console.log(count);
    var count = 10;
  }

  inner();
}

outer();
