// Author: Gab-Darlin <Gabbie-Darlin>

// request user data
const age = parseFloat(prompt("Enter your age"));
const student = prompt("Are you are student? (yes or no)").toLowerCase();
const day = prompt("Enter the day of the week(Monday or Tuesday or wednesday or Thursday or Friday or Saturday or Sunday)").toLowerCase();
const ticketNumber = parseFloat(prompt("how many tickets do you want?"));

//let totalPrice;
// let price = 12;
let finalTicketPrice;
let discount;


// Data Validation

if(age <= 0) {
    alert("Age must be greater than 0");
}else if(age > 120){
    alert("Age must be less or equal to 120 years");
} else if (isNaN(age)) {
    alert("Age must be a number");
} else if (ticketNumber < 1) {
    alert("Invalid Input");
}else if (day !== "wednesday") {
    alert("No day discount");

    // Business Rules (logic)
} else if(age < 12) {
    if (day == "wednesday") {
        discount = 2;
        finalTicketPrice = 4 * ticketNumber;
        alert("Total Price: " + "$"+ finalTicketPrice);
    } else {
        finalTicketPrice = 6 * ticketNumber;
        alert("Total Price: " +"$"+ finalTicketPrice);
    }

} else if (age >= 12 && age <= 25) {
    if(student = "yes") {
        if (day == "wednesday") {
            discount = 5;
            finalTicketPrice = 7 * ticketNumber;
            alert("Total Price: " + "$"+ finalTicketPrice);
        }
    } else if (day == "wednesday") {
        discount = 2;
        finalTicketPrice = 10 * ticketNumber;
        alert("Total Price: " +"$"+ finalTicketPrice);
    }
} else if(age >= 65) {
    if(day == "wednesday") {
        discount = 2;
        finalTicketPrice = 5 * ticketNumber;
    } else {
        finalTicketPrice = 7 * ticketNumber;
        alert("Total Price: " + "$"+ finalTicketPrice);
    }
} else if (age > 25 && age < 65) {
    if(day == "wednesday"){
        discount = 2;
        finalTicketPrice = 10 * ticketNumber;
        alert("Total Price: " + "$"+ finalTicketPrice);
    } else {
        finalTicketPrice = 12 * ticketNumber;
        alert("Total Price: " + "$"+ finalTicketPrice);
    }
alert("Total Price: " +"$"+ finalTicketPrice);
}
