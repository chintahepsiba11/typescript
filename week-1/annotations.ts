// Variable Annotation
let studentName: string = "Hema";

// Array Annotation
let subjects: string[] = ["Maths", "Physics", "Chemistry"];

// Function Annotation
function display(name: string, subs: string[]): void {
    console.log("Student Name:", name);
    console.log("Subjects:", subs);
}

// Function Call
display(studentName, subjects);