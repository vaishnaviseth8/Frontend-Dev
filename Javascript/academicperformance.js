let marks = [78, 85, 92, 88, 80];

let total = marks.reduce((sum, mark) => sum + mark, 0);
let average = total / marks.length;
let percentage = (total / (marks.length * 100)) * 100;

if (marks.some(mark => mark < 35)) {
  console.log("Detained");
} else if (percentage >= 85) {
  console.log("Promoted with Distinction");
} else if (percentage >= 50) {
  console.log("Promoted");
} else {
  console.log("Detained");
}

console.log(`Average: ${average.toFixed(2)} | Percentage: ${percentage.toFixed(2)}%`);
