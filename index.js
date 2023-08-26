const inquirer = require("inquirer");
const fs = require("fs");
const createLogo = require("./lib/shapes")

const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter the text you would like to display in your logo",
  },
  {
    type: "list",
    name: "shape",
    message: "Select the sape you would like for you logo",
    choices: ["Circle", "Triangle", "Square"],
  },
  {
    type: "input",
    name: "color",
    message: "What color would you like for your logo?",
  },
];

// Function to write README file
const writeToFile = (fileName, data) => {
  fs.writeFileSync(fileName, data, (err) => console.error("Error: ", err));
};

// Initializing app
const init = () => {
  inquirer
    .prompt(questions)
    // Take the responses from the questions and create readme
    .then((responses) => {
      const logo = createLogo(responses);
      writeToFile("./examples/logo.svg", logo);
      console.log("Generated logo.svg!");
    })
    .catch((err) => {
      console.error("Error: ", err);
    });
};

// Function call to initialize app
init();