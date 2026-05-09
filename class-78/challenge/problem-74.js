/*
    Author: Gab-Darlin <Gabbie-Darlin>
    Solution: Rectangle Area Calculator
*/

/**
 * A function that calculates the area of a Rectangle
 * @param {number} width 
 * @param {number} height 
 * @returns number
 */
function calculateArea (width, height) {
    
    const area = width * height;
    return area;
}

//test 
const test1 = calculateArea (5, 7);
console.log(`
    ********************************
    Area: ${test1}    
    ********************************
`);

const test2 = calculateArea (12, 6);
console.log(`
    ********************************
    Area: ${test2}  
    ********************************  
`);

const test3 = calculateArea (5, 2);
console.log(`
    ********************************
    Area: ${test3}    
    ********************************
`);

const test4 = calculateArea (16, 7);
console.log(`
    ********************************
    Area: ${test4}    
    ********************************
`);

const test5 = calculateArea (11, 5);
console.log(`
    ********************************
    Area: ${test5}  
    ********************************  
`);