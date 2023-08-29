const SVGLogo = require("../lib/svgLogo");

// Test for the svgLogo class
describe("SVGLogo", () => {
  // Testing the generateText method for the correct message
  test("generateText should generate a blue logo with the text DSM", () => {
    const logo = new SVGLogo();
    const result = `<text x="150" y="100" font-size="24px" fill="blue" text-anchor="middle" dominant-baseline="middle">DSM</text>`;
    const generatedText = logo.generateText("DSM", "blue");
    expect(generatedText).toEqual(result);
  });

  // Testing the generateShape method to return the correct shape
  test("generateShape should generate a circle", () => {
    const logo = new SVGLogo();
    // Defining a shape object with the render method
    const mockShape = {
      render: () => '<circle cx="150" cy="150" r="50" fill="blue" />',
    };
    // Get the shape output
    const generatedShape = mockShape.render();
    logo.generateShape(mockShape);
    expect(logo.shape).toEqual(generatedShape);
  });

  // Testing the generateLogoSVG mthod to return the correct text and color
  test("generateLogoSVG should generate a blue circle with the text DSM", () => {
    const logo = new SVGLogo();

    // Define a shape object with a render method
    const mockShape = {
      render: () => '<circle cx="150" cy="150" r="50" fill="blue" />',
    };

    const message = "DSM";
    const color = "blue";
    logo.generateText(message, color);
    logo.generateShape(mockShape);

    // Create the expected logo for a test logo and remove extra whitespace to normalize whitespace
    const expectedSVG =
      `<svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        ${mockShape.render()} 
        <text x="150" y="100" font-size="24px" fill="${color}" text-anchor="middle" dominant-baseline="middle">${message}</text>
      </svg>`.replace(/\s+/g, " ");

    // Generate a logo and remove extra whitespace to normalize whitespace
    const generatedSVG = logo.generateLogoSVG().replace(/\s+/g, " ");

    expect(generatedSVG).toEqual(expectedSVG);
  });
});
