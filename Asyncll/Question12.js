function timer(duration, onComplete) {
  setTimeout(() => {
    const message = `Timer of ${duration} ms finished`;
    onComplete(message);
  }, duration);
}

// Example usage:
const completionCallback = (message) => {
  console.log(message);
};

console.log("Timer started...");
timer(2000, completionCallback); // Starts a 2-second timer