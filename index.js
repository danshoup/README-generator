// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Constructor for license parts

function License (name, badge, link) {
    this.name = name;
    this.badge = badge;
    this.link = link;
  }
  
  const mit = new License ('MIT', 'https://img.shields.io/badge/License-MIT-yellow.svg', 'https://img.shields.io/badge/License-MIT-yellow.svg');
  const apache = new License ('APACHE 2.0', 'https://img.shields.io/badge/License-Apache%202.0-blue.svg', 'https://opensource.org/licenses/Apache-2.0');
  const gpl = new License ('GPL 3.0', 'https://img.shields.io/badge/License-GPLv3-blue.svg', 'https://www.gnu.org/licenses/gpl-3.0', 'https://www.gnu.org/licenses/gpl-3.0');
  const bsd = new License ('BSD 3', 'https://img.shields.io/badge/License-BSD%203--Clause-blue.svg', 'https://opensource.org/licenses/BSD-3-Clause');


// Build the array of inquirer prompts that gather user input info.

inquirer
    .prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the titile of your project?',
        },
        {
            type: 'input',
            name: 'title',
            message: 'Write a short description of your project:',
        },
        {
            type: 'list',
            choices: [
                mit.name,
                apache.name,
                gpl.name,
                bsd.name,
                "NONE"
            ],
            name: 'license',
            message: 'What kind of license should your project have?',
        },
        {
            type: 'input',
            name: 'install',
            message: 'What command should be run to install dependencies?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What command should be run in order to run tests?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What does the user need to know about using this repository?',
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'What does the user need to know about how they can contribute to the project?',
        },

    ])

    // Then code that inserts the README answers into the template, and writes a new README file with the user input included. 

    .then((answers) => {
        const readMeContent = generateMarkdown(answers);

        fs.writeFile('README.md', readMeContent, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md!')
        );
    });





// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
