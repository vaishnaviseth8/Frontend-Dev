let str = "45.67";

let num = parseFloat(str);

if (isNaN(num)) {
    console.log(`${str} is not a valid number`);
} else {
    console.log(`${str} converted to number is ${num}`);
}
