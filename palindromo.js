function isPalindrome(input) {
    let cleanedInput = input
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '');
  
    let reversedInput = cleanedInput.split('').reverse().join('');
  
    return cleanedInput === reversedInput;
  }
  
  let userInput = prompt("Enter a word or sentence:");
  if (isPalindrome(userInput)) {
    console.log("The input is a palindrome.");
  } else {
    console.log("The input is not a palindrome.");
  }
  