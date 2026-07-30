// Author: Gab-Darlin <Gabbie-Darlin>

// Select HTML elements
const clickButton = document.getElementById("clickButton");
const counterText = document.getElementById("counter");
const message = document.getElementById("message");

// Counter variable
let counter = 0;

// Event listener
clickButton.addEventListener("click", function() {

    // Increase the counter
    counter++;

    // Update counter on webpage
    counterText.textContent = counter;

    // Update message
    message.textContent = "Button clicked successfully!"
});