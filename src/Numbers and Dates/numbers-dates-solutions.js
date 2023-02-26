// Exercises  1: Convert 30px to number 30
const pixels = '30px';

console.log(Number.parseInt(pixels, 10));

// Exercises  2: Conver 2.5rem to number 2.5

const rems = '2.5rem';

console.log(Number.parseFloat(rems));

// Exercises  3: Check if is NAN

console.log(Number.isNaN('2'));

// Exercises  4: Console.log() Infinity by devide numbers in JS

console.log(10 / 0);

// Exercises  5: What is square of 25;

console.log(Math.sqrt(25));
// ===
console.log(25 ** (1 / 2));

// Exercises  6: Print random number between 0 and 20;

console.log(Math.trunc(Math.random() * 20) + 1);

// Exercises  7: Round the number 20.2 to 20;

const number = 20.2;

console.log(Math.floor(number));

// Exercises 8: Print what is the remainder for number 5 % 2;

console.log(5 % 2);

// Exercises 9: Check if the number 10 is even or odd

// 10 = 5 * 10;

const isEven = (n) => n % 2 === 0;

console.log(isEven(10));

// Exercises 10: Check if the number 7 is even or odd

// 7 = 3 * 2 + 1;

console.log(isEven(7));

// Exercises 11: What will be the result of 10_05 + 5.5;
console.log(10_05 + 5.5); // 1010.5

// Exercises 12: What will be the result of 0.2 + 0.1;
console.log(0.2 + 0.1); // 0.30000000000000004

// Exercises 13: Print the biggest integer number can JS can safely represent;
console.log(Number.MAX_SAFE_INTEGER);

// Exercises 14: Print Date now;
const now = new Date();
console.log(now);

// Exercises 15: Create a new Date - January 2030 22
const date = new Date(2030, 0, 22);
console.log(date);

// Exercises 16: What date will print out new Date(0);

console.log(new Date(0)); // Thu Jan 01 1970

// Exercises 17: Get only the year of the new Date();
const today = new Date();
console.log(today.getFullYear());

//  Exercises 18: Print out the hours:minutes: seconds now;
const time = new Date();

console.log(`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`);

// Exercises 19: Exercises 19: Print on which day you were born with a new Date();
const born = new Date(1992, 7, 22);
console.log(born);

// Exercises 20: Calculate how many days passed from this year;
const dateNow = new Date();
const dateStart = new Date(2023, 0, 1);
const convertToDays = 1000 * 60 * 60 * 24;
// 1000 - milliseconds to seconds
//  *60 - seconds to minutes
//  * 60 minutes to hours
//  * 24 - hours to days;

console.log(Math.round((dateNow - dateStart) / convertToDays));

// Exercises 21: Calculate how many days are left from this year
const endOfTheYear = new Date(2024, 0, 1);

console.log(Math.round((endOfTheYear - dateNow) / convertToDays));
