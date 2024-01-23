const fs = require('fs/promises');

exports.buildDescription = (data) =>{
`
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

exports.appendInfo = (file, data) => {
  fs.appendFile(fileName, desc.buildDescription(data));
}