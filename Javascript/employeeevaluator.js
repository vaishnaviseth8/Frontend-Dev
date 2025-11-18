const departments = [
  ["HR", 72],
  ["Finance", 88],
  ["Tech", 95],
  ["Support", 63]
];

for (let dept of departments) {
    let name = dept[0];
    let score = dept[1];
    let rating = "";

    if (score >= 90) {
        rating = "Excellent";
    } else if (score >= 75 && score <= 89) {
        rating = "Good";
    } else if (score >= 60 && score <= 74) {
        rating = "Average";
    } else {
        rating = "Needs Improvement";
    }

    console.log(`${name}: ${rating}`);
}
