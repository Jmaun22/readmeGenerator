// TODO: Include packages needed for this application
const genmarkdown = require('./utils/generateMarkdown.js');
var inquirer = require('inquirer');
const fs = require('fs');

console.log( genmarkdown.renderLicenseSection('MIT') )
console.log( genmarkdown.renderLicenseLink('MIT'))
console.log( genmarkdown.renderLicenseBadge('MIT'))

// TODO: Create an array of questions for user input
const questions = [
    {type: 'input',
    message: 'What is your user name?',
    name: 'name',
  },
  {type: 'input',
  message: 'What is the title of the project',
  name: 'title',
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
function writeToFile(fileName, data) {

 



}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

    ## Table of Contents
  - [Description](#description)
  - [intallation instructions](#intallation)
  - [usage information](#usage)
  - [contribution guidelines](#contribution)
  - [test instructions](#test)
  - [Questions](#Questions)
  - [License](#License)



    ## Description

    ## intallation 

    ## usage 

    ## contribution

    ## test 

    ## Questions

    ## License

   

  
  `;
  }

// TODO: Create a function to initialize app
function init() {

  console.log(questions);


  inquirer
  .prompt(questions)

  .then((data) => {

    readMe = generateMarkdown(data);

    fs.writeFile('README.md', readMe, (err) =>
    // TODO: Describe how this ternary operator works
    err ? console.error(err) : console.log('Commit logged!')
  );
  
  }).catch((err) => {
      if (err) throw err
  });


}

// Function call to initialize app
init();



   

module.exports = { questions };





