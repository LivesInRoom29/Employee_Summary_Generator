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

module.exports = requireEmail;