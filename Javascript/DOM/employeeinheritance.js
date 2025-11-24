class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  work() {
    return `${this.name} is working in ${this.department}`;
  }
}

class Manager extends Employee {
  constructor(name, department) {
    super(name, department);
  }

  work() {
    return `${this.name} is managing the ${this.department} department`;
  }
}

const emp1 = new Employee('Alice', 'Sales');
const emp2 = new Employee('Bob', 'IT');
const mgr1 = new Manager('Carol', 'HR');
const mgr2 = new Manager('David', 'Finance');

console.log(emp1.work());
console.log(emp2.work());
console.log(mgr1.work());
console.log(mgr2.work());
