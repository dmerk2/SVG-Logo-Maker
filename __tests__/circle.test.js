const Circle = require("../lib/circle")

// Testing the Circle class
describe("Circle", () => {
  // Checking if a circle is rendered blue
  test("Should return a blue circle", () => {
    const shape = new Circle();
    const result = `<circle cx="150" cy="100" r="100" fill="blue" />`;
    shape.setColor("blue");
    expect(shape.render()).toEqual(result);
  });
});