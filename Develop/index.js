// TODO: Include packages needed for this application

var inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {type: 'input',
    message: 'What is your user name?',
    name: 'name',
  },
  {type: 'input',
    message: 'What is your gitHub username?',
    name: 'githubusername',
  },
  {type: 'list',
    message: 'What license would you list to use?',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    name: 'license',
  },
  {type: 'input',
  message: 'What is your email',
  name: 'email',
},
{type: 'input',
message: 'What is the link to your github profile?',
name: 'githublink',
},
{type: 'input',
message: 'Please type a description of your project',
name: 'description',
},
{type: 'input',
message: 'Expalin how to install your applicaton.',
name: 'installation',
},
{type: 'input',
message: 'Explain how your application is used.',
name: 'usage',
},
{type: 'input',
message: 'Explaing what tests you would run here',
name: 'tests',
},

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();






