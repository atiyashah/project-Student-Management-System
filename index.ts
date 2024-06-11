#! /usr/bin/env node

// Importing inquirer and chalk packages
import inquirer from "inquirer";
import chalk from "chalk";

 //Display a colourfull welcome message
console.log(chalk.bold.rgb(154, 284,284)(` \n  \t\t <<<==========================>>>`));
console.log(chalk.bold.rgb(284, 164,284)(`<<<=======>>> ${chalk.bold.hex(`#9999FF`)(`Welcome to  Atiya shah - Student Management System`)}  <<<=========>>>`));
console.log(chalk.bold.rgb(154, 264,284)(`\t\t <<<==============================>>>\n`));



// Generating a random student ID number
let randomNumber:number = Math.floor(10000 + Math.random() * 90000);

console.log(chalk.blue(`Your generated Student ID: ${randomNumber}\n`));

// Initializing the balance to zero
let myBalance:number = 0;

// Prompting user for student name and course selection
let answer = await inquirer.prompt([
{
name: "students",
type: "input",
message: chalk.greenBright("Enter Student Name"),
// Validation to ensure a non-empty student name is entered
validate: function (value) {
if(value.trim() !== ""){
return true;
}
return chalk.bold.yellow("Please enter a non-empty value.");
}
},
{
name: "courses",
type: "list",
message: chalk.bold.magenta("Select the course to enroll in"),
choices: ["MS Offices", "HTML", "JavaScript", "TypeScript", "Python"]
}
]);

// Defining course fees for each course
const courseFee: {[key: string]: number} = {
"MS Offices": 2000,
"HTML": 2500,
"JavaScript": 5000, // Corrected from "javaScript" to "JavaScript"
"TypeScript": 6000,
"Python": 10000,
};

// Displaying the selected course fee and current balance
console.log(chalk.yellow(`\nCourse Fees: ${courseFee[answer.courses]}/-\n`));
console.log(chalk.yellow(`Balance: ${myBalance}\n`));

// Prompting user for payment method and amount
let paymentType = await inquirer.prompt([
{
name: "payment",
type: "list",
message: "Select payment method",
choices: ["Bank Transfer", "Easypaisa", "Jazzcash"]
},
{
name: "amount",
type: "input",
message: "Transfer Money:",
// Validation to ensure a non-empty amount is entered
validate: function (value) {
if(!isNaN(value) && parseFloat(value) > 0){ return true;
}
return "Please enter a valid amount.";
}
}
]);

// Displaying the selected payment method
console.log(chalk.magenta(`\nYou selected payment method: ${paymentType.payment}`));

// Storing course fee and payment amount for comparison
const courseFees = courseFee[answer.courses];
const paymentAmount = parseFloat(paymentType.amount);

// Checking if the entered payment amount matches the course fee
if(courseFees === paymentAmount){
console.log(chalk.green(`Congratulations, You have successfully enrolled in ${answer.courses}!\n`));

// Prompting user for next action
let ans = await inquirer.prompt([
{
name: "Select",
type: "list",
message: chalk.bgGrey("What would you like to do next?"),
choices: ["View Status", "Exit"]
}
]);

// Displaying student status if user selects "View Status"
if(ans.Select == "View Status"){
console.log(chalk.cyan("\n*********** Status *************"));
console.log(chalk.cyan(`Student Name: ${answer.students}`));
console.log(chalk.cyan(`Student ID: ${randomNumber}`));
console.log(chalk.cyan(`Course Fees Paid: ${paymentAmount}`));
console.log(chalk.cyan(`Balance: ${myBalance += paymentAmount}`));
} else {
console.log(chalk.red("\nExiting Student Management System\n"));
}
} else {
// Error message for invalid payment amount
console.log(chalk.red("Invalid amount for the selected course."));

}
console.log(chalk.bold.italic.blueBright("////////// Good Luck for your course. Happy Coding! ///////////"));


