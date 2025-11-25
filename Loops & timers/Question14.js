console.log("Begin");
console.log("End");
Promise.resolve().then(() => {
  console.log("Promise Task");
});
setTimeout(() => {
  console.log("Timeout Task");
}, 0);

Explanation:

"Begin" and "End" are logged first as synchronous code runs immediately.

The Promise's .then() callback (microtask) runs after the stack is clear, so "Promise Task" comes next.

setTimeout callback (macrotask) executes after all microtasks, so "Timeout Task" is last.