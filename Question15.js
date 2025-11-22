const username = "Alice";
const course = "JavaScript Fundamentals";
console.log(`Hello, ${username}, welcome to the ${course} course!`);
// 
const name = "Sam";
const age = 21;
const student = {
  greet() {
    console.log("Hello");
  }
};
// 
console.log(getFullName("John", "Doe")); // Output: John Doe
const getFullName = (first, last) => `${first} ${last}`;