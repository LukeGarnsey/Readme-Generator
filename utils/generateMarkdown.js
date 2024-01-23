const {licenses} = require("./licenses");
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `
${licenses[license].badge}${licenses[license].link}`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license==="")
    return "";

  return `(${license.link})`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if(data === "None")
    return "";
  
  return `Licensed under the [${data.license}](${renderLicenseLink(data.link)}) license.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `## License
${renderLicenseSection(data)}
`;
}

module.exports = {generateMarkdown, renderLicenseBadge};
