// Required modules
const fileSystem = require('fs');
const pathModule = require('path');
const userPrompt = require('inquirer');
const markdownGenerator = require('./utils/generateMarkdown');

// User input questions
const userQuestions = [
  {
    type: 'input',
    name: 'githubUsername',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'emailAddress',
    message: 'What is your email address?',
  },
  {
    type: 'input',
    name: 'projectTitle',
    message: "What is your project's name?",
  },
  {
    type: 'input',
    name: 'projectDescription',
    message: 'Please write a short description of your project',
  },
  {
    type: 'list',
    name: 'projectLicense',
    message: 'What kind of license should your project have?',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
  },
  {
    type: 'input',
    name: 'dependenciesInstallation',
    message: 'What command should be run to install dependencies?',
    default: 'npm i',
  },
  {
    type: 'input',
    name: 'testCommand',
    message: 'What command should be run to run tests?',
    default: 'npm test',
  },
  {
    type: 'input',
    name: 'repositoryUsage',
    message: 'What does the user need to know about using the repo?',
  },
  {
    type: 'input',
    name: 'contributionInfo',
    message: 'What does the user need to know about contributing to the repo?',
  },
];

// Function to write README file using the user input
function writeToFile(fileName, data) {
  return fileSystem.writeFileSync(pathModule.join(process.cwd(), fileName), data);
}

// Function to initialize the application
function initializeApp() {
  userPrompt.prompt(userQuestions).then((userResponses) => {
    console.log('Generating README...');
    writeToFile('README.md', markdownGenerator({ ...userResponses }));
  });
}

initializeApp();
