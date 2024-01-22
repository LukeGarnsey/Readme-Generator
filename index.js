// TODO: Include packages needed for this application
const inquire = require('inquirer');
const fs = require('fs/promises');
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
    }
];

inquire.prompt(questions).then((answers)=>{
    console.log(answers);
    writeToFile("README.md", answers);
});
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, `# ${data.title}`).then(()=>{
        fs.appendFile(fileName, buildDescription(data)).then(()=>{

        }).catch((err)=>console.log(err));
    }).catch(err =>{
        console.log(err);
    });
}

function buildDescription(data){
    return `## Description
    ${data.description}
    ### Installation Instructions
    ${data.installation}
    ### Usage Information
    ${data.usage}
    ### Contribution
    ${data.contribution}
    ### Test Instructions
    ${data.test}`
}


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
