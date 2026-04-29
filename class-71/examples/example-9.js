// Author: Gab-Darlin <Gabbie-Darlin>


const numbers = [
    12, 7.45, 98, 3.14, 56, 42.8, 19, 73.21, 5, 64.9,
    28, 91.33, 14, 8.6, 37, 60.12, 2, 77.5, 49, 11.09,
    83, 25.7, 6, 94.44, 31, 16.8, 70, 53.26, 9, 88.1
];

/*
Challenge:
1. How many numbers are less than 45.67?
2. How many numbers are greater than 59.98?
*/

let count = 0;
for (let i = 0; i < 45.67; i++) {
    if (numbers[i] < 45.67) {
        count++;
}
}
console.log(`There are ${count} numbers less than 45.67.`);

for (let i = 0; i > 59.98; i++) {
    if (numbers[i] > 59.98) {
        count++;
    } 
}
console.log(`There are ${count} numbers greater than 59.98.`);