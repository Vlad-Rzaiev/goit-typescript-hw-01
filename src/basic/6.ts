console.log("Task 6");
console.log("------------------------------------------------");

interface User {
  name: string;
  age: number;
  email: string;
  address?: {
    city: string;
    country: string;
  };
}

//АБО
// interface Address {
//   city: string;
//   country: string;
// }

// interface User {
//   name: string;
//   age: number;
//   email: string;
//   address?: Address
// }

const mango: User = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
  address: {
    city: "New York",
    country: "USA",
  },
};

console.log(mango);

const poly: User = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
};

console.log(poly);

console.log("------------------------------------------------");
