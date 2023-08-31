const Square = require("../lib/square")

// Testing the Square class
describe("Square", () => {
  // Checking if a square is rendered blue
  test("Should return a blue square", () => {
    const shape = new Square();
    const result = `<rect x="50" width="200" height="200" fill="blue" />`;
    shape.setColor("blue");
    expect(shape.render()).toEqual(result);
  });
});