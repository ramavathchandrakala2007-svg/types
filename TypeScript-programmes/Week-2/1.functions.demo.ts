function displayStudent(name: string, marks: number): void {
    console.log("Student Name: " + name);
    console.log("Marks: " + marks);
}
function totalMarks(subjectMarks: number): number {
    return subjectMarks * 5;
}
function isPassed(marks: number): boolean {
    if (marks >= 40) {
        return true;
    } else {
        return false;
    }
}
displayStudent("Chandrakala", 75);
let total = totalMarks(75);
console.log("Total Marks: " + total);
if (isPassed(75)) {
    console.log("Student has passed the exam.");
} else {
    console.log("Student has failed the exam.");
}
