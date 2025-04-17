console.log("Task 4");
console.log("------------------------------------------------");

function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error("Custom Error");
}

showMessage("Hello TypeScript!");
console.log(calc(5, 3));
// customError();

console.log("------------------------------------------------");
