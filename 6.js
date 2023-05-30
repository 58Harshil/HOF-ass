// Function to check if the input is a valid LinkedIn profile URL
function validateLinkedInURL(input) {
  var regex = /^https:\/\/www.linkedin.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

  if (regex.test(input)) {
    console.log("Valid LinkedIn profile URL");
  } else {
    console.log("Invalid LinkedIn profile URL");
  }
}

// Test cases
validateLinkedInURL("https://www.linkedin.com/in/john-doe");
validateLinkedInURL("https://www.linkedin.com/in/john_doe123");
validateLinkedInURL("https://www.linkedin.com/in/john_doe_123");
validateLinkedInURL("https://www.linkedin.com/in/john_doe-123");
validateLinkedInURL("https://www.linkedin.com/in/johndoe12345");
validateLinkedInURL("https://www.linkedin.com/in/john!doe");
validateLinkedInURL("https://www.linkedin.com/in/john_doe_1234567890123456789012");
