const newEmployee = require('./lib/newEmployee');
const questions = require('./lib/questions');
const render = require("./lib/htmlRenderer");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// Takes data and writes it to a file called index.html in the output folder.
const writeToFile = (data) => {
    fs.writeFile(outputPath, data, (err) => {
        if (err) console.log(err);
        else console.log("File generated.");
    });
};

// Get answers from the prompt questions
const promptUser = async () => {
    try {
        const answers = await inquirer.prompt(questions);

        // Create a new instance of specific employee class with the answers
        newEmployee.newEmployee(answers);

        // If the last question, to add another employee, is true, prompt the user with questions again
        if (answers.continue) {
            promptUser();
        // Otherwise use the array of employee classes to generate the html file
        } else {
            // Calls function from render module to create the html file
            const html = render(newEmployee.employees);
            writeToFile(html);
        }
    }
    catch(err) {
        console.log(err);
    }
};

// Function to initialize the program
const init = () => {
    promptUser();
};

init();