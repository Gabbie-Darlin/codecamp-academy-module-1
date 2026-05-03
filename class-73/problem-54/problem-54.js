/*  Author: Gab-Darlin <Gabbie-Darlin>
    Solution: daily task scheduler
 */

let tasks = ["Check emails", "Write report", "Attend meeting", "Review code"];

//1. Print the total number of tasks in the list
console.log (`\nTotal number of tasks: ${tasks.length}`);

//2. Add a new task "Plan tomorrow's work" at the beginning of the list.
tasks.push("Plan tomorrow's work");

//3. Insert a new task **"Morning exercise"** at the **beginning** of the list.
tasks.unshift("Morning exercise");


//4. Find the position of the task **"Attend meeting"** in the list.
let position = tasks.indexOf("Attend meeting");
console.log(`\nThe position of "Attend meeting" is: ${position}`);

//5.Mark **"Attend meeting"** as completed by replacing it with **"Attend meeting (Completed)"**.
tasks[3] = "Attend meeting (Completed)";

//6. Remove the task **"Check emails"** from the list.
let state = tasks.indexOf("Check emails");
tasks.splice(1,state);

//7. Print all remaining tasks 
for  (let i = 0; i < tasks.length; i++) {
    console.log(`Task ${i + 1} : ${tasks[i]}`)
}

//8. Check if the task **"Review code"** still exists in the list.
for (let i = 0; i < tasks.length; i++) {
    if(tasks.includes("Review code")) {
        console.log(`Task still pending`);
        break;
    }else {
        console.log(`Task completed or removed`);
        break;
    }
}