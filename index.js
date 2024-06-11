#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importing inquirer and chalk packages
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
//Display a colourfull welcome message
console.log(chalk_1.default.bold.rgb(154, 284, 284)(` \n  \t\t <<<==========================>>>`));
console.log(chalk_1.default.bold.rgb(284, 164, 284)(`<<<=======>>> ${chalk_1.default.bold.hex(`#9999FF`)(`Welcome to  Atiya shah - Student Management System`)}  <<<=========>>>`));
console.log(chalk_1.default.bold.rgb(154, 264, 284)(`\t\t <<<==============================>>>\n`));
// Generating a random student ID number
let randomNumber = Math.floor(10000 + Math.random() * 90000);
console.log(chalk_1.default.blue(`Your generated Student ID: ${randomNumber}\n`));
// Initializing the balance to zero
let myBalance = 0;
// Prompting user for student name and course selection
let answer = await inquirer_1.default.prompt([
    {
        name: "students",
        type: "input",
        message: chalk_1.default.greenBright("Enter Student Name"),
        // Validation to ensure a non-empty student name is entered
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return chalk_1.default.bold.yellow("Please enter a non-empty value.");
        }
    },
    {
        name: "courses",
        type: "list",
        message: chalk_1.default.bold.magenta("Select the course to enroll in"),
        choices: ["MS Offices", "HTML", "JavaScript", "TypeScript", "Python"]
    }
]);
// Defining course fees for each course
const courseFee = {
    "MS Offices": 2000,
    "HTML": 2500,
    "JavaScript": 5000, // Corrected from "javaScript" to "JavaScript"
    "TypeScript": 6000,
    "Python": 10000,
};
// Displaying the selected course fee and current balance
console.log(chalk_1.default.yellow(`\nCourse Fees: ${courseFee[answer.courses]}/-\n`));
console.log(chalk_1.default.yellow(`Balance: ${myBalance}\n`));
// Prompting user for payment method and amount
let paymentType = await inquirer_1.default.prompt([
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
            if (!isNaN(value) && parseFloat(value) > 0) {
                return true;
            }
            return "Please enter a valid amount.";
        }
    }
]);
// Displaying the selected payment method
console.log(chalk_1.default.magenta(`\nYou selected payment method: ${paymentType.payment}`));
// Storing course fee and payment amount for comparison
const courseFees = courseFee[answer.courses];
const paymentAmount = parseFloat(paymentType.amount);
// Checking if the entered payment amount matches the course fee
if (courseFees === paymentAmount) {
    console.log(chalk_1.default.green(`Congratulations, You have successfully enrolled in ${answer.courses}!\n`));
    // Prompting user for next action
    let ans = await inquirer_1.default.prompt([
        {
            name: "Select",
            type: "list",
            message: chalk_1.default.bgGrey("What would you like to do next?"),
            choices: ["View Status", "Exit"]
        }
    ]);
    // Displaying student status if user selects "View Status"
    if (ans.Select == "View Status") {
        console.log(chalk_1.default.cyan("\n*********** Status *************"));
        console.log(chalk_1.default.cyan(`Student Name: ${answer.students}`));
        console.log(chalk_1.default.cyan(`Student ID: ${randomNumber}`));
        console.log(chalk_1.default.cyan(`Course Fees Paid: ${paymentAmount}`));
        console.log(chalk_1.default.cyan(`Balance: ${myBalance += paymentAmount}`));
    }
    else {
        console.log(chalk_1.default.red("\nExiting Student Management System\n"));
    }
}
else {
    // Error message for invalid payment amount
    console.log(chalk_1.default.red("Invalid amount for the selected course."));
}
console.log(chalk_1.default.bold.italic.blueBright("////////// Good Luck for your course. Happy Coding! ///////////"));
