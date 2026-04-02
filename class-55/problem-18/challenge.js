// Author: Gab-Darlin <Gabbie-Darlin>

// Exercise 1 - Password Validation

console.log("*********************");
console.log("Example 1");

let passwordLength = 10;

let validation = passwordLength >= 8 ? "Strong password ": "Password too short"
console.log(validation);

// Exercise 2 - Free shipping
console.log("*********************");
console.log("Example 2");

let purchaseAmount = 120;

let shipping = purchaseAmount >= 100 ? "Free shipping": "Shipping cost applies"
console.log(shipping);

// Exercise 3 - Access Permission
console.log("*********************");
console.log("Example 3");

let hasPermission = false;

let access = hasPermission = false ? "Access denied": "Access granted"
console.log(access);

// Exercise 4 - Battery Status
console.log("*********************");
console.log("Example 4");

let batteryLevel = 15;

let status = batteryLevel <= 20 ? "Low battery": "Battery level OK"
console.log(status);

// Exercise 5 - Online Status
console.log("*********************");
console.log("Example 5");

let isOnline = false;

let connection = isOnline = false ? "User is offline": "User is online"
console.log(connection);

console.log("*********************");