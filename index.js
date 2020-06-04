// Write your solution here!

// First, we're going to create four arrays of pets. Define 4 const called: append, prepend, removeLast and removeFirst, and set all to an initial value of ["Milo", "Otis", "Garfield"]. These are the arrays that we'll work with for each exercise.

// const pets = [ 'Milo', 'Otis', 'Garfield', 'Odie' ];

const append = ["Milo", "Otis", "Garfield"];
// ["Milo", "Otis", "Garfield"]
const prepend = ["Milo", "Otis", "Garfield"];



const removeLast = ["Milo", "Otis", "Garfield"];

const removeFirst = ["Milo", "Otis", "Garfield"];

// const pets = [];

append.push("Odie");
prepend.unshift("Odie")
// append.unshift("Milo");
removeLast.pop();
removeFirst.shift();