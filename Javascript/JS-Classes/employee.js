class Employee {
  constructor(id, name, department, salary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = salary;
  }

  getAnnualSalary() {
    return this.salary * 12;
  }

  applyBonus(percent) {
    this.salary += (this.salary * percent) / 100;
  }
}

const employees = [
  new Employee(1, "Alice", "HR", 30000),
  new Employee(2, "Bob", "IT", 45000),
  new Employee(3, "Charlie", "Finance", 40000),
  new Employee(4, "David", "Marketing", 35000),
  new Employee(5, "Eva", "Design", 38000)
];

employees.forEach(emp => {
  console.log(`${emp.name} Annual Salary: ${emp.getAnnualSalary()}`);
});

const totalAnnualPayout = employees.reduce((total, emp) => {
  return total + emp.getAnnualSalary();
}, 0);

console.log("Total Annual Payout:", totalAnnualPayout);
