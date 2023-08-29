const SVGLogo = require("./svgLogo");

// Test for the svgLogo class
describe("SVGLogo", () => {
  // Testing the generateText method for the correct message
  test("generateText should generate the correct SVG text", () => {
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
});

