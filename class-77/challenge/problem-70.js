/*
    Author: Gab-Darlin <Gabbie-Darlin>
   Solution: Delivery Cost Calculator
*/

/**
 * 
 * @param {number} distance 
 */
function calculateDeliveryCost(distance) {
    
    const baseFee = 5;
    const totalCost = baseFee + (distance * 2);

    return totalCost;
};

 const totalCost = calculateDeliveryCost(10);

 console.log(`\n****************************
    Total Cost = ${totalCost}
                ***************************
 `);

