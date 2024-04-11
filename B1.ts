class Vehicle {
    name: string;
    year: number;
    company: string;

    constructor(name: string, year: number, company: string) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
}

// Tạo hai thực thể từ lớp Vehicle
let vehicle1 = new Vehicle("Car", 2024, "BMW");
let vehicle2 = new Vehicle("Bike", 2022, "Honda");

console.log(`Vehicle1: -Name:${vehicle1.name} -Year:${vehicle1.year} -Company:${vehicle1.company}`);

console.log(`Vehicle2: -Name:${vehicle2.name} -Year:${vehicle2.year} -Company:${vehicle2.company}`);

