
function License (name, badge, link) {
  this.name = name;
  this.badge = badge;
  this.link = link;
}

const mit = new License ('MIT', 'https://img.shields.io/badge/License-MIT-yellow.svg', 'https://img.shields.io/badge/License-MIT-yellow.svg');
const apache = new License ('APACHE 2.0', 'https://img.shields.io/badge/License-Apache%202.0-blue.svg', 'https://opensource.org/licenses/Apache-2.0');
const gpl = new License ('GPL 3.0', 'https://img.shields.io/badge/License-GPLv3-blue.svg', 'https://www.gnu.org/licenses/gpl-3.0', 'https://www.gnu.org/licenses/gpl-3.0');
const bsd = new License ('BSD 3', 'https://img.shields.io/badge/License-BSD%203--Clause-blue.svg', 'https://opensource.org/licenses/BSD-3-Clause');




// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
  ![License: ${answers.license}](https://img.shields.io/badge/license-MIT-blue.svg)(https://opensource.org/licenses/MIT) 
  
  ## Description
  
  ${answers.description}
  
  ## Table of Contents
  
  * [Installation](#installation)
  
  * [Usage](#usage)
  
  * [License](#license)
  
  * [Contributing](#contributing)
  
  * [Tests](#tests)
  
  * [Questions](#questions)
  
  ## Installation
  
  To install necessary dependencies for this app, run the following command:
  
  ${answers.install}
  
  ## Usage
  
  ${answers.usage}
  
  ## Contributing
  
  ${answers.contribute}
  
  ## Tests
  
  To run tests, run the following command: 
  
  ${answers.tests}
  
  ## Questions
  
  If you have any quesitons about this repository, open an issue or contact me directly at [${answers.email}](mailto:${answers.email}). You can find more of my work on my GitHub page at: [${answers.github}](https://github.com/${answers.github}).

  ## License

  Usage of this application is covered under the ${answers.license} license.
`;
}

module.exports = generateMarkdown;
