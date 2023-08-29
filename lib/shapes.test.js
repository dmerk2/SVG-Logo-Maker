const { Triangle, Circle, Square } = require("./shapes");

// Testing the Triangle class
describe("Triangle", () => {
  // Checking if a triangle is rendered blue
  test("Testing color and shape", () => {
    const shape = new Triangle();
    const result = `<polygon points="150, 18 244, 182 56, 182" fill="blue" />`;
    shape.setColor("blue");
    expect(shape.render()).toEqual(result);
  });
});

// Testing the Circle class
describe("Circle", () => {
  // Checking if a circle is rendered blue
  test("Testing color and shape", () => {
    const shape = new Circle();
    const result = `<circle cx="150" cy="100" r="100" fill="blue" />`;
    shape.setColor("blue");
    expect(shape.render()).toEqual(result);
  });
});

// Testing the Square class
describe("Square", () => {
  // Checking if a square is rendered blue
  test("Testing color and shape", () => {
    const shape = new Square();
    const result = `<rect width="200" height="200" fill="blue" />`;
    shape.setColor("blue");
    expect(shape.render()).toEqual(result);
  });
});