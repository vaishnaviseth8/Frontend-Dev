let userName = "krishna";
let age = 25;
let isMember = true;
let hobbies = ["reading", "cycling", "music"];
let address = { city: "New York", zip: 10001 };
let score = null;
let note;

console.table([
  { Label: "userName", Value: userName, Type: typeof userName },
  { Label: "age", Value: age, Type: typeof age },
  { Label: "isMember", Value: isMember, Type: typeof isMember },
  { Label: "hobbies", Value: hobbies, Type: Array.isArray(hobbies) ? "array" : typeof hobbies },
  { Label: "address", Value: address, Type: typeof address },
  { Label: "score", Value: score, Type: typeof score },
  { Label: "note", Value: note, Type: typeof note }
]);
