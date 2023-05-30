// Delay in milliseconds
var delay = 3000;

// Countdown function
function countdown(delay) {
  var remainingTime = delay / 1000;

  var intervalId = setInterval(function() {
    console.log("Time remaining: " + remainingTime + " seconds");
    remainingTime--;

    if (remainingTime < 0) {
      clearInterval(intervalId);
      generateRandomNumber();
    }
  }, 1000);
}

// Generate random number function
function generateRandomNumber() {
  var randomNumber = Math.floor(Math.random() * 100);
  console.log("Generated random number: " + randomNumber);
}

// Call the countdown function with the specified delay
countdown(delay);
