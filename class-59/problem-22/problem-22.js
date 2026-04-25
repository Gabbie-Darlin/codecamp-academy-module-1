// Author: Gab-Darlin <Gabbie-Darlin>

// User role
const role = "guest";

// global message variable
let message = "";

switch(role) {
    case "admin":
        message = "Full access to the system.";
        break;
    
    case "editor":
        message = "Can edit content.";
        break;
    
    case "viewer":
        message = "Can only view content.";
        break;
    
    default:
        message = "Unknown role.";
}

console.log("Validation: ", message);


/*
---------------------------------------
Desktop Test
---------------------------------------

role = "admin"
=> Full access to the system.

role = "editor"
=> Can edit content.

role = "viewer"
=> Can only view content.

role = "guest"
=> Unknown role.

role = ""
=> Unknown role.

---------------------------------------
*/