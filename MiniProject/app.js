const API_URL = "http://localhost:3000/students";


async function loadStudents() {
    const res = await fetch(API_URL);
    const students = await res.json();

    const tableBody = document.querySelector("#studentsTable tbody");
    tableBody.innerHTML = "";

    students.forEach(student => {
        const row = `
            <tr>
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.section}</td>
                <td>${student.marks}</td>
                <td>${student.result}</td>
                <td>
                    <button onclick="deleteStudent(${student.id})">Delete</button>
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}


async function addStudent() {
    const name = document.getElementById("name").value;
    const section = document.getElementById("section").value;
    const marks = document.getElementById("marks").value;
    const result = document.getElementById("result").value;

    const newStudent = { name, section, marks, result };

    await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newStudent)
    });

    loadStudents();
}


async function deleteStudent(id) {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    loadStudents();
}

loadStudents();
