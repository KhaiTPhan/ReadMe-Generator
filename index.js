const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');


const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'confirm',
      message: 'Before you begin, please ensure you have thoroughly prepared details of your project including all relevant information on installation, tests, links to the appropraite URLs',
      name: 'checkpoint',
    },
    {
      type: 'input',
      message: 'What is your project name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What is the motivation behind this project?',
      name: 'motivation',
    },
    {
      type: 'input',
      message: 'What are the key features of your application?',
      name: 'features',
    },
    {
      type: 'checkbox',
    message: 'What technologies did you use?',
    name: 'tech',
    choices: ['JavaScript','CSS', 'HTML', 'Node.JS', 'Inquirer', 'Jest', 'BootStrap', 'JQuery']
  },
    {
      type: 'input',
      message: 'How to install this application?',
      name: 'setup',
    },
    {
      type: 'input',
      message: 'What tests need to be run to make sure everything is working as it should?',
      name: 'tests',
    },
    {
    type: 'input',
    message: 'If you are open to contributions, what are your requirements for accepting them?',
    name: 'contributions',
    },
    {
      type: 'list',
      message: 'What license arrangement is this project under?',
      name: 'license',
      choices: ['MIT','Apache', 'BSD']
    },
    {
      type: 'input',
      message: 'Enter the filename and path to the project screenshot',
      name: 'screenshot',
    },
    {
      type: 'input',
      message: 'Enter your project URL',
      name: 'projectUrl',
    },
    {
      type: 'input',
      message: 'Enter your GitHub username',
      name: 'github',
    },
    {
      type: 'input',
      message: 'Enter your email address',
      name: 'email',
    },
  ]);

};

const generateMarkdown = (response) =>
`# ${response.name}

[![License: ${response.license}](https://img.shields.io/badge/License-${response.license}-yellow.svg)](https://opensource.org/licenses/${response.license})

## Description

#### Motivation

${response.motivation}

#### Key features

${response.features}

#### Technologies used

* ${response.tech}

## Table of contents

<!--ts-->
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributions](#Contributions)
* [Test instructions](#Test-instructions)
* [Questions](#Questions)
<!--te-->

## Installation

${response.setup}

## Usage

![${response.name}](${response.screenshot})

Below is the link to the project URL.

Project URL: ${response.projectUrl}

## Test instructions

${response.tests}

## License

* ${response.license}

## Contributions

${response.contributions}

## Questions

If you have any questions, please contact me at:

GitHub URL: https://github.com/${response.github}

Email: ${response.email}`

  const init = () => {
    promptUser()
      .then((response) => writeFileAsync('Readme.md', generateMarkdown(response)))
      .then(() => console.log('The file has been successfully created'))
      .catch((err) => console.error(err));
  };  

  init()

  
  