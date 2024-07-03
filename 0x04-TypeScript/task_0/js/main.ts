interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
};

const firstStudent: Student = {
    firstName: "Ahmed",
    lastName: "Fathi",
    age: 5,
    location: "New York",
};

const secondStudent: Student  = {
    firstName: "Mike",
    lastName: "Miky",
    age: 6,
    location: "Cairo",
};

const students : Student[] = [firstStudent, secondStudent];

/*
Vanilla JavaScript
 */

const table = document.createElement("table");
const hRow = document.createElement("tr");
for (const key of Object.keys(firstStudent)) {
    const hCell = document.createElement("th");
    hCell.textContent = key;
    hRow.appendChild(hCell);
}

students.map(student => {
    for (const val of Object.values(student)) {
        const row = document.createElement("tr");
        const cell = document.createElement("td");
        cell.textContent = val;
        row.appendChild(cell);
        table.appendChild(row);
    }
})

document.body.appendChild(table);