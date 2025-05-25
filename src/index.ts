// src/index.ts

// Define an interface for a User
interface User {
  id: number;
  name: string;
  email?: string; // Optional property
}

// Function to greet a user
function greetUser(user: User): string {
  if (user.email) {
    return `Hello, ${user.name}! Your email is ${user.email}.`;
  } else {
    return `Hello, ${user.name}!`;
  }
}

// Create some user objects
const user1: User = {
  id: 1,
  name: "alice",
  email: "alice@example.com",
};

const user2: User = {
  id: 2,
  name: "Bob",
};

// Call the function and log the output
console.log(greetUser(user1));
console.log(greetUser(user2));

async function fetchData(): Promise<string> {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    })
  });
}

// Use the async function
fetchData().then((data) => {
  console.log(data);
});

// Demonstrate a class
class Greeter {
  constructor(public greeting: string) { }

  public greet(): string {
    return `Says: ${this.greeting}`;
  }
}

const greeter = new Greeter("Welcome to TypeScript!");
console.log(greeter.greet());

console.log("TypeScript boilerplate code running!");

console.log("Adding my own logging function here");
