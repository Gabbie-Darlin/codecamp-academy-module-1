// Author: Gab-Darlin <Gabbie-Darlin>

// request input from user
const level = parseFloat(prompt("Enter your player level"));
const vip = prompt("Do you have a VIP membership (yes or no)").toLowerCase();

// data validation
if(isNaN(level)) {
    alert("The player level should be a number");
} else if(vip !== "yes" && vip != "no") {
    alert("Invalid VIP status");
} else if(level < 1) {
    alert("Invalid player level");

    // business rules
} else if (level >= 10) {
    alert("Access granted");
} else if (vip === "yes") {
    alert("Access granted");
} else {
    alert("Access denied");
}


/*
 ==========================================================
Desktop Test
===========================================================
level = "hello"          => The player level should be a number

vip   = "come"           => Invalid VIP status

level = 0                => Invalid player level

level = 3, vip = yes     => Access granted

level = 12,              => Access granted

level = 8, vip = no      => Access denied

level = 10               => Access granted
 */