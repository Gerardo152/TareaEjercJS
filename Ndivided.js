function divideIntoHalves(number) {
    let half = number / 2;
    return [half, half];
}

// Pedir al usuario un número
let userInput = prompt("Please enter a number:");

// Convertir la entrada del usuario a un número
let number = parseFloat(userInput);

// Validar que la entrada es un número válido
if (isNaN(number)) {
    console.log("Error: Please enter a valid number.");
} else {
    // Dividir el número en mitades
    let result = divideIntoHalves(number);
    console.log(`The halves of ${number} are:`, result);
}