function add(a: number, b: number): number {
    return a + b;
}

console.log("Addition:", add(10, 20));


function greet(name: string): string {
    return "Hello " + name;
}

console.log(greet("Jessica"));


function welcome(name: string = "Student"): string {
    return "Welcome " + name;
}

console.log(welcome());
console.log(welcome("Jessica"));


function display(name: string, age?: number): void {
    console.log("Name:", name);
    console.log("Age:", age);
}

display("Jessica");
display("Jessica", 20);


function total(...numbers: number[]): number {
    let sum: number = 0;

    for (let n of numbers) {
        sum += n;
    }

    return sum;
}

console.log("Total:", total(10, 20, 30));
console.log("Total:", total(5, 10, 15, 20));
