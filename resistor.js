function sumResistance(resistances) {
    let total = resistances.reduce((sum, r) => sum + Math.abs(r), 0);
    return `${total} ohms`;
  }
  
  console.log(sumResistance([-1, 5, 6, 3])); // "15 ohms"
  console.log(sumResistance([14, 3.5, 6]));  // "23.5 ohms"
  console.log(sumResistance([8, 15, 100]));  // "123 ohms"
  