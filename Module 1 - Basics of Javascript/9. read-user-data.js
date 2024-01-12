/**
 * Read data from user
 */

// const readlineSync = require("readline-sync");

// const userName = readlineSync.question("May I know your name? ");
// const userAge = readlineSync.question("May I know your age? ");

// console.log(`Welcome ${userName} to GFG`);

// const yearOfBirth = 2023 - Number(userAge);
// console.log(`You were born in the year ${yearOfBirth}`);

var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

rl.question('What is your age? ', (age) => {
    console.log(' Your age is: ' + age);
    // rl.close();
 });