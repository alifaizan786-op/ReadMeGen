const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'projectName',
    },
    {
        type: 'input',
        message: 'What is the description of your project?',
        name: 'projectDesc',
    },
    {
        type: 'input',
        message: 'What is the "Table Of Content" of your project?',
        name: 'projectTOC',
    },
    {
        type: 'input',
        message: 'What is the installation process of your project?(Step 1, step 2 )',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What is the Usage of your project?',
        name: 'projectUsage',
    },
    {
        type: 'input',
        message: 'What is the license of your project?',
        name: 'projectLicense',
    },
    {
        type: 'input',
        message: 'Who helped you with this project?(name - githubURL, name - githubURL,)',
        name: 'projectDesc',
    },
    {
        type: 'list',
        message: 'What licenses did you use?',
        name: 'license',
        choices: ['MIT', 'GPLv3', 'Apache', 'ISC']
    },
    {
        type: 'input',
        message: "Any links to resources? (link1, link2)",
        name: 'resources',
    },
    {
        type: 'input',
        message: "What's your github username?",
        name: 'githubUserN',
    },
    {
        type: 'input',
        message: "What's your email for contact?",
        name: 'email',
    },
  ])
  .then(Response => {
    fs.writeFile('Readme.md',
    `
    
    `, (err) => err ? console.log(err) : console.log('Success!'));
}) 