let numbers = [];

for (let i = 0; i < 10; i++) {
  let num = parseFloat(prompt(`Enter number ${i + 1}:`));
  numbers.push(num);
}

let maxNumber = Math.max(...numbers);

console.log(`The largest number is: ${maxNumber}`);
