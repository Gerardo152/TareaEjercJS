x   let username = prompt("Please enter your username:");
let age = prompt("Please enter your age:");
age = parseInt(age);
let movies = prompt("Enter a list of your favorite movies, separated by commas:");
let favoriteMovies = movies.split(',').map(movie => movie.trim());

console.log(`Username: ${username}`);
console.log(`Age: ${age}`);
console.log("Favorite Movies:");
favoriteMovies.forEach(movie => {
  console.log(`The film "${movie}" is one of my favorites.`);
});







