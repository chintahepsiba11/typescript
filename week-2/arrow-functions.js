"use strict";
const add = (a, b) => {
    return a + b;
};
console.log("Addition:", add(10, 20));
const square = (n) => {
    return n * n;
};
console.log("Square:", square(5));
const greet = () => {
    return "Hello";
};
console.log("Greeting:", greet());
const multiply = (a, b) => a * b;
console.log("Multiplication:", multiply(5, 4));
const welcome = (name) => {
    return "Welcome " + name;
};
console.log(welcome("Jessica"));
const isEven = (n) => {
    return n % 2 === 0;
};
console.log("Is 10 even?", isEven(10));
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map((n) => {
    return n * n;
});
console.log("Squares:", squares);
