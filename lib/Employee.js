// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // Getters... use keywork get? didn't work
    getName() {
        return this.name;
    };
    getId() {
        return this.id;
    };
    getEmail() {
        return this.email;
    };
    // This one will be more specific for children classes.
    getRole() {
        return "Employee";
    };
};

module.exports = Employee;

