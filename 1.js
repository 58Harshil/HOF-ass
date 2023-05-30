// Input string
var input = "Hello, World!";

// Delay function
function delayReverseString(str) {
  setTimeout(function() {
    var reversedString = str.split('').reverse().join('');
    console.log(reversedString);
  }, 2000);
}

// Call the delay function with the input string
delayReverseString(input);
