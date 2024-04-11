"use strict";
class Department {
    constructor(id, name, employee) {
        this.id = id;
        this.name = name;
        this.employee = employee;
    }
    describe() {
        console.log("Department ID: " + this.id);
        console.log("Department Name: " + this.name);
    }
}
let department = new Department(1, "HR", ["Dương", "Nam"]);
department.describe();
