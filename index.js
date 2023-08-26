const inquirer = require("inquirer");
const fs = require("fs");
const createLogo = require("./lib/shapes");

const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter 3 characters to display in your logo.",
    validate: function (input) {
      if (input.length === 3) {
        return true;
      } else {
        return "Please enter 3 characters";
      }
    },
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
    message: "What color or hexademial value would you like for your logo?",
    validate: function (input) {
      if (isValidColor(input)) {
        return true;
      } else {
        return "Please enter a valid color or hexadecimal value.";
      }
    },
  },
  {
    type: "input",
    name: "fontColor",
    message:
      "What color or hexademial value would you like for your font to be for your logo?",
    validate: function (input) {
      if (isValidColor(input)) {
        return true;
      } else {
        return "Please enter a valid color or hexadecimal value.";
      }
    },
  },
];

const isValidColor = (input) => {
  // Check if the input is a valid hexadecimal color code
  const hexColorRegex = /^#([0-9a-fA-F]{3}){1,2}$/;

  return hexColorRegex.test(input);
};

// Function to create logo.svg file
const writeToFile = (fileName, data) => {
  fs.writeFileSync(fileName, data, (err) => console.error("Error: ", err));
};

// Initializing app
const init = () => {
  inquirer
    .prompt(questions)
    // Take the responses from the questions and create logo.svg
    .then((responses) => {
      const logo = createLogo(responses);
      writeToFile("./examples/logo.svg", logo);
      console.log("Generated logo.svg!");
    })
    .catch((err) => {
      console.error("Error: ", err);
    });
};

init();
