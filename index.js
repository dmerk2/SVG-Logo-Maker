const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Triangle, Square } = require("./lib/shapes.js");

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
    type: "input",
    name: "fontColor",
    message: "What color or hexademial value would you like your text to be?",
  },
  {
    type: "list",
    name: "shape",
    message: "Select the shape you would like for you logo",
    choices: ["Circle", "Triangle", "Square"],
  },
  {
    type: "input",
    name: "color",
    message: "What color or hexademial value would you like for your logo?",
  },
];

// Function to create logo.svg file
const writeToFile = async (fileName, data) => {
  await fs.promises.writeFile(fileName, data, (err) =>
    console.error("Error: ", err)
  );
};

const generateLogo = (answers) => {
  let logoGenerator;

  switch (answers.shape) {
    case "Circle":
      logoGenerator = new Circle(answers);
      break;
    case "Triangle":
      logoGenerator = new Triangle(answers);
      break;
    case "Square":
      logoGenerator = new Square(answers);
      break;
    default:
      console.error("Invalid shape");
      return;
  }

  const logo = logoGenerator.generateLogoSVG();
  writeToFile("./examples/logo.svg", logo);
  console.log("Generated logo.svg!");
};

// Initializing app
const init = () => {
  inquirer
    .prompt(questions)
    .then((responses) => {
      generateLogo(responses);
    })
    .catch((err) => {
      console.error("Error: ", err);
    });
};

init();
