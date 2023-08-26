const inquirer = require("inquirer");
const fs = require("fs");

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
    choices: ["circle", "square", "triangle"],
  },
];

const init = () => {
  inquirer.prompt(questions);
};

init();
