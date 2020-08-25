# Employee Summary Generator
[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)

## Description
HW 10 for the UNH Coding Boot Camp.

A command line application that prompts the user for information about the members of a software engineering team and creates an HTML file that displays a formatted roster. The user can input as many employees as they'd like of type manager, engineer, or intern. The different emplyee types will require different types of input, and each will be displayed slightly differently on the roster.

The roster itself is a fully responsive webpage that includes links to employee emails among other information.

The **technology** used to create this project:
* [Node.js](https://nodejs.org/)
* [Inquirer](https://www.npmjs.com/package/inquirer)
* [Jest](https://jestjs.io/docs/en/getting-started)


## Demo

![Employee Summary Generator Demo](demo/teamgendemo.gif)


## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)
7. [Credits](#credits)


## Installation
To install the necessary dependencies, run:
```
npm install
```


## Usage
Step one: From the command line, from within the same directory as the app.js file, run ```npm install```.

Step two: From the command line, run ```node app```.

Step three: Answer the questions about the employees on your team. The last question is <code>Would you like to add another employee?</code>. If you answer <code>y</code> the questions will start again for the next employye. If you anser <code>n</code>, the html file will be written to the output folder.

Step three: Check the output folder for your file - ```team.html```. All of the employee information should be displayed on the page when you open it with your browser.


## License
This project is licensed under the **unlicense** license.


## Contributing
Have an idea for an improvement? Is something not working? Please submit an issue on GitHub. If you see an issue that you'd like to work on, shoot me an email or just sumbit a pull request.


## Tests
In order to run tests on the project, in the console run:
```
npm test
```


## Questions
If you have any questions about this project or repository, please open an issue or contact me at [molly.kizer@gmail.com](mailto:molly.kizer@gmail.com).

You can find more of my work at GitHub under my username [LivesInRoom29](https://github.com/LivesInRoom29).


## Credits
* Starter code provided by Trilogy Education Services.
* Regex for email validation modified from: https://www.regular-expressions.info/email.html
* To generate the animated gif: https://gifcap.dev/
* To make the instructional video: https://www.loom.com/
* Thanks to the UNH Bootcamp instructor, TAs, and tutors for giving us great instruction, resources, and support.
* Thanks to my classmates for sharing awesome resources and questions.
