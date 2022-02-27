// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
        type: 'input',
        name: 'Title',
        message: 'What is the project title?',
        },
        {
        type: 'input',
        name: 'Description',
        message: 'Provide a short description of your project.',
        },
        {
        type: 'input',
        name: 'Installation',
        message: 'What are the steps required to install your project?',
        },
        {
        type: 'input',
        name: 'Usage',
        message: 'Provide instructions and examples for use.',
        },
        {
        type: 'input',
        name: 'Credits',
        message: 'List of collaborators and 3rd party assets.',
        },
        {
        type: 'input',
        name: 'License',
        message: 'What is the license type?',
        },
    ])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
