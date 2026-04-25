// Author: Gab-Darlin <Gabbie-Darlin>

const readline = require("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output: process.stdout
});

console.log(`
    Select an option:

    1 - Welcome message
    2 - System status
    3 - Exit
    4 - Help
`);

rl.question("Enter your choice: ", (option) => {
    const choice = parseInt(option);

    switch (choice) {

        case 1:
            console.log("Welcome to the system");
            break;

        case 2:
            console.log("Sytem status: Running correctly");
            break;
        
        case 3:
            console.log("Goodbye");
            break;

        case 4:
            console.log("Help: Contact the system administrator");
            break;
        
        default:
            console.log("Invalid option. Please select a valid option");
    }

    rl.close();
})