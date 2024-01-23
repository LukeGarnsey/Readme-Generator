// TODO: Include packages needed for this application
const inquire = require('inquirer');
const fs = require('fs/promises');
const {licenses} = require("./utils/licenses");
const {renderLicenseBadge, generateMarkdown} = require("./utils/generateMarkdown");
const desc = require("./desc");
// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        name:'title',
        message:'Enter Project Title'

    },{
        type:'input',
        name:'description',
        message:'Enter Project Description'
    },{
        type:'input',
        name:'installation',
        message:'Enter Installation Instructions'
    },{
        type:'input',
        name:'usage',
        message:'Enter Usage Information'
    },{
        type:'input',
        name:'contribution',
        message:'Enter Contribution Guidelines'
    },{
        type:'input',
        name:'test',
        message:'Enter Test Instructions'
    },{
        type:'list',
        name:'license',
        message:'What License would you like to use?',
        choices: Object.keys(licenses)
    },
    {
        type:'input',
        name:'github',
        message:'Enter Github username'
    },
    {
        type:'input',
        name:'email',
        message:'Enter Email Address'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, `# ${data.title}`).then(()=>{
        fs.appendFile(fileName, renderLicenseBadge(data.license)).then(()=>{
            fs.appendFile(fileName, buildDescription(data)).then(()=>{
                fs.appendFile(fileName, buildQuestions(data)).then(()=>{
                    fs.appendFile(fileName, generateMarkdown(data.license)).then(()=>{
                        
                    }).catch(err=>console.log(err));
                }).catch(err=>console.log(err));
            }).catch((err)=>console.log(err));
        }).catch(err=>console.log(err));
    }).catch(err =>console.log(err)); 
}
function buildQuestions(data){
    return `
## Questions
Repo owner: [${data.github}](https://github.com/${data.github})
Email: ${data.email}
    `;
}

function buildDescription(data){
    return `
## Description  
    ${data.description}  
## Installation Instructions  
    ${data.installation}  
## Usage Information  
    ${data.usage}
## Contribution
    ${data.contribution}
## Test Instructions
    ${data.test}
`
}


// TODO: Create a function to initialize app
function init() {
    inquire.prompt(questions).then((answers)=>{
        console.log(answers);
        writeToFile("README.md", answers);
    });
}

// Function call to initialize app
init();
