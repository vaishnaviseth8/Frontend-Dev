let bonus = 5000;

function calculateSalary() {
    let salary = 40000;
    let isPermanent = true;

    if (isPermanent) {
        salary += bonus;
    }

    console.log("Total salary inside function:", salary);

    isPermanent = false;
    console.log("Local isPermanent changed to:", isPermanent);
}

calculateSalary();
console.log("Global bonus remains:", bonus);
