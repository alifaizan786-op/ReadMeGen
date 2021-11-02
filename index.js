const inquirer = require('inquirer');
const fs = require('fs');

const parseString = (string) => {
    let list = string.split(',');
    let items = '';
    list.forEach(item => {items+=`- ${item}\n`});
    return items;
}

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
        name: 'projectCont',
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
    {
        type: 'input',
        message: "What's the link to the image you would like to add to the readme?",
        name: 'imgLink',
    }
  ])
  .then(Response => {
    fs.writeFile('Readme.md',
    `
    # ${projectName}
    ## Description
    ${projectDesc}\n
    Live Link: [${projectName}](https://github.com/${githubUserN}/${projectName})
    ---
    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    - [Questions](#questions)
    ---
    ## Installation
    ${parseString(installation)}
    ## Usage
    ${projectUsage}\n
    ![${imgLink}](${imgLink})
    ## Tests
    ${test}
    ## Credits
    ### People
    ${parseString(projectCont)}
    ### Resources
    ${parseString(resources)}
    ## License
    ![${license}](https://img.shields.io/static/v1?label=license&message=${license}&color=brightgreen&style=plastic)
    ## Questions
    Github UN: ${githubUserN} - [${githubUserN}](https://github.com/${githubUserN})
    You can contact me via email by emailing ${email} with your questions
        
    `, (err) => err ? console.log(err) : console.log('Success!'));
}) 