// Author: Gabbie-Darlin

// Declare variables

const grade = parseFloat(prompt("Enter final grade : "));
const attendance = parseFloat(prompt("Enter attendance percentage : "));
const project = prompt("Was final project submitted? (yes or no)").toLowerCase();

// Data validation
if(isNaN(grade)) {
    alert("The grade should be a number");
} else if(grade < 0 || grade > 100) {
    alert("The grade should be between 0 to 100");
} else if(isNaN(attendance)) {
    alert("The attendance should be a number");
} else if(attendance < 0 || attendance > 100) {
    alert("The attendance should be between 0 to 100");
} else if(project !=="yes" && project !=="no") {
    alert("The final project input should be 'yes' or 'no'");

    // business rules (logic)
    //Declare local variables

    let result = " ";
    let performance = " ";
} else if(attendance < 75) {
    result = "Fail. insufficient attendance";
    performance = "Insufficient";
} else if (grade >= 90) {
        result = "PASS";
        performance = "Excellent";

    } else if(grade >= 70) {
        if (project === "yes") {
            result = "PASS";
            performance = "Good";
        } else {
            result = "remedial exam required.";
        }
    } else if(grade >= 50) {
        result = "remedial exam required";
    } else {
        result = "Fail";
    }
   alert("Student grade: " + grade + " Attendance: " + attendance + " Final project submitted: " + project + " Result " + result);

 if (performance == " 90") {
    alert("Performance level: Not defined");
 } else {
    alert("Perfomance level: *** ");
 }

/* 
================================================
 Desktop Test 
================================================
grade = - 30;       attendance = 45;        project submitted = no;
=> The grade should be between 0 to 100

grade = 30;       attendance = hello;        project submitted = no;
=> The attendance should be a number 

grade = 56;       attendance = 78;        project submitted = no;
=> Remedial exam required

grade = 70;       attendance = 75;        project submitted = yes;
=> PASS

grade = 90;       attendance = 60;        project submitted = yes;
=> Fail. Insufficient attendance

grade = 90;       attendance = 90;        project submitted = no;
=> ----

 */
