const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Array to store employee information
const employees = [];

// Regex for email validation modified from: https://www.regular-expressions.info/email.html
// This function will be passed to validate the email input
const requireEmail = (value) => {
    const pattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,63}$/;
    // Return true if the value matches the regex pattern
    if (pattern.test(value)) {
        return true;
    }
    return 'Please enter a valid email address.'
}

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// An array of questions to be used with inquirer
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the employee?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the employee\'s ID number?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the employee\'s email address?',
        validate: requireEmail,
    },
    {
        type: 'list',
        name: 'employeetype',
        message: 'What is this employee\'s role?',
        choices: [
            'manager',
            'engineer',
            'intern',
        ]
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the manager\'s office number?',
        when: (answers) => answers.employeetype === 'manager',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the engineer\'s github username?',
        when: (answers) => answers.employeetype === 'engineer',
    },
    {
        type: 'input',
        name: 'school',
        message: 'What school does the intern attend?',
        when: (answers) => answers.employeetype === 'intern',
    },
    {
        type: 'confirm',
        name: 'continue',
        message: 'Would you like to add another employee?',
    },
];

const promptUser = async () => {
    const answers = await inquirer.prompt(questions);
    newEmployee(answers);
    if (answers.continue) {
        promptUser();
    }
}

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

// Function to create instances and push to employees
const newEmployee = (answers) => {

}

// Function to initialize the program
const init = () => {
    promptUser();

    // Make sure to store the data from the answers first, before prompting the user for answers again
    // use a for loop here... if answer to last question is to add another employee, run prompt user again
};

init();