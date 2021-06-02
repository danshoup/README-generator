// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Write the template literal for including the user input data in the README file.
// const generateReadMe = (answers) =>
// `# ${answers.title}
// ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg) ${answers.license}

// ## Description

// ${answers.description}

// ## Table of Contents

// * [Installation](#installation)

// * [Usage](#usage)

// * [License](#license)

// * [Contributing](#contributing)

// * [Tests](#tests)

// * [Questions](#questions)

// ## Installation

// To install necessary dependencies for this app, run the following command:

// ${answers.install}

// ## Usage

// ${answers.usage}

// ## Contributing

// ${answers.contribute}

// ## Tests

// To run tests, run the following command: 

// ${answers.tests}

// ## Questions

// If you have any quesitons about this repository, open an issue or contact me directly at [${answers.email}](mailto:${answers.email}). You can find more of my work on my GitHub page at: [${answers.github}](https://github.com/${answers.github}).`;

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
                "MIT",
                "APACHE 2.0",
                "GPL 3.0",
                "BSD 3",
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
