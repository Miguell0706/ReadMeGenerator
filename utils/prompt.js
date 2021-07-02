const inquirer = require("inquirer")
function prompt() {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is your github username?",
      name: "username",
    },
    {
      type: "input",
      message: "What is your email?",
      name: "email",
    },
    {
      type: "list",
      message: "What type of license would you like?",
      name: "license",
      choices: ["MIT", "APACHE2.0","GPL3.0", "BSD", "None"],
    },
    {
       type:"input",
       message: "What is your title of the project?",
       name: "title",
    },
    {
      type:"input",
      message: "Enter a description of the project",
      name: "description",
    },
    {
      type: "input",
      message: "What does someone need to know about contributing to this project?",
      name: "contribute",
    },
    {
      type: "input",
      message: "Any installation instructions?",
      name: "installation",
      default: "npm i"
    },
    {
      type: "input",
      message: "What are the test instrucitons?",
      name: "test",
      default: "none",
    },
    {
       type: "input",
       message: "What would the user need to know about using the repo?",
       name: "usage",

    }
    
  ])
}
module.exports = prompt;