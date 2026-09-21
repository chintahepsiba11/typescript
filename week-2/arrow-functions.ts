const add = (a: number, b: number): number => {
    return a + b;
};

console.log("Addition:", add(10, 20));

const square = (n: number): number => {
    return n * n;
};

console.log("Square:", square(5));

const greet = (): string => {
    return "Hello";
};

console.log("Greeting:", greet());

const multiply = (a: number, b: number): number => a * b;

console.log("Multiplication:", multiply(5, 4));

const welcome = (name: string): string => {
    return "Welcome " + name;
};

console.log(welcome("Jessica"));

const isEven = (n: number): boolean => {
    return n % 2 === 0;
};

console.log("Is 10 even?", isEven(10));

const numbers: number[] = [1, 2, 3, 4, 5];

const squares: number[] = numbers.map((n: number): number => {
    return n * n;
});

console.log("Squares:", squares);