class Employee {
    name: string;
    salary: number;

    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    }

    checkBonus(): string {
        if (this.salary >= 30000) {
            return "Eligible";
        } else {
            return "Not Eligible";
        }
    }

    displayDetails(): void {
        console.log("Employee Details");
        console.log("Name: " + this.name);
        console.log("Salary: " + this.salary);
        console.log("Bonus: " + this.checkBonus());
        console.log("----------------");
    }
}

const employee1 = new Employee("Rahul", 45000);
const employee2 = new Employee("Anita", 25000);

employee1.displayDetails();
employee2.displayDetails();

employee2.salary = 35000;

console.log("\nAfter Updating Salary:");
employee2.displayDetails();
