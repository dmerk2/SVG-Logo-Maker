const Triangle = require("../lib/triangle");

// Testing the Triangle class
describe("Triangle", () => {
  // Checking if a triangle is rendered blue
  test("Should return a blue triangle", () => {
    const shape = new Triangle();
    const result = `<polygon points="150, 18 244, 182 56, 182" fill="blue" />`;
    shape.setColor("blue");
    expect(shape.render()).toEqual(result);
  });
});
