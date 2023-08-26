// Generate the logo.svg
const createLogo = (answers) => {
  let shapeSVG;
  let textX = 0;
  let textY = 0;
  // Default font-size
  let fontSize = "24px";

  switch (answers.shape) {
    case "Circle":
      shapeSVG = `<circle cx="150" cy="100" r="100" fill="${answers.color}" />
`;
      textX = 150;
      textY = 100;
      break;
    case "Triangle":
      shapeSVG = `<polygon points="150,50 100,150 200,150" fill="${answers.color}" />
`;
      textX = 150;
      textY = 100;
      // Make the font-size 20px to fit inside the triangle better
      fontSize = "20px";
      break;
    case "Square":
      shapeSVG = `<rect width="200" height="200" fill="${answers.color}" />
`;
      // Center the text on the x and y axis
      textX = 100;
      textY = 100; 
      break;
    default:
      shapeSVG = "";
  }

  return `<svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  ${shapeSVG}
  <text x="${textX}" y="${textY}" font-size="${fontSize}" fill="${answers.fontColor}" text-anchor="middle" dominant-baseline="middle">${answers.text}</text>
</svg>
`;
};


module.exports = createLogo;
