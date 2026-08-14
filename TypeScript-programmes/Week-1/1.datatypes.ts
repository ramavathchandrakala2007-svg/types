let employeeName: string = "Chandrakala";
let employeeAge: number = 25;
let isWorking: boolean = true;
console.log("Data Type of Employee Name is -->", typeof employeeName);
console.log("Data Type of Employee Age is -->", typeof employeeAge);
console.log("Data Type of isWorking is -->", typeof isWorking);
function displayEmployeeDetails(
    name: string,
    age: number,
    working: boolean
): void {
    console.log(`Employee Name: ${name}`);
    console.log(`Employee Age: ${age}`);
    console.log(`Working: ${working}`);
}
displayEmployeeDetails(employeeName, employeeAge, isWorking);
