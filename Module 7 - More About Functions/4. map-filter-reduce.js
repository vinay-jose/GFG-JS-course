/**
 * map, filter, reduce
 */

let arr = [1, 2, 3, 4, 5];

let squares = arr.map((num) => num**2);
console.log(squares);

let filtered = arr.filter(num => num < 5);
console.log(filtered);

// let reduced = arr.reduce((sum = 0, curr) => sum + curr);
// let reduced = arr.reduce((sum, curr) => sum + curr, 0);
let reduced = arr.reduce((a, b) => a + b);
console.log(reduced);


