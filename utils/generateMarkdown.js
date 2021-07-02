// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![Generic badge](https://img.shields.io/badge/license-${license}-blue.svg)
    `
  
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `*[License](#license)`
    
  }
  return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
    This project has ${license} license.`
    
  }
  return ""
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
${renderLicenseBadge(data.license)}


## Description: 
${data.description}

## Table of Contents: 
*[Installation](#installation)

*[Contribution](#contribute)

*[Description](#description)

*[Test](#test)

*[Usage](#usage)

*[Questions](#questions)

${renderLicenseLink(data.license)}

${renderLicenseSection(data.license)}

## Contribution
${data.contribute}

## Usage
${data.usage}

## Installation
${data.installation}

## Test 
${data.test}


## Questions
If you have any questions, you can contact me at ${data.email}.

If you would like to see my profile, my github is [${data.username}](https://github.com/${data.username})
`
}
module.exports = generateMarkdown;
