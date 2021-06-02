

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

module.exports = {
  generateMarkdown, 
  License,
  mit,
  apche,
  gbl,
  bsd,
};
