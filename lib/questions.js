const requireEmail = require('./validateEmail');

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

module.exports = questions;