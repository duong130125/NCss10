class Employee {
    public name: string;
    protected company: string;
    private phone: number;
    constructor(name: string, company: string, phone: number) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    
    printInfo(): void {
        console.log(this.name);
        console.log(this.company);
        console.log(this.phone);
        
    }
}
let epl = new Employee("Dương", "Rikkeiacademy", 741852963);
epl.printInfo();
