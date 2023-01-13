const fs = require('fs'); 
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 
const generateHTML = require('./src/generateHTML');

const addManagerPrompt = [
    {
        type: 'input',
        name: 'name',
        message: 'Please Enter The Manager For The Team: ', 
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log ('Please Enter The Manager\'s Name!');
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Please Enter The Manager's ID: ",
        validate: nameInput => {
            if  (isNaN(nameInput)) {
                console.log ('Please Enter The Manager\'s ID!')
                return false; 
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Please Enter The Manager's Email: ",
        validate: email => {
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
            if (valid) {
                return true;
            } else {
                console.log ('Please Enter An Email!')
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "Please Enter The Manager's Office Number: ",
        validate: nameInput => {
            if  (isNaN(nameInput)) {
                console.log ('Please Enter An Office Number!')
                return false; 
            } else {
                return true;
            }
        }
    }
];

const addEmployeePrompt = [
    {
        type: 'list',
        name: 'role',
        message: "Please Choose Your Employee's Role: ",
        choices: ['Engineer', 'Intern']
    },
    {
        type: 'input',
        name: 'name',
        message: "Please Enter The Name Of The Employee: ", 
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log ("Please Enter A Name!");
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Please Enter The Employee's ID: ",
        validate: nameInput => {
            if  (isNaN(nameInput)) {
                console.log ("Please Enter An ID!")
                return false; 
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Please Enter Your Employee's Email: ",
        validate: email => {
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
            if (valid) {
                return true;
            } else {
                console.log ('Please Enter An Email!')
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: "Please Enter Your Employee's Github Username: ",
        when: (input) => input.role === "Engineer",
        validate: nameInput => {
            if (nameInput ) {
                return true;
            } else {
                console.log ("Please Enter A Username!")
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: "Please Enter The Intern's School: ",
        when: (input) => input.role === "Intern",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log ("Please Enter A School Name!")
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmAddEmployee',
        message: 'Do You Want To Add More Members? ',
        default: false
    }
];

let teamArr = [];

function addManager() {
    return inquirer.prompt(addManagerPrompt).then(data => {
        const manager = new Manager(data.name, data.id, data.email, data.officeNumber);

        teamArr.push(manager);
        console.log(manager);
    })
}

function addEmployee() {
    return inquirer.prompt(addEmployeePrompt).then(data => {
        if (data.role === 'Engineer') {
            employee = new Engineer(data.name, data.id, data.email, data.github);

            console.log(employee);
        } else if (data === 'Intern') {
            employee = new Intern(data.name, data.id, data.email, data.school);

            console.log(employee);
        }

        teamArr.push(employee);
                
        if (data.confirm) {
            teamProfileGenerator();
        } else {
            existingManager = false;
            return teamArr;
        }
    })
}

const writeHTML = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("The Team Profile Page Has Been Created!")
        }
    })
};

addManager()
    .then(addEmployee)
    .then(teamArr => {
        return generateHTML(teamArr);
    })
    .then(html => {
        console.log(html);
        return writeHTML(html);
    })
    .catch(err => {
        console.log(err);
    })