const newEmployee = require('./newEmployee');

// This function will be passed to validate the ID input
const validateID = (value) => {
    // Maps all of the id numbers from the employees object to an array
    const ids = (newEmployee.employees).map((employee) => {
        return employee.id;
    });

    // Checks to see if that id given is a duplicate (if it's in the array)
    if (ids.includes(value)){
        return 'That ID number was already used.'
    }

    // Regex for ID validation
    const pattern = /^[0-9-]{3,20}$/;
    // Return if the value does not match the regex pattern, return the message, otherwise, return true.
    if (!pattern.test(value)) {
        return 'ID number must be between 3 and 20 characters long and can only include numbers and dashes(-)';
    }
    return true;
}

module.exports = validateID;