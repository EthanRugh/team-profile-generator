const inquirer = require('inquirer');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'manager',
            message: `Hello! Enter the team manager's name`,
            validate: managerInput => {
                if (managerInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'number',
            name: 'id',
            message: 'Enter the team managers employee id number',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter team managers email',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'number',
            name: 'office',
            message: 'Enter team managers office number',
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    ])
    .then(addEmployee)
};

const addEmployee = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'newEmployee',
            messge: 'Would you like to add another employee?',
            choices: [
                'Engineer',
                'Intern',
                `I don't want to add any more employees`
            ]
        },
    ])
    .then((newEmployeeData) => {
        console.log(newEmployeeData.newEmployee);
        if (newEmployeeData.newEmployee == 'Engineer') {
            console.log('new engineer');
        } 
        else if (newEmployeeData.newEmployee == 'Intern') {
            console.log('new intern');
        } else {
            console.log('its working');
        }
    })
};

const addEngineer = () => {
    return inquirer.prompt([
        {
            
        }
    ])
}

promptUser();