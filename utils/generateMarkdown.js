
function License (name, badge, link, text) {
  this.name = name;
  this.badge = badge;
  this.link = link;
  this.text = text;
}

const mit = new License (
  'MIT', 
  'https://img.shields.io/badge/License-MIT-yellow.svg', 
  'https://opensource.org/licenses/MIT',
  `Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n\n
  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\n
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
  );
const apache = new License (
  'APACHE 2.0', 
  'https://img.shields.io/badge/License-Apache%202.0-blue.svg', 
  'https://opensource.org/licenses/Apache-2.0',
  `Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.\n\n
  You may obtain a copy of the license at:\n
  [http://www.apache.orgllicenseslLICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)\n\n
  Unless required by applicable law or agreed to in writing, software distributed under the license is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the license for the specific language governing permissions and limitations under the license.`
  );
const gpl = new License (
  'GPL 3.0', 
  'https://img.shields.io/badge/License-GPLv3-blue.svg', 
  'https://www.gnu.org/licenses/gpl-3.0', 
  `This program is free software: you can redistribute it and/or modif it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.\n\n
  This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public license for more details.\n\n
  For information about the GNU public license see: <https://www.gnu.org/licenses/>.`
  );
const bsd = new License (
  'BSD 3', 
  'https://img.shields.io/badge/License-BSD%203--Clause-blue.svg', 
  'https://opensource.org/licenses/BSD-3-Clause',
  `Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:\n\n
  1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.\n\n
  2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.\n\n
  3. Neither the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.\n\n
  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`
  );



// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  var today = new Date();
  var year = today.getFullYear();

  let badgeChoice = (`${answers.license}`);
  switch (badgeChoice) {
    case 'MIT':
      badgeChoice = mit.badge;
      break;
    case 'APACHE 2.0':
      badgeChoice = apache.badge;
      break;
    case 'GPL 3.0':
      badgeChoice = gpl.badge;
      break;
    case 'BSD 3':
      badgeChoice = bsd.badge;
      break;
    default: 
      break;

  };

  let badgeLink = (`${answers.license}`);
  switch (badgeLink) {
    case 'MIT':
      badgeLink = mit.link;
      break;
    case 'APACHE 2.0':
      badgeLink = apache.link;
      break;
    case 'GPL 3.0':
      badgeLink = gpl.link;
      break;
    case 'BSD 3':
      badgeLink = bsd.link;
      break;
    default: 
      break;

  };

  let licenseLink = (`${answers.license}`);
  switch (licenseLink) {
    case 'MIT':
      licenseLink = mit.text;
      break;
    case 'APACHE 2.0':
      licenseLink = apache.text;
      break;
    case 'GPL 3.0':
      licenseLink = gpl.text;
      break;
    case 'BSD 3':
      licenseLink = bsd.text;
      break;
    default: 
      break;

  };


  return `# ${answers.title}

  ![License: ${answers.license}](${badgeChoice})  

  [Link to the ${answers.license} License OpenSource Documentation](${badgeLink})

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
  ~~~
  ${answers.install}
  ~~~
  ## Usage
  
  ${answers.usage}
  
  ## Contributing
  
  ${answers.contribute}
  
  ## Tests
  
  To run tests, run the following command: 
  ~~~
  ${answers.tests}
  ~~~
  ## Questions
  
  If you have any quesitons about this repository, open an issue, or contact me directly at [${answers.email}](mailto:${answers.email}). You can find more of my work on my GitHub page at: [${answers.github}](https://github.com/${answers.github}).

  ## License

  Usage of this application is covered under the **${answers.license}** license. 

  [Click here to read more about the ${answers.license} license.](${badgeLink})

  Copyright ${year}; ${answers.user}

  ${licenseLink}
`;
}

module.exports = generateMarkdown;
 
