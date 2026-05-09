/*
    Author: Gab-Darlin <Gabbie-Darlin>
    Solution: Temperature Converter (Celsius to Fahrenheit)
*/

/**
 * A function that converts degree celsius Temperature to Fahrenheit
 * @param {number} celsius 
 * @returns number
 */
function convertToFahrenheit(celsius){

    const fahrenheit = (celsius * (9/5)) + 32;
    return fahrenheit;
}

// test 1
const test1 = convertToFahrenheit(0);

console.log(`
*****************************
Fahrenheit Temperature: ${test1.toFixed(2)}
*****************************
`);

// test 2
const test2 = convertToFahrenheit(37);

console.log(`
*****************************
Fahrenheit Temperature: ${test2.toFixed(2)}
*****************************
`);

// test 3
const test3 = convertToFahrenheit(100);

console.log(`
*****************************
Fahrenheit Temperature: ${test3.toFixed(2)}
*****************************
`);