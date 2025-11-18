"use strict";

const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];

const cleanData = [];
const errors = [];

for (let i = 0; i < rawData.length; i++) {
  try {
    debugger;
    const entry = JSON.parse(rawData[i]);
    if (!entry.user || entry.age == null) {
      throw new Error("Missing required keys");
    }
    entry.age = Number(entry.age);
    if (isNaN(entry.age)) throw new Error("Invalid age value");
    if (entry.age >= 18) cleanData.push(entry);
  } catch (err) {
    errors.push({ line: i + 1, raw: rawData[i], error: err.message });
  }
}

console.log("Clean Data:", cleanData);
console.log("Errors:", errors);
