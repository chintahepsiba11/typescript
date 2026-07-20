// any type
let data: any = "Hello TypeScript";
console.log("any:", data);

data = 100;
console.log("any after change:", data);

// unknown type
let value: unknown = "TypeScript";

if (typeof value === "string") {
    console.log("unknown:", value.toUpperCase());
}

// void type
function displayMessage(msg: string): void {
    console.log("Message:", msg);
}

displayMessage("Welcome to TypeScript");