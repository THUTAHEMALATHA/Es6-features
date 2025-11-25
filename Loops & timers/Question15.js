let seconds = prompt("Enter the number of seconds to count down:");
seconds = parseInt(seconds);

let intervalId;

function countdown() {
  if (seconds > 0) {
    console.log(seconds + " seconds remaining");
    seconds--;
  } else {
    clearInterval(intervalId);
    console.log("Countdown Complete!");
  }
}

intervalId = setInterval(countdown, 1000);

// Add event listener for key press in a browser environment
setTimeout(() => {
  console.log("Key detection active. Press 's' to stop.");
  document.addEventListener('keydown', function(event) {
    if (event.key === 's') {
      clearInterval(intervalId);
      console.log("Countdown stopped by user key press!");
    }
  });
}, 1);