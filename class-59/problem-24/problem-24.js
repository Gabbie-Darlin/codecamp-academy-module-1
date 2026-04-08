// Author: Gab-Darlin <Gabbie-Darlin>

// storing the rating variables
const rating = "PG-13";

// declaring global variable
let message;


switch(rating) {
    case "G":
        message = "General audience";
        break;
    
    case "PG":
        message = "Parental guidance suggested";
        break;
    
    case "PG-13":
        message = "Parents strongly cautioned";
        break;
    
    case "R":
        message = "Restricted";
        break;
    
     case "NC-17":
        message = "Adults only";
        break;

    default:
        message = "Invalid movie rating"
}

console.log("Rating: ", message);


/*
---------------------------------------
Desktop Test
---------------------------------------

rating = "G"
=> General audiences

rating = "PG"
=> Parental guidance suggested

rating = "PG-13"
=> Parents strongly cautioned.

rating = "R"
=> Restricted

rating = "NC-17"
=> Adults only

rating = "N"
=> Invalid movie rating

rating = "13"
=> Invalid movie rating

*/