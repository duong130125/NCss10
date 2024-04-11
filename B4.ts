class Vehicles {
    public name: string;     
    protected year: number;     
    private company: string; 
    readonly id: number;   
    constructor(name: string, year: number, company: string, id: number) {
        this.name = name;
        this.year = year;
        this.company = company;
        this.id = id;
    }
    
    printInfo(): void {
        console.log("Name: " + this.name);
        console.log("Year: " + this.year);
        console.log("Company: " + this.company);
        console.log("ID: " + this.id);
    }
}

let vehicle = new Vehicles("Car", 2024, "BMW", 1);
vehicle.printInfo();

