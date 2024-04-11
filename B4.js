"use strict";
class Vehicles {
    constructor(name, year, company, id) {
        this.name = name;
        this.year = year;
        this.company = company;
        this.id = id;
    }
    printInfo() {
        console.log("Name: " + this.name);
        console.log("Year: " + this.year);
        console.log("Company: " + this.company);
        console.log("ID: " + this.id);
    }
}
let vehicle = new Vehicles("Car", 2024, "BMW", 1);
vehicle.printInfo();
