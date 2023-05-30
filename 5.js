// Function to check if the input matches the conditions
function checkURL(input) {
  var regex = /^(http:\/\/|https:\/\/)[a-zA-Z0-9#$%&'*+-.\/:=?@[\]^_`{|}~]+[.][a-zA-Z]+$/;

  if (regex.test(input)) {
    console.log("The input matches the conditions.");
  } else {
    console.log("The input does not match the conditions.");
  }
}

// Test cases
checkURL("http://www.example.com");
checkURL("https://www.example.com");
checkURL("http://example.com");
checkURL("https://example.com");
checkURL("ftp://www.example.com");
