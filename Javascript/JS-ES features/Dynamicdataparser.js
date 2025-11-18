const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumbers = [];
const invalidNumbers = [];

function toBoolean(value) {
  if (value === "true") return true;
  if (value === "false") return false;
  return Boolean(value);
}

console.log("=== DATA PARSE REPORT ===\n");

apiData.forEach((item, index) => {
  const numVal = Number(item);
  const boolVal = toBoolean(item);
  const strVal = String(item);

  console.log(`Item #${index + 1}:`, item);

  if (!isNaN(numVal) && item !== " ") {
    validNumbers.push(numVal);
    console.log(`  Number: ${numVal} ✔ VALID`);
  } else {
    invalidNumbers.push(item);
    console.log(`  Number: NaN ✖ INVALID`);
  }

  console.log(`  Boolean: ${boolVal}`);
  console.log(`  String: "${strVal}"\n`);
});

console.log("=== SUMMARY ===");
console.log("Valid Numeric Data:", validNumbers);
console.log("Invalid Numeric Data:", invalidNumbers);
