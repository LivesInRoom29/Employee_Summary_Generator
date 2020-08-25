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

// Takes data and writes it to a file called index.html in the output folder.
const writeToFile = (data) => {
    fs.writeFile('./output/index.html', data, (err) => {
        if (err) console.log(err);
        else console.log("File generated.");
    });
}

// Get answers from the prompt questions
const promptUser = async () => {
    const answers = await inquirer.prompt(questions);

    // Create a new instance of specific employee class with the answers
    newEmployee(answers);

    // If the last question, to add another employee, is true, prompt the user with questions again
    if (answers.continue) {
        promptUser();
    // Otherwise use the array of employee classes to generate the html file
    } else {
        // Calls function from render module to create the html file
        const html = render(employees);
        writeToFile(html);
    }
}

// Function to create new class instances and push to employees
const newEmployee = (answers) => {
    // If the the employee is a manager, create a new instance of the manager class; add it to the employees array.
    if (answers.employeetype === 'manager') {
        const { name, id, email, officeNumber } = answers;
        const manager = new Manager(name, id, email, officeNumber);
        employees.push(manager);
        console.log(employees);
    }

    // If the the employee is a engineer, create a new instance of the engineer class; add it to the employees array.
    if (answers.employeetype === 'engineer') {
        const { name, id, email, github } = answers;
        const engineer = new Engineer(name, id, email, github);
        employees.push(engineer);
        console.log(employees);
    }

    // If the the employee is a manager, create a new instance of the manager class; add it to the employees array.
    if (answers.employeetype === 'intern') {
        const { name, id, email, school } = answers;
        const intern = new Intern(name, id, email, school);
        employees.push(intern);
        console.log(employees);
    }
}

// Function to initialize the program
const init = () => {
    promptUser();
};

init();