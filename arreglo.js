function arrayOfMultiples(number, length) {
    let multiples = [];
    for (let i = 1; i <= length; i++) {
      multiples.push(number * i);
    }
    return multiples;
  }
  
  let number = parseInt(prompt("Enter a number:"));
  let length = parseInt(prompt("Enter the length:"));
  
  console.log(arrayOfMultiples(number, length));