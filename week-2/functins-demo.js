"use strict";
function add(a, b) {
    return a + b;
}
console.log("Addition:", add(10, 20));
function greet(name) {
    return "Hello " + name;
}
console.log(greet("Jessica"));
function welcome(name = "Student") {
    return "Welcome " + name;
}
console.log(welcome());
console.log(welcome("Jessica"));
function display(name, age) {
    console.log("Name:", name);
    console.log("Age:", age);
}
display("Jessica");
display("Jessica", 20);
function total(...numbers) {
    let sum = 0;
    for (let n of numbers) {
        sum += n;
    }
    return sum;
}
console.log("Total:", total(10, 20, 30));
console.log("Total:", total(5, 10, 15, 20));
