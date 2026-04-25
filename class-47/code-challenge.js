// Author: Gab-Darlin <GitHub>

//Variable for age
var age = parseFloat(prompt("Enter your age:"));

if (age <= 12) {
    //this is a child
    alert("Eligible for Child Discount");
} else if (age >= 13 && age <= 59) {
    //this person will purchase a regular ticket
    alert("Eligible for a Regular Ticket");
}else if (age >= 60) {
    //This person is a senior citizen
    alert("Eligible for Senior Discount");
}else {
    alert("Invalid input. Try again..");
}


/*
    ---------------------
    Desktop test
    ---------------------
    age = 12        => Eligible for Child Discount
    age = 45        => Eligible for a Regular Ticket
    age = 60        => Eligible for Senior Discount
    ---------------------
*/