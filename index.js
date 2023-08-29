const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Triangle, Square } = require("./lib/shapes.js");
const SVGLogo = require("./lib/svgLogo.js");

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

const generateLogo = ({ text, fontColor, shape, color }) => {
  let logoGenerator;

  switch (shape) {
    case "Circle":
      logoGenerator = new Circle();
      break;
    case "Triangle":
      logoGenerator = new Triangle();
      break;
    case "Square":
      logoGenerator = new Square();
      break;
    default:
      console.error("Invalid shape");
      return;
  }

  logoGenerator.setColor(color);
  const logoSvg = new SVGLogo();
  logoSvg.generateText(text, fontColor);
  logoSvg.generateShape(logoGenerator);
  writeToFile("./examples/logo.svg", logoSvg.generateLogoSVG());
  console.log("Generated logo.svg!");
};

// Initializing app
const init = () => {
  inquirer
    .prompt(questions)
    .then(({ text, fontColor, shape, color }) => {
      generateLogo({ text, fontColor, shape, color });
    })
    .catch((err) => {
      console.error("Error: ", err);
    });
};

init();
