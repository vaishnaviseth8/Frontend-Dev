class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }

  calculateAverage() {
    const total = this.marks.reduce((acc, curr) => acc + curr, 0);
    return total / this.marks.length;
  }

  getGrade() {
    const avg = this.calculateAverage();
    if (avg >= 90) return 'A';
    if (avg >= 75) return 'B';
    if (avg >= 50) return 'C';
    return 'F';
  }

  printResult() {
    console.log(`Student: ${this.name}`);
    console.log(`Marks: ${this.marks.join(', ')}`);
    console.log(`Average: ${this.calculateAverage().toFixed(2)}`);
    console.log(`Grade: ${this.getGrade()}`);
    console.log('----------------------');
  }
}

// Test for 3 students
const student1 = new Student('Alice', [95, 88, 92]);
const student2 = new Student('Bob', [70, 80, 65]);
const student3 = new Student('Charlie', [40, 55, 50]);

student1.printResult();
student2.printResult();
student3.printResult();
