let hospitalName: string = "City Care Hospital";
let totalDoctors: number = 50;
let isAvailable: boolean = true;

function getHospitalInfo(name: string, doctors: number): string {
    return `${name} has ${doctors} doctors.`;
}

let departments: string[] = [
    "Cardiology",
    "Neurology",
    "Pediatrics",
    "Orthopedics"
];

const summary: string = getHospitalInfo(hospitalName, totalDoctors);

console.log(summary);
console.log(`Departments: ${departments.join(", ")}`);
console.log(`Hospital Available: ${isAvailable ? "Yes" : "No"}`);
