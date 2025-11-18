"use strict";

function generatePyramid(limit = 5) {
  for (let i = 1; i <= limit; i++) {
    debugger;
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row);
  }
}

generatePyramid();
let userLimit = 4;
generatePyramid(userLimit);

function generatePyramidVar(limit = 5) {
  for (var i = 1; i <= limit; i++) {
    var row = "";
    for (var j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row);
  }

  console.log("i =", i);
  console.log("j =", j);
}

generatePyramidVar(3);
