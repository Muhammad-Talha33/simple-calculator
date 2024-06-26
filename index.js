#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const answer = await inquirer.prompt([
    { message: "Enter your first number", type: "number", name: "firstNumber" },
    { message: "Enter your second number", type: "number", name: "secondNumber" },
    {
        message: "Select one of the operators to perform operation ",
        type: "list",
        name: "operator",
        choices: [
            "Addition",
            "Subtraction",
            "Multiplication",
            "Division",
            "Modulus",
            "Exponentiation",
        ],
    },
]);
if (answer.operator === "Addition") {
    console.log(chalk.greenBright(answer.firstNumber + answer.secondNumber));
}
else if (answer.operator === "Subtraction") {
    console.log(chalk.greenBright(answer.firstNumber - answer.secondNumber));
}
else if (answer.operator === "Multiplication") {
    console.log(chalk.greenBright(answer.firstNumber * answer.secondNumber));
}
else if (answer.operator === "Division") {
    console.log(chalk.greenBright(answer.firstNumber / answer.secondNumber));
}
else if (answer.operator === "Modulus") {
    console.log(chalk.greenBright(answer.firstNumber % answer.secondNumber));
}
else if (answer.operator === "Exponentiation") {
    console.log(chalk.greenBright(answer.firstNumber ** answer.secondNumber));
}
else {
    console.log("Please choose a valid operator");
}
