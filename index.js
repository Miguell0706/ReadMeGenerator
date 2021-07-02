// TODO: Include packages needed for this application
const fs = require("fs");
const prompt = require("./utils/prompt");
const generateMarkdown = require("./utils/generateMarkdown");

prompt().then(function (user) {
  fs.writeFile("README.md", generateMarkdown(user), function (err) {
   console.log("File created");
  });
});
// // TODO: Create a function to initialize app
// function init() {}
// // Function call to initialize app
// init();