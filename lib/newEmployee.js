const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

// Array to store employee information
const employees = [];

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

module.exports= { newEmployee, employees };