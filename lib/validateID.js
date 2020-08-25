// Regex for ID validation
// This function will be passed to validate the ID input
const validateID = (value) => {
    const pattern = /^[0-9-]{3,20}/;
    // Return true if the value matches the regex pattern
    if (pattern.test(value)) {
        return true;
    }
    return 'ID number must be between 3 and 20 characters long and can only include numbers and dashes(-)';
}

module.exports = validateID;