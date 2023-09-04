const inquirer = require("inquirer");
const fs = require("fs");
const SVGLogo = require("./lib/svgLogo.js");
const Circle = require("./lib/circle.js")
const Square = require("./lib/square.js")
const Triangle = require("./lib/triangle.js")

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
    message: "What color would you like your text to be?",
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
    message: "What color would you like your logo?",
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
  writeToFile("./dist/logo.svg", logoSvg.generateLogoSVG());
  console.log("Generated logo.svg!");
};

// Initializing app
const init = () => {
  inquirer
    .prompt(questions)
    // Destructure the data for text, fontColor, shape, and color
    .then(({ text, fontColor, shape, color }) => {
      generateLogo({ text, fontColor, shape, color });
    })
    .catch((err) => {
      console.error("Error: ", err);
    });
};

init();
