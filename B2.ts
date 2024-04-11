class Student {
    id: number;
    age: number;
    email: string;

    constructor(id: number, age: number, email: string) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
}

let students: Student[] = [];

let student1 = new Student(5, 23, "student1@gmail.com");
let student2 = new Student(9, 15, "student2@gmail.com");
let student3 = new Student(3, 10, "student3@gmail.com");

students.push(student1, student2, student3);

console.log("Danh sách sinh viên:");
for (let student of students) {
    console.log("ID:", student.id);
    console.log("Age:", student.age);
    console.log("Email:", student.email);
    console.log("---------------------");
}
