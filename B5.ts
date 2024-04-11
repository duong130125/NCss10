class Department {
    public readonly id: number;
    private name: string;
    private employee: string[];

    constructor(id: number, name: string, employee: string[]) {
        this.id = id;
        this.name = name;
        this.employee = employee;
    }

    describe(): void {
        console.log("Department ID: " + this.id);
        console.log("Department Name: " + this.name);
    }
}

let department = new Department(1, "HR", ["Dương", "Nam"]);
department.describe();
