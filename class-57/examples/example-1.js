// Author: Gab-Darlin <Gabbie-Darlin>

/*
const dayNumber = parseInt(prompt("Enter the day number: "));
let day = "";

// Classic if-else statement condition
if (dayNumber ===1 ) {
    day = "Monday";
} else if (dayNumber === 2) {
    day = "Tuesday";
}else if (dayNumber === 3) {
    day = "Wednesday";
}else if (dayNumber === 4) {
    day = "Thursday";
}else if (dayNumber === 5) {
    day = "Friday";
}else if (dayNumber === 6) {
    day = "Saturday";
}else if (dayNumber === 7) {
    day = "Sunday";
}else  {
    day = "Invalid input";
}

alert(" The day number: " +  dayNumber + " " + "It's equivalent to: " + day);
*/

const dayNumber = parseInt(prompt("Enter the day number: "));
let day = "";

switch (dayNumber) {
    case 1:
        day = "Monday";
        break;

     case 2:
        day = "Tuesday";
        break;
    
     case 3:
        day = "Wednesday";
        break;

     case 4:
        day = "Thursday";
        break;

     case 5:
        day = "Friday";
        break;

     case 6:
        day = "Saturday";
        break;
    
     case 7:
        day = "Sunday";
        break;

    default:
        day = "Invalid Input";
        break;
}

alert(" The day number: " +  dayNumber + " " + "It's equivalent to: " + day);

